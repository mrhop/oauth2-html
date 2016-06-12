/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');
import data from './data/index';
import {DashBoardBlockCreate} from '../include/dashBoard/dashBoard.jsx';

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
        var tableValues = {
            thead: [{
                className: 'td-id',
                title: '#',
                value: 'id',
                sort: 'asc'
            }, {title: 'First Name', value: 'firstName'}, {title: 'Last Name', value: 'lastName'}, {
                title: 'Username',
                value: 'username'
            }, {title: 'Email', value: 'email'}, {title: 'Age', value: 'age'}],
            tfoot: [{
                className: 'td-foot',
                colSpan: 6,
                title: 'this is the footer for this table'
            }],
            tbody: [[{
                className: 'td-id',
                title: '1'
            }, {title: 'Mark'}, {title: 'Otto'}, {title: '@mdo'}, {title: 'md@gmail.com'}, {title: '31'}]]
        };

        var additionalFeature = {
            extraClass: 'hover',
            sortAvailable: true,
            pager: {
                show: true,
                rowSize: {
                    show: true
                }
            }
        };

        var columns = [
                <Panel.DefaultPanel>
                    <button className="btn btn-primary open-toast1"
                            onClick={Toast.createToast.bind(this,basicToastData,'success')}>open
                    </button>
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <span>you shall know this is the basic default panel</span>
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <span>you shall know this is the basic default panel</span>
                </Panel.DefaultPanel>,
                // < Modal.DefaultModal modalValues={basicModalData}>
                //     <span>you shall know this is the basic default panel</span>
                // </Modal.DefaultModal>,
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
                    <Table.StripedTable minHeight={426} tableValues={tableValues}/>
                </Panel.PanelWithHeader>,
                <Panel.PanelWithHeader panelValues={{title : 'Row Editable Table'}}>
                    <Table.RowEditableTable tableValues={tableValues}
                                            additionalFeature={additionalFeature} minHeight={350}/>
                </Panel.PanelWithHeader>
            ]
            ;
        return (<div>
            <Layout.Columns4 columnValues={columns}/>
            <Layout.Columns2 columnValues={columnsSecond}/>
            <Layout.Columns2 columnValues={columnsThird}/>
        </div>);
        //return <div style={{'height' : '2000px'}}>123</div>;
    }
}
DashBoardBlockCreate(MainBlock, 'indexMainBlock');
//dashBoardCreate({},'indexMainBlock')

