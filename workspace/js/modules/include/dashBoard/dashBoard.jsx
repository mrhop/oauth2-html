/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoard.scss');
import data from './data/dashBoard';
import DashboardTop from './dashBoardTop/dashBoardTop.jsx';
import DashBoardLeftNav from './dashBoardLeftNav/dashBoardLeftNav.jsx';
import DashBoardMain from './dashBoardMain/dashBoardMain.jsx';

class DashBoardBlock extends React.Component {
    constructor(props) {
        super(props);
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
        // return (
        //     <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoard','dashBoardMainBlock')}>
        //         <div style={{'height' : '100%'}}>
        //             <DashBoardLeftNav/>
        //             <DashboardTop/>
        //             <DashBoardMain {...this.props}/>
        //         </div>
        //     </ReactIntl.IntlProvider>
        // );
    }
}



function mapStateToProps(state, ownProps) {
    return {};
}

export default ReactRedux.connect(mapStateToProps, {})(DashBoardBlock);

//export default ReactIntl.injectIntl(DashBoardBlock);
