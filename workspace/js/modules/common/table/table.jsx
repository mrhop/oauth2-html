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
        var tableClass = classNames('table', tableExtraClass,
            (this.props.additionalFeature && this.props.additionalFeature.extraClass ? this.props.additionalFeature.extraClass : null));
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
                    return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}
                                className={subItem.className}>{subItem.title}</td>);
                });
                return (<tr key={index}>{tds}</tr>);
            }, this);
        }
        var tfoot = null;
        if (this.props.tableValues.tfoot) {
            tfoot = this.props.tableValues.tfoot.map(function (subItem, index) {
                return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}
                            className={subItem.className}>{subItem.title}</td>);
            }, this);
        }
        var topOperations = [];
        if (tableExtraClass == 'row-editable') {
            topOperations[0] =
                <button className="btn btn-primary">Add row</button>;
        }
        if (this.props.additionalFeature && this.props.additionalFeature.pager) {
            topOperations[1] = <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>;
            //foot pagers
        }
        if (topOperations.length > 0) {

        }
        return (
            <div className="table-root" style={style}>
                {topOperations.length > 0 ? <div className="top-operations">{topOperations}</div> : null }
                <CustomScrollbar>
                    <table className={tableClass}>
                        <thead>
                        <tr>
                            {thead}
                        </tr>
                        </thead>
                        <tfoot>
                        <tr className={(tableExtraClass == 'striped' || (this.props.additionalFeature && this.props.additionalFeature.extraClass == 'striped') ) && this.props.tableValues.tbody.length % 2 == 0 ? 'tr-deep' : null}>
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

class HoverTable extends BasicTable {
    render() {
        return (
            this.renderBasic('hover')
        );
    }
}

class BorderTable extends BasicTable {
    render() {
        return (
            this.renderBasic('border')
        );
    }
}
class CondensedTable extends BasicTable {
    render() {
        return (
            this.renderBasic('condensed')
        );
    }
}
class StripedTable extends BasicTable {
    render() {
        return (
            this.renderBasic('striped')
        );
    }
}

//editable table with row or cell,different way
class RowEditableTable extends BasicTable {
    render() {
        return (
            this.renderBasic('row-editable')
        );
    }
}


DefaultTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object
};
HoverTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object
};
BorderTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object
};
CondensedTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object
};
StripedTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object
};
RowEditableTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object
};
//tableValues  except the thead tbody tfoot,other features: sort(just add to the thead>th),extra class for editable table{extraClass:hover},pager{pageSize:10}
//pay attention to the state data

module.exports = {
    DefaultTable,
    HoverTable,
    BorderTable,
    CondensedTable,
    StripedTable,
    RowEditableTable
};