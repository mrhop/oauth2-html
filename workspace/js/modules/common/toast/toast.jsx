/**
 * Created by Donghui Huo on 2016/6/2.
 */
require('./toast.scss');
function createToast(toastValues, type) {
    if (!document.querySelector('#toast-container')) {
        var elem = document.createElement('div');
        elem.id = 'toast-container';
        elem.classList.add('right-top');
        document.body.insertBefore(elem, document.body.childNodes[0]);
    }
    if (!type || type == 'default') {
        ReactDOM.render(
            <DefaultToast toastValues={toastValues}/>,
            document.querySelector('#toast-container')
        );
    } else {
        //other creation
    }
}
//now changes shall be state changes[]

class ToastWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    render() {
        var toasts = this.state.data.map(function (toast) {
            return (
            {toast}
            );
        });
        return (<div id="toast-container" className="right-top">{toast}</div> );
    }
}

class BasicToast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {alertVisible: true};
    }


    handleAlertDismiss() {
        this.setState({alertVisible: false});
    }

    closeToast() {
        this.toastDom.classList.remove('open');
        this.toastDom.classList.add('close');
    }


    componentDidMount() {
        //need a setInterval close this toast
        //open trigger
        UtilFun.domReady(function () {
            this.toastDom.addEventListener('webkitAnimationEnd', function () {
                if (this.toastDom.classList.contains('close')) {
                    this.handleAlertDismiss();
                }
            }.bind(this));
            window.setTimeout(function () {
                this.closeToast();
            }.bind(this), 3000);
            this.toastDom.style.display = 'block';
            this.toastDom.classList.add('open');
            this.toastDom.classList.remove('close');
        }.bind(this));

    }

    renderBasic(dialogExtraClass) {
        var classNames = require('classnames');
        var dialogClass = classNames('toast-dialog', dialogExtraClass);
        return (
            <div className="toast" ref={(ref) => this.toastDom = ref}>
                <div className="left-icon">
                    <i className="fa"/>
                </div>
                <button type="button" className="close fa"
                        onClick={this.closeToast.bind(this)}></button>
                {this.props.toastValues.title ? <h4 className="toast-title">
                    {this.props.toastValues.title}
                </h4> : null}
                {this.props.toastValues.content}
                {this.props.children}
            </div>
        );
    }
}

class DefaultToast extends BasicToast {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.state.alertVisible) {
            return (super.renderBasic());
        } else {
            return null;
        }

    }
}

//toastValues title,content,button-value
DefaultToast.propTypes = {toastValues: React.PropTypes.object};

module.exports = {
    createToast
};
