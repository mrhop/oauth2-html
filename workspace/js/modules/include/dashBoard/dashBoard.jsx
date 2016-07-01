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
        <div style={{'height' : '100%'}}>
            <DashBoardLeftNav {...this.props}/>
            <DashboardTop {...this.props}/>
            <DashBoardMain {...this.props}/>
        </div>);
    }
}
  
DashBoardBlock.propTypes = {
    intl: ReactIntl.intlShape.isRequired,
};

export default ReactIntl.injectIntl(DashBoardBlock) ;
