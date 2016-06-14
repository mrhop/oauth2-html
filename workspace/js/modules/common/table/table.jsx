/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./table.scss');
// need to give the getList + updateList + deleteList + add url
const defaultRowSizeOptions = [
    {value: '5', label: '5'},
    {value: '10', label: '10'},
    {value: '15', label: '15'},
    {value: '20', label: '20'},
    {value: '25', label: '25'}
];
class BasicTable extends React.Component {
    constructor(props) {
        super(props);
        this.tableId = 'id-' + UtilFun.uuid();
        //this.props.formId = UtilFun.uuid();
        this.state = {};
        //table values shall be get from url not props,but additionalFeature shall be at the props[for show features but not data]
        var additionalFeature = this.props.additionalFeature;
        if (additionalFeature && additionalFeature.pager) {
            this.state.pager = {show: true, currentValue: 0};
            this.state.pager.options = [{label: 1, value: 0}, {label: 2, value: 1, active: true}, {
                label: 3,
                value: 2
            }, {label: 4, value: 3}];
            if (additionalFeature.pager.rowSize && additionalFeature.pager.rowSize.show) {
                this.state.pager.rowSize = {show: true};
                this.state.pager.rowSize.options = additionalFeature.pager.rowSize.options ? additionalFeature.pager.rowSize.options : defaultRowSizeOptions;
            }
        }
        if (additionalFeature && additionalFeature.sortAvailable) {
            this.state.sort = {available: true};
        }
        if (additionalFeature && additionalFeature.filterAvailable) {
            this.state.filter = {available: true};
        }
        if (this.props.tableValues && this.props.tableValues.thead) {
            //sort init
            this.props.tableValues.thead.map(function (subItem, index) {
                if (this.state.sort && this.state.sort.available) {
                    if (subItem.sort) {
                        this.state.sort.currentTh = {sortName: subItem.value, sortDirection: subItem.sort};
                    }
                }
            }, this);
        }
        //需要创建search的字段，state的filter，sort，pager
        //create。update 的链接地址
    }

    componentDidMount() {
    }

    onRowSizeChange(value) {
        this.state.pager.rowSize.value = value;
        this.forceUpdate();
        console.log('You\'ve selected:', value);
    }

    onPagerClick(value) {
        this.state.pager.currentValue = value;
        this.forceUpdate();
        console.log('pager click! ' + value);
    }

    onSortClick(sortName) {
        if (this.state.sort.currentTh && this.state.sort.currentTh.sortName == sortName) {
            this.state.sort.currentTh.sortDirection = this.state.sort.currentTh.sortDirection == 'asc' ? 'desc' : 'asc';
        } else {
            this.state.sort.currentTh = {sortName: sortName, sortDirection: 'asc'};
        }
        this.forceUpdate();
        console.log('sort name ' + sortName);
    }

    onRowEdit(rowKey) {
        console.log('row key ' + rowKey);
    }

    onRowDelete(rowKey) {
        console.log('row key ' + rowKey);
    }


    onFilterChange(filterName) {
        //change the data relate and update
        //ADD THE FILTERs to the state object as an array[{name:xxx,value:xxx}] then deal with the data and forceUpdate
        //this.forceUpdate();
        console.log('filter value ' + filterName + '  ' + document.querySelector('#' + this.tableId + ' input[name="' + filterName + '-filter-name' + '"]').value);
    }

    renderBasic(tableExtraClass) {
        var additionalFeature = this.props.additionalFeature;
        var tableClass = classNames('table', tableExtraClass,
            (additionalFeature && additionalFeature.extraClass ? additionalFeature.extraClass : null));
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
                var sortItem = null;
                var onclick = null;
                var subItemClassName = subItem.className;
                if (this.state.sort && this.state.sort.available && !subItem.virtual) {
                    onclick = this.onSortClick.bind(this, subItem.value);
                    subItemClassName = classNames(subItemClassName, 'sortAvailable');
                    if (this.state.sort.currentTh && this.state.sort.currentTh.sortName == subItem.value) {
                        var sortClass = classNames('fa th-sort', this.state.sort.currentTh.sortDirection);
                        sortItem = <span className={sortClass}></span>;
                    }
                }
                return (<th key={index} className={subItemClassName}
                            colSpan={subItem.colSpan ? subItem.colSpan : null}
                            data-value={subItem.value} onClick={onclick}>{subItem.title}{sortItem}</th>);
            }, this);
        }


        var theadFilter = null;
        if (this.props.tableValues.thead && this.state.filter && this.state.filter.available) {
            theadFilter = this.props.tableValues.thead.map(function (subItem, index) {
                var onFilter = this.onFilterChange.bind(this, subItem.value);
                var input = null;
                if (subItem.filter) {
                    input = <input className="form-control"
                                   name={subItem.value + '-filter-name'}
                                   onChange={onFilter}/>;
                }
                return (
                    <th key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}>{input}
                    </th>);
            }, this);
        }

        var tbody = null;
        if (this.props.tableValues.tbody) {
            tbody = this.props.tableValues.tbody.map(function (subItem, index) {
                var tds = subItem.value.map(function (subItem, index) {
                    var editContent = null;
                    if (tableExtraClass == 'row-editable' && subItem.editable) {
                        if (subItem.editType == 'text') {
                            editContent = <input type="text" className="editable" data-value = {subItem.value}/>;
                        }else if(subItem.editType == 'radio'){
                            //now radio group
                            //
                            editContent = <radio type="text" className="editable" data-value = {subItem.value}/>;
                        }else if(subItem.editType == 'select'){
                            editContent = <radio type="text" className="editable" data-value = {subItem.value}/>;
                        }
                    }
                    return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}
                                className={subItem.className}><span className="td-value">{subItem.title}</span>{editContent}</td>);
                });
                if (tableExtraClass == 'row-editable') {
                    tds.push(<td key='row-actions' className="td-row-actions">
                        <div className="btn-group btn-group-xs">
                            <button className="btn btn-primary btn-xs" onClick={this.onRowEdit.bind(this,subItem.key)}>Edit</button>
                            <button className="btn btn-danger btn-xs" onClick={this.onRowDelete.bind(this,subItem.key)}>Delete</button>
                        </div>
                    </td>);
                }
                return (<tr key={subItem.key} id = {'tr-' + subItem.key }>{tds}</tr>);
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
        var bottomOperations = [];
        if (tableExtraClass == 'row-editable') {
            topOperations.push(<button key={topOperations.length} className="btn btn-primary btn-add-row">Add
                row</button>);
        }
        if (this.state.pager && this.state.pager.rowSize && this.state.pager.rowSize.show) {
            topOperations.push(<Select key={topOperations.length}
                                       value={this.state.pager.rowSize.value ? this.state.pager.rowSize.value : null}
                                       className="select-row-size" name='rowSize'
                                       placeholder="Select your row size"
                                       options={this.state.pager.rowSize.options}
                                       onChange={this.onRowSizeChange.bind(this)}
            >
            </Select>);

        }
        //foot pagers--here shall be data pager from the list data to count
        if (this.state.pager && this.state.pager.show) {
            var pagerOptions = this.state.pager.options;
            var pagerA = pagerOptions.map(function (subItem, index) {
                var className = classNames('btn btn-sm btn-default', {'active': subItem.value == this.state.pager.currentValue});
                return (
                    <a key={index} data-value={subItem.value} className={className}
                       onClick={this.onPagerClick.bind(this,subItem.value)}>{subItem.label}</a>);
            }.bind(this));
            bottomOperations.push(
                <div key={bottomOperations.length} className="btn-group btn-group-sm btn-pager">
                    {pagerA}
                </div>
            );
        }
        return (
            <div className="table-root" id={this.tableId}>
                {topOperations.length > 0 ?
                    <div className="top-operations">{topOperations}<br className="clearfix-bottom"/></div> : null }
                <div className="table-content" style={style}>
                    <CustomScrollbar>
                        <table className={tableClass}>
                            <thead>
                            <tr>
                                {thead}
                            </tr>
                            {theadFilter ? <tr className="theadFilter">
                                {theadFilter}
                            </tr> : null}
                            </thead>
                            <tfoot>
                            <tr className={(tableExtraClass == 'striped' || (additionalFeature && additionalFeature.extraClass == 'striped') ) && this.props.tableValues.tbody.length % 2 == 0 ? 'tr-deep' : null}>
                                {tfoot}
                            </tr>
                            </tfoot>
                            <tbody>
                            {tbody}
                            </tbody>
                        </table>
                    </CustomScrollbar>
                </div>
                {bottomOperations.length > 0 ? <div className="bottom-operations">{bottomOperations}</div> : null }
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
    constructor(props) {
        super(props);
        if (this.props.tableValues.thead) {
            this.props.tableValues.thead.push({
                title: 'Actions',
                virtual: true,
                filter: false
            });
        }
    }

    render() {
        return (
            this.renderBasic('row-editable')
        );
    }
}
BasicTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object,
    formId: React.PropTypes.object
};
//
// DefaultTable.propTypes = {
//     tableValues: React.PropTypes.object,
//     minHeight: React.PropTypes.number,
//     additionalFeature: React.PropTypes.object,
//     formId: React.PropTypes.object
//
// };
// HoverTable.propTypes = {
//     tableValues: React.PropTypes.object,
//     minHeight: React.PropTypes.number,
//     additionalFeature: React.PropTypes.object,
//     formId: React.PropTypes.object
//
// };
// BorderTable.propTypes = {
//     tableValues: React.PropTypes.object,
//     minHeight: React.PropTypes.number,
//     additionalFeature: React.PropTypes.object,
//     formId: React.PropTypes.object
//
// };
// CondensedTable.propTypes = {
//     tableValues: React.PropTypes.object,
//     minHeight: React.PropTypes.number,
//     additionalFeature: React.PropTypes.object,
//     formId: React.PropTypes.object
//
// };
// StripedTable.propTypes = {
//     tableValues: React.PropTypes.object,
//     minHeight: React.PropTypes.number,
//     additionalFeature: React.PropTypes.object,
//     formId: React.PropTypes.object
//
// };
// RowEditableTable.propTypes = {
//     tableValues: React.PropTypes.object,
//     minHeight: React.PropTypes.number,
//     additionalFeature: React.PropTypes.object,
//     formId: React.PropTypes.object
//
// };
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