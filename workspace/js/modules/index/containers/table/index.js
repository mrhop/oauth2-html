/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import BaseTable from '../../components/table/baseTable';
import RowEditableTable from '../../components/table/rowEditableTable';
import {getIndexDemoTableDispatch, refreshDemoTableDispatch} from '../../actions/table';
class TableMainBlock extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        //data init
        this.props.getIndexDemoTableDispatch()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.demoTableRefresh) {
            this.props.refreshDemoTableDispatch();
        }
    }

    render() {

        return (
            <div>
                <Panel.PanelWithHeader panelValues={{title : 'Basic Table'}}>
                    <BaseTable />
                </Panel.PanelWithHeader>
                <Panel.PanelWithHeader panelValues={{title : 'Row Editable Table'}}>
                    <RowEditableTable />
                </Panel.PanelWithHeader>
            </div>)
            ;
    }
}



TableMainBlock.propTypes = {
    getIndexDemoTableDispatch: React.PropTypes.func.isRequired,
    refreshDemoTableDispatch: React.PropTypes.func.isRequired,
    demoTableRefresh: React.PropTypes.bool,
}
function mapStateToProps(state, ownProps) {
    const {
        demoTableRefresh
    } = state.table.demoTable
    return {demoTableRefresh};
}

export default ReactRedux.connect(mapStateToProps, {
    getIndexDemoTableDispatch,
    refreshDemoTableDispatch,
})(TableMainBlock)
