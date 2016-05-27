/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./tab.scss');

 class DefaultTab extends React.Component {
    render() {
        return (
            <div className="tab">
            </div>
        );
    }
}

DefaultTab.propTypes = { tabValues: React.PropTypes.array};
//tabValues title\ & related-content

module.exports = {
    DefaultTab
};