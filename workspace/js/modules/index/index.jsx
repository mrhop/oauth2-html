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
                sort: 'asc',
                filter: false
            }, {
                title: 'First Name',
                value: 'firstName',
                filter: true,
                editable: true,
                editType: 'select',
                editValue: [{label: 'select 1', value: 'Mark'}, {label: 'select 2', value: 'Mark1'}]
            }, {
                title: 'Last Name', value: 'lastName', filter: true, editable: true,
                editType: 'radio', editValue: [{label: 'type 1', value: 'Otto'}, {label: 'type 2', value: 'Otto1'}]
            }, {
                title: 'Username',
                value: 'username',
                filter: true,
                editable: true,
                editType: 'text'
            }, {title: 'Email', value: 'email', filter: true}, {title: 'Age', value: 'age', filter: true,
                editable: true, editType: 'checkbox', editValue: [{label: '31', value: '31'}, {label: '32', value: '32'}]
            }],
            tfoot: [{
                className: 'td-foot',
                colSpan: 7,
                title: 'this is the footer for this table'
            }],
            tbody: [{
                key: 1, value: [{
                    className: 'td-id',
                    value: '1'
                }, {value: 'Mark'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
            }]
        };

        var additionalFeature = {
            extraClass: 'hover',
            sortAvailable: true,
            filterAvailable: true,
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
                </Panel.PanelWithHeader>
            ]
            ;
        return (<div>
            <Layout.Columns4 columnValues={columns}/>
            <Layout.Columns2 columnValues={columnsSecond}/>
            <Layout.Columns2 columnValues={columnsThird}/>
            <Panel.PanelWithHeader panelValues={{title : 'Row Editable Table'}}>
                <Table.RowEditableTable tableValues={tableValues}
                                        additionalFeature={additionalFeature} minHeight={350}/>
            </Panel.PanelWithHeader>
        </div>);
        //return <div style={{'height' : '2000px'}}>123</div>;
    }
}
DashBoardBlockCreate(MainBlock, 'indexMainBlock');
//dashBoardCreate({},'indexMainBlock')

