/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./table.scss');

 class DefaultTable extends React.Component {
    render() {
        return (
            <div className="table">
            </div>
        );
    }
}

DefaultTable.propTypes = { tableValues: React.PropTypes.array};
//tabValues title/list/caption
//be attention the state data

module.exports = {
    DefaultTable
};