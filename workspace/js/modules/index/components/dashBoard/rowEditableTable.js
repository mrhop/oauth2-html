import {getIndexDemoTableDispatch} from '../../actions/dashBoard'
import {demoTableRules, rowEditableAdditionalFeature} from '../../middleware/dashBoard'


class RowEditableTable extends React.Component {
    
    render() {
        return <Table.RowEditableTable tableRules={demoTableRules}
                                       additionalFeature={rowEditableAdditionalFeature}
                                       minHeight={350} {...this.props} />
    }
}

RowEditableTable.propTypes = {
    tableData: React.PropTypes.array,
}

function mapStateToProps(state, ownProps) {
    if (state && state.dashBoard && state.dashBoard.demoTable) {
        const {
            demoTableData,
            keys,
            totalCount
        } = state.dashBoard.demoTable
        const tableData = keys.map(id => demoTableData[id]);
        return {tableData, totalCount}
    } else {
        return {};
    }

    //
}


export default ReactRedux.connect(mapStateToProps, {})(RowEditableTable)