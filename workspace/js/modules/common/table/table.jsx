/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./table.scss');

class BasicTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    renderBasic(tableExtraClass) {
        var classNames = require('classnames');
        var tableClass = classNames('table', tableExtraClass);
        var style = null;
        if (this.props.minHeight) {
            style = {
                height: 1,
                minHeight: this.props.minHeight
            };
        }
        var thead = null;
        if (this.props.tableValues.thead) {
            thead = this.props.tableValues.thead.map(function (subItem, index) {
                return (<th key={index} className={subItem.className}
                            colSpan={subItem.colSpan ? subItem.colSpan : null}>{subItem.title}</th>);
            }, this);
        }
        var tbody = null;
        if (this.props.tableValues.tbody) {
            tbody = this.props.tableValues.tbody.map(function (subItem, index) {
                var tds = subItem.map(function (subItem, index) {
                    return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null} className={subItem.className}>{subItem.title}</td>);
                });
                return (<tr key={index}>{tds}</tr>);
            }, this);
        }
        var tfoot = null;
        if (this.props.tableValues.tfoot) {
            tfoot = this.props.tableValues.tfoot.map(function (subItem, index) {
                return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null} className={subItem.className}>{subItem.title}</td>);
            }, this);
        }
        return (
            <div className="table-root" style={style}>
                <CustomScrollbar>
                    <table className={tableClass}>
                        <thead>
                        <tr>
                            {thead}
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            {tfoot}
                        </tr>
                        </tfoot>
                        <tbody>
                        {tbody}
                        </tbody>
                    </table>
                </CustomScrollbar>
            </div>
        );
    }
}

class DefaultTable extends BasicTable {
    render() {
        return (
            this.renderBasic()
        );
    }
}

DefaultTable.propTypes = {tableValues: React.PropTypes.object, minHeight: React.PropTypes.number};
//tabValues title/list/caption
//be attention the state data

module.exports = {
    DefaultTable
};