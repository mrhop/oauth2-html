/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./modal.scss');

 class DefaultModal extends React.Component {
    render() {
        return (
            <div className="modal">
            </div>
        );
    }
}

DefaultModal.propTypes = { modalValues: React.PropTypes.array};
//modalValues title,content,button-value

module.exports = {
    DefaultModal
};