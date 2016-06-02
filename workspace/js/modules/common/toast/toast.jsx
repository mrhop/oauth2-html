/**
 * Created by Donghui Huo on 2016/6/2.
 */
require('./toast.scss');
let toastWrapper = null;
function createToast(toastValues, type) {
    if (!toastWrapper) {
        var nodeDiv = document.createElement('div')
        document.body.insertBefore(nodeDiv, document.body.children[0]);
        toastWrapper = ReactDOM.render(<ToastWrapper />, nodeDiv);
    }
    //NEED TO COMPONENT
    if (!type || type == 'default') {
        toastWrapper.addToast(<DefaultToast key={UtilFun.uuid()}  toastValues={toastValues}/>);
    } else {
        //other creation
    }
}

class ToastWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
        this.addToast = this.addToast.bind(this);
    }

    addToast(toast) {
        this.state.data.unshift(toast);
        this.forceUpdate();

    }

    render() {
        return (<div id="toast-container" className="right-top">{this.state.data}</div> );
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
            return (this.renderBasic());
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
