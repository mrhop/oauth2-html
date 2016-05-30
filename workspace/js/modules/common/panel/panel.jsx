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

DefaultPanel.propTypes = { panelValues: React.PropTypes.array};
//panelValues title,content,button-value

module.exports = {
    DefaultPanel
};