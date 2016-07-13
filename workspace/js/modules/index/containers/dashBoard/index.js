/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import DashBoardBlock from '../../../include/dashBoard/dashBoard.jsx';
import BaseTable from '../../components/dashBoard/baseTable';
import RowEditableTable from '../../components/dashBoard/rowEditableTable';
import {getIndexDemoTableDispatch, refreshDemoTableDispatch} from '../../actions/dashBoard';
class DashBoardMainBlock extends React.Component {
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
        var dataWithTitle = {
            title: 'test Name',
            content: <span>who know this is right or not?</span>
        };

        var basicToastData = {
            content: <span>who know this is right or not?</span>,
            title: 'check you are?'
        };

        var basicModalData = {
            content: <span>who know this is right or not?</span>,
            title: 'check you are?',
            closeFun: function () {
                console.log('before close');
                return true;
            },
            footerCloseButton: {
                visible: true,
                title: 'close',
            },
            footerContent: <span>test close</span>,
        };

        var basicTabData = [
            {
                id: 1,
                active: true,
                title: 'tab1',
                content: 'content1'
            }, {
                id: 2,
                title: 'tab2',
                content: 'content2'
            }, {
                id: 3,
                title: 'tab3',
                children: [
                    {
                        id: '3-1',
                        title: 'tab3-1',
                        content: 'content3-1'
                    },
                    {
                        id: '3-2',
                        title: 'tab3-2',
                        content: 'content3-2'
                    }
                ]
            }
        ];
        var columns = [
                <Panel.DefaultPanel>
                    <button className="btn btn-primary open-toast1"
                            onClick={Toast.createToast.bind(this,basicToastData,'success')}>open
                    </button>
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <span>stand here</span>
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <button className="btn btn-primary open-modal2"
                            onClick={Modal.createModal.bind(this,basicModalData,'default')}>open
                    </button>
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <button className="btn btn-primary open-modal1"
                            onClick={Modal.createModal.bind(this,basicModalData,'messageError')}>open
                    </button>
                </Panel.DefaultPanel>
            ]
            ;
        var columnsSecond = [
                <Panel.DefaultPanel>
                    <Tab.DefaultTab tabValues={basicTabData}/>
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <Tab.LeftVerticalTab tabValues={basicTabData}/>
                </Panel.DefaultPanel>
            ]
            ;
        var columnsThird = [
                <Panel.PanelWithHeader panelValues={{title : 'default Chart'}}>
                    <div>chart to be continue...</div>
                </Panel.PanelWithHeader>
            ]
            ;
        return (<ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoardMainBlock')}>
            <div>
                <Layout.Columns4 columnValues={columns}/>
                <Layout.Columns2 columnValues={columnsSecond}/>
                <Layout.Columns2 columnValues={columnsThird}/>
                <Panel.PanelWithHeader panelValues={{title : 'Row Editable Table'}}>
                    <RowEditableTable />
                </Panel.PanelWithHeader>
            </div>
        </ReactIntl.IntlProvider>)
        ;
    }
}


// class DashBoard extends React.Component {
//     componentWillMount() {
//         //data init
//         this.props.getIndexDemoTableDispatch()
//     }
//
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.demoTableRefresh) {
//             this.props.refreshDemoTableDispatch();
//         }
//     }
//
//     render() {
//         return
//         <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoardMainBlock')}>
//             <MainBlock />
//         </ReactIntl.IntlProvider>
//     }
// }

DashBoardMainBlock.propTypes = {
    getIndexDemoTableDispatch: React.PropTypes.func.isRequired,
    demoTableRefresh: React.PropTypes.bool,
}
function mapStateToProps(state, ownProps) {
    const {
        demoTableRefresh
    } = state.dashBoard.demoTable
    return {demoTableRefresh};
}

export default ReactRedux.connect(mapStateToProps, {getIndexDemoTableDispatch, refreshDemoTableDispatch})(DashBoardMainBlock)
