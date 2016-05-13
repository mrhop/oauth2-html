/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoard.scss');
import data from './data/dashBoard';
import DashboardTop from './dashBoardTop/dashBoardTop.jsx';
import DashBoardLeftNav from './dashBoardLeftNav/dashBoardLeftNav.jsx';

class DashBoardBlock extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let ele =  React.createElement(this.props.mainBlock, Object.assign({}, this.props));

        return (
        <div>
            <DashBoardLeftNav {...this.props}/>
            <DashboardTop {...this.props}/>
            {ele}
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
            document.getElementsByTagName('main')[0]
        );
        //click
        document.getElementsByClassName("al-sidebar-list-item").forEach()
    });
}

