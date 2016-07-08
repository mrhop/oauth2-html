/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import DashBoardBlock from '../../../include/dashBoard/dashBoard.jsx';
import BaseTable from '../../components/dashBoard/baseTable';
import RowEditableTable from '../../components/dashBoard/rowEditableTable';
import {getIndexDemoTableDispatch} from '../../actions/dashBoard';
class MainBlock extends React.Component {
    constructor(props) {
        super(props);

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
                <Panel.PanelWithHeader panelValues={{title : 'default Table'}}>
                    <BaseTable />
                </Panel.PanelWithHeader>
            ]
            ;
        return (<div>
            <Layout.Columns4 columnValues={columns}/>
            <Layout.Columns2 columnValues={columnsSecond}/>
            <Layout.Columns2 columnValues={columnsThird}/>
            <Panel.PanelWithHeader panelValues={{title : 'Row Editable Table'}}>
                <RowEditableTable />
            </Panel.PanelWithHeader>
        </div>);
    }
}


class DashBoard extends React.Component{
    componentWillMount() {
        //data init
        this.props.getIndexDemoTableDispatch({})
    }
    render(){
        return <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('dashBoard','indexMainBlock')}>
                   <DashBoardBlock>
                       <MainBlock/>
                  </DashBoardBlock>
                </ReactIntl.IntlProvider>
    }
}

DashBoard.propTypes = {
    getIndexDemoTableDispatch: React.PropTypes.func.isRequired
}
function mapStateToProps(state, ownProps) {
  return {}
}

export default ReactRedux.connect(mapStateToProps, {getIndexDemoTableDispatch})(DashBoard)
