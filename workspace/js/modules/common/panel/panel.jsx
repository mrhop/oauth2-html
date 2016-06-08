/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./panel.scss');

class DefaultPanel extends React.Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class PanelWithHeader extends React.Component {
    render() {
        return (
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.panelValues.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.panelValues.content}
                    {this.props.children}
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