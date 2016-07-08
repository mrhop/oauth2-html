/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./panel.scss');

class DefaultPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {panelActionCallBack: {}};
    }

    componentDidMount() {
        if (this.state.panelActionCallBack.onClick) {
            this.panelDom.addEventListener('click',function(){
                this.state.panelActionCallBack.onClick();
            }.bind(this));
        }
    }
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                panelActionCallBack: this.state.panelActionCallBack
            })
        );
        return (
            <div className="panel">
                <div className="panel-body">
                    {childrenWithProps}
                </div>
            </div>
        );
    }
}

class PanelWithHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {panelActionCallBack: {}};
    }

    componentDidMount() {
        if (this.state.panelActionCallBack.onClick) {
            this.panelDom.addEventListener('click',function(){
                this.state.panelActionCallBack.onClick();
            }.bind(this));
        }
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                panelActionCallBack: this.state.panelActionCallBack
            })
        );
        return (
            <div className="panel" ref={(ref) => this.panelDom = ref}>
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.panelValues.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.panelValues.content}
                    {childrenWithProps}
                </div>
            </div>
        );
    }
}

DefaultPanel.propTypes = {panelValues: React.PropTypes.object};
PanelWithHeader.propTypes = {panelValues: React.PropTypes.object};
//panelValues title,content,button-value

module.exports = {
    DefaultPanel,
    PanelWithHeader
};