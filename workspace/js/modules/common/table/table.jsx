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

        if (this.props.tableValues && this.props.tableValues.tbody) {
            //this data shall be finally added from backend
            this.state.tbody = this.props.tableValues.tbody;
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

        var tbody = <TableRowWrapper data={this.state.tbody} {...this.props} tableId={this.tableId}
                                     tableType={this.tableType}/>;
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
                            {tbody}
                        </table>
                    </CustomScrollbar>
                </div>
                {bottomOperations.length > 0 ? <div className="bottom-operations">{bottomOperations}</div> : null }
            </div>
        );
    }
}


//tableValues  except the thead tbody tfoot,other features: sort(just add to the thead>th),extra class for editable table{extraClass:hover},pager{pageSize:10}
//pay attention to the state data
//begin to devide and wrapper like the demo little componentis the core
class TableRowWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    onRowDelete(rowKey) {
        //which shall be at top wrapper
        this.props.data.splice(rowKey,1);
        this.forceUpdate();
    }
    render() {
        //need to bind other parameters
        //from here get the data base on the table change
        var tableRows = this.props.data.map(function (row, index) {
            return (
                <TableRow key={index} rowData={row} rowIndex={index}  {...this.props} onRowDelete = {this.onRowDelete.bind(this,index)}/>
            );
        }, this);
        return (
            <tbody>
            {tableRows}
            </tbody>
        );
    }
}

class TableRow extends React.Component {

    constructor(props) {
        super(props);
        this.currentData = [];
    }

    onRowEditSingleValueChange(rowIndex, columnIndex, e) {
        this.props.rowData.value[columnIndex].value = e.target.value;
        this.forceUpdate();
    }

    onRowEditMultiValueChange(rowIndex, columnIndex, e) {
        var value = this.props.rowData.value[columnIndex].value;
        if (e.target.checked) {
            value = value ? value + ',' + e.target.value : e.target.value;
        } else {
            value = value ? value.replace(e.target.value, '') : null;
        }
        if (value && value.endsWith(',')) {
            value = value.substring(0, value.length - 1);
        }
        if (value && value.startsWith(',')) {
            value = value.substring(1);
        }
        this.props.rowData.value[columnIndex].value = value;
        this.forceUpdate();
        // console.log('You\'ve selected:', value);
    }


    onRowEditSelectValueChange(rowIndex, columnIndex, e) {
        this.props.rowData.value[columnIndex].value = e ? e.value : null;
        this.forceUpdate();
    }

    onRowEdit(rowKey) {
        this.props.rowData.value.map(function (subItem, index) {
            this.currentData[index] = subItem.value;
        },this);
        var tr = document.querySelector('#' + this.props.tableId + ' tbody tr#tr-' + rowKey);
        tr.classList.add('edit');
    }

    onRowSave(rowKey) {
        //do save judge if true,if true return  or do cancel
        if (true) {
            var tr = document.querySelector('#' + this.props.tableId + ' tbody tr#tr-' + rowKey);
            tr.classList.remove('edit');
        }
    }

    onRowCancel(rowKey) {
        this.props.rowData.value.map(function (subItem, index) {
            subItem.value = this.currentData[index];
        },this);
        this.forceUpdate();
        var tr = document.querySelector('#' + this.props.tableId + ' tbody tr#tr-' + rowKey);
        tr.classList.remove('edit');
    }

    onRowDelete(rowKey) {
        //which shall be at top wrapper
        console.log('row key ' + rowKey);
    }

    render() {
        var rowIndex = this.props.rowIndex;
        var tds = this.props.rowData.value.map(function (subItem, index) {
            var tdSubItem = subItem;
            var editContent = null;
            var theadItem = this.props.tableValues.thead ? this.props.tableValues.thead[index] : null;
            if (this.props.tableType == 'row-editable' && theadItem && theadItem.editable) {
                var tdIndex = index;
                if (theadItem && theadItem.editType == 'text') {
                    editContent = <input type="text" className="editable input-text" data-name={theadItem.value}
                                         name={theadItem.value} value={ subItem.value}
                                         onChange={this.onRowEditSingleValueChange.bind(this,rowIndex,tdIndex)}/>;
                } else if (theadItem && theadItem.editType == 'radio') {
                    editContent = theadItem.editValue.map(function (subItem, index) {
                        const checked = subItem.value == tdSubItem.value ? 'checked' : false;
                        return <li key={index}><input type="radio" name={theadItem.value}
                                                      data-name={theadItem.value}
                                                      value={ subItem.value}
                                                      checked={checked}
                                                      onChange={this.onRowEditSingleValueChange.bind(this,rowIndex,tdIndex)}/>
                            <span>{subItem.label}</span></li>;
                    }, this);
                    editContent = <ul className="editable ul-wrapper">{editContent}</ul>;
                } else if (theadItem && theadItem.editType == 'checkbox') {
                    editContent = theadItem.editValue.map(function (subItem, index) {
                        return <li key={index}><input type="checkbox" name={theadItem.value}
                                                      data-name={theadItem.value}
                                                      value={ subItem.value}
                                                      checked={tdSubItem.value.split(',').includes(subItem.value)  ? 'checked' : false}
                                                      onChange={this.onRowEditMultiValueChange.bind(this,rowIndex,tdIndex)}/>
                            <span>{subItem.label}</span></li>;
                    }, this);
                    editContent = <ul className="editable ul-wrapper">{editContent}</ul>;
                } else if (theadItem && theadItem.editType == 'select') {
                    editContent =
                        <Select className="editable" name={theadItem.value} data-name={theadItem.value}
                                value={subItem.value ? subItem.value : null}
                                options={theadItem.editValue}
                                onChange={this.onRowEditSelectValueChange.bind(this,rowIndex,tdIndex)}>
                        </Select>;
                }
            }
            return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}
                        className={subItem.className}><span
                className="td-value">{subItem.value}</span>{editContent}</td>);
        }, this);
        if (this.props.tableType == 'row-editable') {
            tds.push(<td key='row-actions' className="td-row-actions">
                <div className="btn-group btn-group-xs edited">
                    <button className="btn btn-primary btn-xs edit"
                            onClick={this.onRowEdit.bind(this,this.props.rowData.key)}>
                        Edit
                    </button>
                    <button className="btn btn-danger btn-xs delete"
                            onClick={this.props.onRowDelete}>
                        Delete
                    </button>
                </div>
                <div className="btn-group btn-group-xs editing">
                    <button className="btn btn-primary btn-xs save"
                            onClick={this.onRowSave.bind(this,this.props.rowData.key)}>
                        Save
                    </button>
                    <button className="btn btn-danger btn-xs cancel"
                            onClick={this.onRowCancel.bind(this,this.props.rowData.key)}>
                        Cancel
                    </button>
                </div>
            </td>);
        }
        return (<tr key={this.props.rowData.key} id={'tr-' + this.props.rowData.key }>{tds}</tr>);
    }
}


BasicTable.propTypes = {
    tableValues: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object,
};


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
        this.tableType = 'row-editable';
    }

    render() {
        return (
            this.renderBasic('row-editable')
        );
    }
}

module.exports = {
    DefaultTable,
    HoverTable,
    BorderTable,
    CondensedTable,
    StripedTable,
    RowEditableTable
};