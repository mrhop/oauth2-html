/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import {getDemoLineChartDispatch,getDemoAreaChartDispatch,getDemoBarChartDispatch,getDemoPieChartDispatch} from '../../actions/chart';
import LineChart from '../../components/charts/LineChart';
import AreaChart from '../../components/charts/AreaChart';
import BarChart from '../../components/charts/BarChart';
import PieChart from '../../components/charts/PieChart';
class DashBoardMainBlock extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        //data init
        this.props.getDemoLineChartDispatch()
        this.props.getDemoAreaChartDispatch()
        this.props.getDemoBarChartDispatch()
        this.props.getDemoPieChartDispatch()
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
        var columns2 = [
                <Panel.PanelWithHeader panelValues={{title : 'Default Bar Chart'}}>
                    <BarChart />
                </Panel.PanelWithHeader>,
                <Panel.PanelWithHeader panelValues={{title : 'Default Pie Chart'}}>
                    <PieChart />
                </Panel.PanelWithHeader>
            ]
            ;

        return (<ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoardMainBlock')}>
            <div>
                <Layout.Columns2 columnValues={columns}/>
                <Layout.Columns2 columnValues={columns2}/>
            </div>
        </ReactIntl.IntlProvider>)
            ;
    }
}

DashBoardMainBlock.propTypes = {
    getDemoLineChartDispatch: React.PropTypes.func.isRequired,
    getDemoAreaChartDispatch: React.PropTypes.func.isRequired,
    getDemoBarChartDispatch: React.PropTypes.func.isRequired,
    getDemoPieChartDispatch: React.PropTypes.func.isRequired,
}
function mapStateToProps(state, ownProps) {
    return {};
}

export default ReactRedux.connect(mapStateToProps, {
    getDemoLineChartDispatch,getDemoAreaChartDispatch,getDemoBarChartDispatch,getDemoPieChartDispatch
})(DashBoardMainBlock)
