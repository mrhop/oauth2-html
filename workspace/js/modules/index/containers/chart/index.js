/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {getDemoLineChartDispatch,getDemoAreaChartDispatch} from '../../actions/chart';
import LineChart from '../../components/charts/LineChart';
import AreaChart from '../../components/charts/AreaChart';
class DashBoardMainBlock extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        //data init
        this.props.getDemoLineChartDispatch()
        this.props.getDemoAreaChartDispatch()
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {

        var columns = [
                <Panel.PanelWithHeader panelValues={{title : 'Default Line Chart'}}>
                    <LineChart />
                </Panel.PanelWithHeader>,
                <Panel.PanelWithHeader panelValues={{title : 'Default Area Chart'}}>
                    <AreaChart />
                </Panel.PanelWithHeader>
            ]
            ;

        return (<ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoardMainBlock')}>
            <div>
                <Layout.Columns2 columnValues={columns}/>
            </div>
        </ReactIntl.IntlProvider>)
            ;
    }
}

DashBoardMainBlock.propTypes = {
    getDemoLineChartDispatch: React.PropTypes.func.isRequired,
    getDemoAreaChartDispatch: React.PropTypes.func.isRequired,
}
function mapStateToProps(state, ownProps) {
    return {};
}

export default ReactRedux.connect(mapStateToProps, {
    getDemoLineChartDispatch,getDemoAreaChartDispatch
})(DashBoardMainBlock)
