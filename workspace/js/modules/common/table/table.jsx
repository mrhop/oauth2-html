/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./table.scss');
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
        if (this.props.tableRules && this.props.tableRules.thead) {
            this.props.tableRules.thead.map(function (subItem, index) {
                if (this.state.sort.available) {
                    if (subItem.sort) {
                        this.state.sort.currentTh = {sortName: subItem.value, sortDirection: subItem.sort};
                    }
                }
            }, this);
        }
        if (this.props.panelActionCallBack) {
            this.props.panelActionCallBack.clickEvent = function () {
                if (this.state.currentEditTdDom.dom && this.state.currentEditTdDom.dom.classList.contains('open')) {
                    this.state.currentEditTdDom.dom.classList.remove('open');
                    this.props.updateColumn && this.props.updateColumn({
                        key: this.state.currentEditTdDom.rowKey,
                        data: [{'name': this.state.currentEditTdDom.name, value: this.state.currentEditTdDom.value}]
                    });
                }
            }.bind(this);
        }
    }



    componentDidMount() {
    }

    getList() {
        this.props.getList && this.props.getList({
            filters: this.state.filter.available ? this.state.filter.data : null,
            sort: this.state.sort.available ? this.state.sort.currentTh : null,
            rowSize: this.state.pager.rowSize.show ? this.state.pager.rowSize.value : null,
            currentPage: this.state.pager.currentValue ? this.state.pager.currentValue : 0,
        })
    }

    getPagerOptionsByTotalCount() {
        if (this.state.pager.show) {
            var currentPage = this.state.pager.currentValue;
            var rowSize = this.state.pager.rowSize.value;
            var totalCount = this.props.totalCount;
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
        this.forceUpdate();
        this.getList();
    }

    onPagerClick(value) {
        this.state.pager.currentValue = value;
        this.forceUpdate();
        this.getList();
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
        this.getList();
    }

    onFilterChange(filterName, type, e) {
        this.state.filter.data[filterName] = UtilFun.formTypeValue(type, e, this.state.filter.data[filterName])
        this.forceUpdate();
        UtilFun.delay(this.filterChange.bind(this, filterName), 400);
    }

    filterChange(filterName) {
        this.state.pager.currentValue = 0;
        this.getList();
    }


    onRowAddChange(name, type, e) {
        this.state.addData[name] = UtilFun.formTypeValue(type, e, this.state.addData[name])
        this.forceUpdate();
    }

    onRowAdd() {
        //which shall be at top wrapper
        this.tableRoot.querySelector('thead tr.theadRowAdd').style.display = 'table-row';
    }


    onRowSave() {
        this.props.saveRow && this.props.saveRow(this.state.addData)
        this.state.addData = {};
        this.tableRoot.querySelector('thead tr.theadRowAdd').style.display = 'none';
    }

    onRowCancel() {
        this.tableRoot.querySelector('thead tr.theadRowAdd').style.display = 'none';
    }


    renderBasic(tableExtraClass) {
        this.getPagerOptionsByTotalCount();
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
        if (this.props.tableRules.thead) {
            thead = this.props.tableRules.thead.map(function (subItem, index) {
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
            if('row-editable' === tableExtraClass){
                thead.push(<th key={thead.length}>Actions</th>);
            }
        }


        var theadFilter = null;
        if (this.props.tableRules.thead && this.state.filter && this.state.filter.available) {
            theadFilter = this.props.tableRules.thead.map(function (subItem, index) {
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
            if('row-editable' === tableExtraClass){
                theadFilter.push(<th key={thead.length}></th>);
            }
        }
        var tbody = <TableRowWrapper {...this.props} tableId={this.tableId}
                                                     tableType={this.tableType}
                                                     getList={this.getList.bind(this)}
                                                     currentEditTdDom={this.state.currentEditTdDom}/>;
        var tfoot = null;
        if (this.props.tableRules.tfoot) {
            tfoot = this.props.tableRules.tfoot.map(function (subItem, index) {
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
            if (this.props.tableRules.thead) {
                theadRowAdd = this.props.tableRules.thead.map(function (subItem, index) {
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
                    }
                    return (
                        <th key={index} colSpan={subItem.colSpan ? subItem.colSpan : null}>{editContent}
                        </th>);
                }, this);
                if('row-editable' === tableExtraClass){
                    theadRowAdd.push(<th key='add-actions' className="td-row-actions">
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
                    </th>);
                }
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
                            <tr className={(tableExtraClass == 'striped' || (additionalFeature && additionalFeature.extraClass == 'striped') ) && this.props.tableData.length % 2 == 0 ? 'tr-deep' : null}>
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

    render() {
        var tableRows = this.props.tableData.map(function (row, index) {
            return (
                <TableRow key={index} rowData={row} rowIndex={index}   {...this.props}  />
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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.rowEditState) {
            this.trDom.classList.add('edit');
        } else {
            this.trDom.classList.remove('edit');
        }
    }

    onRowDelete(key) {
        Modal.createModal.bind(this, deleteRowConfirmModalData, 'messageConfirm')();
    }

    deleteRow() {
        this.props.deleteRow && this.props.deleteRow({
            key: this.props.rowData.key
        })
    }

    onRowEdit() {
        this.props.rowData.value.map(function (subItem, index) {
            this.currentData[index] = subItem.value;
        }, this);
        this.state.rowEditState = true;
        this.forceUpdate();
    }

    onRowSave(rowKey) {
        this.props.updateRow && this.props.updateRow({key: this.props.rowData.key, data: this.props.rowData.value});
        this.state.rowEditState = false;
        this.forceUpdate();
    }

    onRowCancel() {
        this.props.rowData.value.map(function (subItem, index) {
            subItem.value = this.currentData[index];
        }, this);
        this.state.rowEditState = false;
        this.forceUpdate();
    }

    render() {
        var rowIndex = this.props.rowIndex;
        var tds = this.props.rowData.value.map(function (subItem, index) {
            return <TableTd key={index} tdData={subItem} rowKey={this.props.rowData.key} rowIndex={rowIndex}
                            rowEditState={this.state.rowEditState}
                            theadItem={ this.props.tableRules.thead ? this.props.tableRules.thead[index] : null}
                            currentEditTdDom={this.props.currentEditTdDom} {...this.props}></TableTd>;
        }, this);
        if (this.props.tableType == 'row-editable') {
            tds.push(<td key='row-actions' className="td-row-actions">
                <div className="btn-group btn-group-xs edited">
                    <button className="btn btn-primary btn-xs edit"
                            onClick={this.onRowEdit.bind(this)}>
                        Edit
                    </button>
                    <button className="btn btn-danger btn-xs delete"
                            onClick={this.onRowDelete.bind(this)}>
                        Delete
                    </button>
                </div>
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
        this.props.tdData.value = UtilFun.formTypeValue(type, e, this.props.tdData.value)
        this.props.currentEditTdDom.value = this.props.tdData.value
        this.forceUpdate();
    }

    onTdClick(name, e) {
        if (!this.props.rowEditState) {
            this.state.tdEditState = true;
            if (this.props.currentEditTdDom.dom) {
                this.props.currentEditTdDom.dom.classList.remove('open');
            }
            this.props.currentEditTdDom.dom = this.tdDom;
            this.props.currentEditTdDom.rowKey = this.props.rowKey;
            this.props.currentEditTdDom.name = this.props.theadItem.value;
            this.props.currentEditTdDom.value = this.props.tdData.value;
            this.tdDom.classList.add('open');
            this.currentData = this.props.tdData.value;
            this.forceUpdate();
            e.stopPropagation();
        }
    }

    onTdSave(e) {
        this.props.updateColumn && this.props.updateColumn({
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
                    onClick={theadItem && theadItem.columnEditable && this.onTdClick.bind(this,theadItem.value)}><span
            className={tdValueClassName}>{theadItem.className == 'td-id' && !tdItem.value ? rowIndex + 1 : tdItem.value}</span>{editContent}{columnEditContent}{columnEditContentAction}
        </td>);
    }
}

BasicTable.propTypes = {
    tableRules: React.PropTypes.object,
    minHeight: React.PropTypes.number,
    additionalFeature: React.PropTypes.object,
    totalCount: React.PropTypes.number,
    getList: React.PropTypes.func,
    deleteRow: React.PropTypes.func,
    updateRow: React.PropTypes.func,
    updateColumn: React.PropTypes.func,
    saveRow: React.PropTypes.func,
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