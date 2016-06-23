/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./table.scss');
import tableDataFuncs from './data/table';
// need to give the getList + updateList + deleteList + add url
const defaultRowSizeOptions = [
    {value: 5, label: 5},
    {value: 10, label: 10},
    {value: 15, label: 15},
    {value: 20, label: 20},
    {value: 25, label: 25}
];
const defaultCurrentSize = 5;
const deleteRowConfirmModalData = {
    content: <span>If you remove this row, this row can not be restored.</span>,
    title: 'Do you want to remove this record?',
    closeFun: function () {
        console.log('before close');
        return true;
    },
    footerConfirmButton: {
        callback: function () {
            this.deleteRow();
        },
        title: 'Confirm',
    },
    footerCloseButton: {
        visible: true,
        title: 'Cancel',
    },
};
class BasicTable extends React.Component {
    constructor(props) {
        super(props);
        this.tableId = 'id-' + UtilFun.uuid();
        this.state = {
            currentRow: {key: 0},
            pager: {
                show: false,
                currentValue: 0,
                rowSize: {
                    show: false
                }
            },
            sort: {available: false},
            filter: {available: false},
            currentEditTdDom: {},
        };
        var additionalFeature = this.props.additionalFeature;
        if (additionalFeature && additionalFeature.pager) {
            this.state.pager.show = true;
            this.state.pager.options = [{label: 1, value: 0}, {label: 2, value: 1}, {
                label: 3,
                value: 2
            }, {label: 4, value: 3}];
            if (additionalFeature.pager.rowSize && additionalFeature.pager.rowSize.show) {
                this.state.pager.rowSize.show = true;
                this.state.pager.rowSize.options = additionalFeature.pager.rowSize.options ? additionalFeature.pager.rowSize.options : defaultRowSizeOptions;
                this.state.pager.rowSize.value = additionalFeature.pager.rowSize.currentSize ? additionalFeature.pager.rowSize.currentSize : defaultCurrentSize;
            }
        }
        if (additionalFeature && additionalFeature.sortAvailable) {
            this.state.sort.available = true;
        }
        if (additionalFeature && additionalFeature.filterAvailable) {
            this.state.filter.available = true;
            this.state.filter.data = {};
        }
        if (this.props.tableValues && this.props.tableValues.thead) {
            this.props.tableValues.thead.map(function (subItem, index) {
                if (this.state.sort.available) {
                    if (subItem.sort) {
                        this.state.sort.currentTh = {sortName: subItem.value, sortDirection: subItem.sort};
                    }
                }
            }, this);
        }

        this.state.allCachedData = tableDataFuncs.getList({
            dataUrl: this.props.tableValues.dataUrls.list,
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue
        });
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        if (this.props.panelActionCallBack) {
            this.props.panelActionCallBack.onClick = function () {
                if (this.state.currentEditTdDom.dom) {
                    this.state.currentEditTdDom.dom.classList.remove('open');
                }
            }.bind(this);
        }
    }

    componentDidMount() {

    }

    getTBodyByAllData() {
        var allData = this.state.allCachedData;
        if (this.state.pager.show) {
            var totalCount = this.state.allCachedData.totalCount;
            var currentPage = this.state.pager.currentValue;
            var rowSize = this.state.pager.rowSize.value;
            var totalPager = Math.ceil(totalCount / rowSize);
            if (currentPage > 2) {
                if ((currentPage + 2) < totalPager) {
                    currentPage = 2;
                } else {
                    currentPage = 2 + (2 - (totalPager - 1 - currentPage));
                }
            }
            var beginIndex = currentPage * rowSize;

            var endIndex = beginIndex + rowSize - 1;
            endIndex = endIndex <= allData.totalCount - 1 ? endIndex : allData.totalCount - 1;
            this.state.tbody = allData.data.slice(beginIndex, endIndex + 1);
        } else {
            this.state.tbody = allData.data;
        }
    }

    getPagerOptionsByTotalCount() {
        if (this.state.pager.show) {
            var currentPage = this.state.pager.currentValue;
            var rowSize = this.state.pager.rowSize.value;
            var totalCount = this.state.allCachedData.totalCount;
            var totalPager = Math.ceil(totalCount / rowSize);
            this.state.pager.options = [];
            var beginIndex = currentPage > 1 ? currentPage - 2 : 0;
            if (currentPage + 2 > totalPager - 1 && totalPager - 5 > -1) {
                beginIndex = totalPager - 5;
            }
            var endIndex = currentPage + 2;
            if (endIndex > totalPager - 1 || (endIndex < 4 && totalPager - 1 < 4)) {
                endIndex = totalPager - 1;
            } else if (endIndex < 4 && totalPager - 1 >= 4) {
                endIndex = 4;
            }
            for (var i = beginIndex; i <= endIndex; i++) {
                this.state.pager.options.push({label: i + 1, value: i});
            }
            if (beginIndex > 0) {
                this.state.pager.options.unshift({label: '...', value: beginIndex - 1});
            }
            if (endIndex < totalPager - 1) {
                this.state.pager.options.push({label: '...', value: endIndex + 1});
            }
        }
    }

    onRowSizeChange(value) {
        this.state.pager.rowSize.value = value ? value.value : null;
        this.state.pager.currentValue = 0;
        this.state.allCachedData = tableDataFuncs.getList({
            dataUrl: this.props.tableValues.dataUrls.list,
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.value,
            currentPage: this.state.pager.currentValue
        });
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        this.forceUpdate();
        console.log('You\'ve selected:', value);
    }

    onPagerClick(value) {
        this.state.pager.currentValue = value;
        this.state.allCachedData = tableDataFuncs.getList({
            dataUrl: this.props.tableValues.dataUrls.list,
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue
        });
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        this.forceUpdate();
    }

    onSortClick(sortName) {
        if (this.state.sort.currentTh && this.state.sort.currentTh.sortName == sortName) {
            this.state.sort.currentTh.sortDirection = this.state.sort.currentTh.sortDirection == 'asc' ? 'desc' : 'asc';
        } else {
            this.state.sort.currentTh = {sortName: sortName, sortDirection: 'asc'};
        }
        this.forceUpdate();
        UtilFun.delay(this.sortClick.bind(this, sortName), 400);
    }

    sortClick(sortName) {
        this.state.pager.currentValue = 0;
        this.state.allCachedData = tableDataFuncs.getList({
            dataUrl: this.props.tableValues.dataUrls.list,
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.currentTh,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue
        });
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        this.forceUpdate();
    }

    onFilterChange(filterName, type, e) {
        if (type == 'radio' || type == 'text') {
            this.state.filter.data[filterName] = e.target.value;
        } else if (type == 'checkbox') {
            var value = this.state.filter.data[filterName];
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
            this.state.filter.data[filterName] = value;
        } else if (type == 'select') {
            this.state.filter.data[filterName] = e ? e.value : null;
        }
        this.forceUpdate();
        UtilFun.delay(this.filterChange.bind(this, filterName), 400);
    }

    filterChange(filterName) {
        this.state.pager.currentValue = 0;
        this.state.allCachedData = tableDataFuncs.getList({
            dataUrl: this.props.tableValues.dataUrls.list,
            filters: this.state.filter.data,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue
        });
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        this.forceUpdate();
    }

    onRowDelete() {
        Modal.createModal.bind(this, deleteRowConfirmModalData, 'messageConfirm')();
    }

    deleteRow() {
        this.state.allCachedData = tableDataFuncs.delete({
            dataUrl: this.props.tableValues.dataUrls.delete,
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue,
            key: this.state.currentRow.key
        });
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        this.forceUpdate();
    }

    onRowAddChange(name, type, e) {
        if (type == 'radio' || type == 'text') {
            this.state.addData[name] = e.target.value;
        } else if (type == 'checkbox') {
            var value = this.state.addData[name];
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
            this.state.addData[name] = value;
        } else if (type == 'select') {
            this.state.addData[name] = e ? e.value : null;
        }
        this.forceUpdate();
    }

    onRowAdd() {
        //which shall be at top wrapper
        this.tableRoot.querySelector('thead tr.theadRowAdd').style.display = 'table-row';
    }


    onRowSave() {
        this.state.allCachedData = tableDataFuncs.add({
            dataUrl: this.props.tableValues.dataUrls.add,
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue ? this.state.pager.currentValue : 0,
            addData: this.state.addData
        });
        this.state.addData = {};
        this.getTBodyByAllData();
        this.getPagerOptionsByTotalCount();
        this.forceUpdate();
        this.tableRoot.querySelector('thead tr.theadRowAdd').style.display = 'none';
    }

    onRowCancel() {
        this.tableRoot.querySelector('thead tr.theadRowAdd').style.display = 'none';
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
                var onFilter = this.onFilterChange.bind(this, subItem.value, subItem.editType);
                var editContent = null;
                var className = '';
                if (subItem.editType == 'text') {
                    className = 'form-control';
                }
                if (subItem.filter) {
                    editContent = UtilFun.formType({
                        type: subItem.editType,
                        name: subItem.value,
                        value: this.state.filter.data[subItem.value] ? this.state.filter.data[subItem.value] : null,
                        onChangeCallback: onFilter,
                        options: subItem.editValue,
                        className: className
                    });
                }
                return (
                    <th key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}>{editContent}
                    </th>);
            }, this);
        }

        var tbody = <TableRowWrapper data={this.state.tbody} {...this.props} tableId={this.tableId}
                                     tableType={this.tableType} onRowDelete={this.onRowDelete.bind(this)}
                                     currentRow={this.state.currentRow}
                                     currentEditTdDom={this.state.currentEditTdDom}/>;
        var tfoot = null;
        if (this.props.tableValues.tfoot) {
            tfoot = this.props.tableValues.tfoot.map(function (subItem, index) {
                return (<td key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}
                            className={subItem.className}>{subItem.title}</td>);
            }, this);
        }
        var topOperations = [];
        var bottomOperations = [];
        var theadRowAdd = null;
        if (tableExtraClass == 'row-editable') {
            topOperations.push(<button key={topOperations.length} className="btn btn-primary btn-add-row"
                                       onClick={this.onRowAdd.bind(this)}>Add
                row</button>);
            if (this.props.tableValues.thead) {
                theadRowAdd = this.props.tableValues.thead.map(function (subItem, index) {
                    var onRowAddChange = this.onRowAddChange.bind(this, subItem.value, subItem.editType);
                    var editContent = null;
                    var className = '';
                    if (subItem.editType == 'text') {
                        className = 'form-control';
                    }
                    if (subItem.addable) {
                        editContent = UtilFun.formType({
                            type: subItem.editType,
                            name: subItem.value + '-add',
                            value: this.state.addData[subItem.value] ? this.state.addData[subItem.value] : null,
                            onChangeCallback: onRowAddChange,
                            options: subItem.editValue,
                            className: className
                        });
                    } else if (subItem.specialColumn) {
                        return <th key='add-actions' className="td-row-actions">
                            <div className="btn-group btn-group-xs editing">
                                <button className="btn btn-primary btn-xs save"
                                        onClick={this.onRowSave.bind(this)}>
                                    Save
                                </button>
                                <button className="btn btn-danger btn-xs cancel"
                                        onClick={this.onRowCancel.bind(this)}>
                                    Cancel
                                </button>
                            </div>
                        </th>;
                    }
                    return (
                        <th key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}>{editContent}
                        </th>);
                }, this);
            }
        }
        if (this.state.pager && this.state.pager.rowSize && this.state.pager.rowSize.show) {
            topOperations.push(<Select key={topOperations.length}
                                       value={this.state.pager.rowSize.value ? this.state.pager.rowSize.value : null}
                                       className="select-row-size" name='rowSize'
                                       placeholder="Select your row size"
                                       clearable={false}
                                       options={this.state.pager.rowSize.options}
                                       onChange={this.onRowSizeChange.bind(this)}
            >
            </Select>);

        }
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
            <div className="table-root" ref={(ref) => this.tableRoot = ref} id={this.tableId}>
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
                            {theadRowAdd ? <tr className="theadRowAdd">
                                {theadRowAdd}
                            </tr> : null}
                            </thead>
                            <tfoot>
                            <tr className={(tableExtraClass == 'striped' || (additionalFeature && additionalFeature.extraClass == 'striped') ) && this.state.tbody.length % 2 == 0 ? 'tr-deep' : null}>
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


class TableRowWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onRowDelete(rowKey, callback) {
        this.props.currentRow.key = rowKey;
        callback();
    }

    render() {
        var tableRows = this.props.data.map(function (row, index) {
            return (
                <TableRow key={index} rowData={row} rowIndex={index}  {...this.props}
                          onRowDelete={this.onRowDelete.bind(this,row.key,this.props.onRowDelete)}/>
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
        //this.currentTdData = {};
        this.state = {rowEditState: false};
    }


    onRowEdit(rowKey) {
        this.props.rowData.value.map(function (subItem, index) {
            this.currentData[index] = subItem.value;
        }, this);
        this.trDom.classList.add('edit');
        this.state.rowEditState = true;
        this.forceUpdate();
    }

    onRowSave(rowKey) {
        var tr = document.querySelector('#' + this.props.tableId + ' tbody tr#tr-' + rowKey);
        var result = tableDataFuncs.update({key: rowKey, data: this.props.rowData.value});
        result.flag = true;
        if (result.flag) {
            this.trDom.classList.remove('edit');
            this.state.rowEditState = false;
            this.forceUpdate();
        } else {
            Toast.createToast.bind(this, {
                content: <span>{result.message}</span>,
                title: 'Check if the data is available?'
            }, 'error');
        }

    }

    onRowCancel(rowKey) {
        this.props.rowData.value.map(function (subItem, index) {
            subItem.value = this.currentData[index];
        }, this);
        this.state.rowEditState = false;
        this.forceUpdate();
        this.trDom.classList.remove('edit');
    }

    render() {
        var rowIndex = this.props.rowIndex;
        var tds = this.props.rowData.value.map(function (subItem, index) {
            return <TableTd key={index} tdData={subItem} rowKey={this.props.rowData.key} rowIndex={rowIndex}
                            rowEditState={this.state.rowEditState}
                            theadItem={ this.props.tableValues.thead ? this.props.tableValues.thead[index] : null}
                            currentEditTdDom={this.props.currentEditTdDom}></TableTd>;
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
        return (<tr ref={(ref) => this.trDom = ref} key={this.props.rowData.key}>{tds}</tr>);
    }
}
class TableTd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tdEditState: false};
    }

    onTdEdit(type, e) {
        if (type == 'text' || type == 'radio') {
            this.props.tdData.value = e.target.value;
        } else if (type == 'checkbox') {
            var value = this.props.tdData.value;
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
            this.props.tdData.value = value;
        } else if (type == 'select') {
            this.props.tdData.value = e ? e.value : null;
        }
        this.forceUpdate();
    }

    onTdClick(name, e) {
        if (!this.props.rowEditState) {
            this.state.tdEditState = true;
            if (this.props.currentEditTdDom.dom) {
                this.props.currentEditTdDom.dom.classList.remove('open');
            }
            this.props.currentEditTdDom.dom = this.tdDom;
            this.tdDom.classList.add('open');
            this.currentData = this.props.tdData.value;
            this.forceUpdate();
            e.stopPropagation();
        }
    }

    onTdSave(e) {
        tableDataFuncs.update({
            key: this.props.rowKey, data: [{'name': this.props.theadItem.value, value: this.props.tdData.value}]
        });
        this.tdDom.classList.remove('open');
        e.stopPropagation();
    }

    onTdCancel(name, e) {
        this.props.tdData.value = this.currentData;
        this.tdDom.classList.remove('open');
        this.state.tdEditState = false;
        this.forceUpdate();
        e.stopPropagation();
    }

    render() {
        var tdItem = this.props.tdData;
        var rowIndex = this.props.rowIndex;
        var theadItem = this.props.theadItem;
        var rowEditState = this.props.rowEditState;
        var editContent = null;
        var columnEditContent = null;
        var columnEditContentAction = null;
        var tdValueClassName = 'td-value';
        tdItem.name = theadItem.value;
        if (theadItem && theadItem.editable && rowEditState) {
            var className = '';
            if (theadItem.editType == 'text') {
                className = 'input-text';
            }
            editContent = UtilFun.formType({
                type: theadItem.editType,
                name: theadItem.value + '-' + this.props.rowKey,
                value: tdItem.value,
                onChangeCallback: this.onTdEdit.bind(this, theadItem.editType),
                options: theadItem.editValue,
                className: className
            });
            this.state.tdEditState = false;
        }
        if (theadItem && theadItem.columnEditable) {
            tdValueClassName = tdValueClassName + ' column-edit';
        }
        if (theadItem && theadItem.columnEditable && this.state.tdEditState) {
            var className = 'column-editable';
            if (theadItem.editType == 'text') {
                className = className + ' input-text';
            }
            columnEditContent = UtilFun.formType({
                type: theadItem.editType,
                name: theadItem.value + '-' + this.props.rowKey,
                value: tdItem.value,
                onChangeCallback: this.onTdEdit.bind(this, theadItem.editType),
                options: theadItem.editValue,
                className: className
            });
            columnEditContentAction =
                <div key='td-actions' className="column-editable btn-group btn-group-xs edited">
                    <button className="btn btn-primary btn-xs save"
                            onClick={this.onTdSave.bind(this)}>
                        <i className="fa"></i>
                    </button>
                    <button className="btn btn-danger btn-xs cancel"
                            onClick={this.onTdCancel.bind(this,theadItem.value)}>
                        <i className="fa"></i>
                    </button>
                </div>;

        }
        return (<td ref={(ref) => this.tdDom = ref} colSpan={theadItem.colSpan ? theadItem.colSpan : null}
                    className={ classNames(theadItem.className, theadItem && theadItem.columnEditable ? 'td-editable' : null)}
                    onClick={theadItem && theadItem.columnEditable ? this.onTdClick.bind(this,theadItem.value) : null}><span
            className={tdValueClassName}>{theadItem.className == 'td-id' && !tdItem.value ? rowIndex + 1 : tdItem.value}</span>{editContent}{columnEditContent}{columnEditContentAction}
        </td>);
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

class RowEditableTable extends BasicTable {
    constructor(props) {
        super(props);
        if (this.props.tableValues.thead) {
            this.props.tableValues.thead.push({
                title: 'Actions',
                virtual: true,
                filter: false,
                editable: false,
                addable: false,
                specialColumn: true
            });
        }
        this.tableType = 'row-editable';
        this.state.addData = {};
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