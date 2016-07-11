import {getIndexDemoTableDispatch, deleteDemoTableDispatch} from '../../actions/dashBoard'
import {demoTableRules, rowEditableAdditionalFeature} from '../../middleware/dashBoard'


class RowEditableTable extends React.Component {

    deleteRow(requestCondition) {
        this.props.deleteDemoTableDispatch(requestCondition);
    }

    getList(requestCondition) {
        this.props.getIndexDemoTableDispatch(requestCondition);
    }

    render() {
        return <Table.RowEditableTable {...this.props} tableRules={demoTableRules}
                                                       additionalFeature={rowEditableAdditionalFeature}
                                                       minHeight={350} deleteRow={this.deleteRow.bind(this)}
                                                       getList={this.getList.bind(this)}/>
    }
}


RowEditableTable.propTypes = {
    tableData: React.PropTypes.array,
    totalCount: React.PropTypes.number,
    getIndexDemoTableDispatch: React.PropTypes.func.isRequired,
    deleteDemoTableDispatch: React.PropTypes.func.isRequired
}
function mapStateToProps(state, ownProps) {
    if (state && state.dashBoard && state.dashBoard.demoTable) {
        // const {
        //     demoTableData,
        //     keys,
        //     totalCount
        // } = state.dashBoard.demoTable
        const {
            dashBoard: {
                demoTable: {
                    demoTableData,
                    keys,
                    totalCount
                }
            }
        } = state
        const tableData = keys.map(id => demoTableData[id]);
        return {tableData, totalCount}
    } else {
        return {};
    }
}

export default ReactRedux.connect(mapStateToProps, {
    getIndexDemoTableDispatch,
    deleteDemoTableDispatch
})(RowEditableTable)
