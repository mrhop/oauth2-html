/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoard.scss');
import {getLeftMenuDispatch} from './actions'
import DashboardTop from './dashBoardTop/dashBoardTop.jsx';
import DashBoardLeftNav from './dashBoardLeftNav/dashBoardLeftNav.jsx';
import DashBoardMain from './dashBoardMain/dashBoardMain.jsx';

class DashBoardBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        //data init
        this.props.getLeftMenuDispatch()
    }
    render() {

        return (
            <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoard','dashBoardMainBlock')}>
                <div style={{'height' : '100%'}}>
                    <DashBoardLeftNav/>
                    <DashboardTop/>
                    <DashBoardMain {...this.props}/>
                </div>
            </ReactIntl.IntlProvider>
         );
    }
}



function mapStateToProps(state, ownProps) {
    return {};
}


DashBoardBlock.propTypes = {
    getLeftMenuDispatch: React.PropTypes.func.isRequired,
}


export default ReactRedux.connect(mapStateToProps, {getLeftMenuDispatch})(DashBoardBlock);





