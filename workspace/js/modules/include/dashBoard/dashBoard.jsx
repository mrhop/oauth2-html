/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoard.scss');
import data from './data/dashBoard';
import DashboardTop from './dashBoardTop/dashBoardTop.jsx';
import DashBoardLeftNav from './dashBoardLeftNav/dashBoardLeftNav.jsx';
import DashBoardMain from './dashBoardMain/dashBoardMain.jsx';

class DashBoardBlock extends BaseComponent {
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
DashBoardBlock.propTypes = { mainBlock: React.PropTypes.any};

export function DashBoardBlockCreate(mainBlock,extendVariables){
    UtilFun.domReady(function () {
        var locale = UtilFun.getLocale();
        let DashBoardBlockWrapper = new ReactIntl.injectIntl(DashBoardBlock);
        ReactDOM.render(
            <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoard',extendVariables)}>
                <DashBoardBlockWrapper mainBlock={mainBlock}/>
            </ReactIntl.IntlProvider>,
            document.querySelector('#entirety')
        );
        //click
    });
}

