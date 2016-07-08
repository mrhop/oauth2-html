import {getIndexDemoTableDispatch} from '../../actions/dashBoard'
import {demoTableRules} from '../../middleware/dashBoard'


class BaseTable extends React.Component {

    componentWillMount() {
        //this.props.getIndexDemoTableDispatch({})
    }

    render() {
        return <Table.StripedTable minHeight={426} tableRules={demoTableRules} {...this.props} />
    }
}

BaseTable.propTypes = {
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
}


export default ReactRedux.connect(mapStateToProps, {
})(BaseTable)