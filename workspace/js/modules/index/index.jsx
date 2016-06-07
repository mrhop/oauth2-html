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
            openDom: '.open-modal1',
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
                        id:'3-1',
                        title: 'tab3-1',
                        content: 'content3-1'
                    },
                    {
                        id:'3-2',
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
                    <span>you shall know this is the basic default panel</span>
                </Panel.DefaultPanel>,
                < Modal.DefaultModal modalValues={basicModalData}>
                    <span>you shall know this is the basic default panel</span>
                </Modal.DefaultModal>,
                <Panel.DefaultPanel>
                    <button className="btn btn-primary open-modal1">open</button>
                </Panel.DefaultPanel>
            ]
            ;
        var columnsSecond = [
                <Panel.DefaultPanel>
                    <Tab.DefaultTab tabValues={basicTabData} />
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    <Tab.LeftVerticalTab tabValues={basicTabData}/>
                </Panel.DefaultPanel>
            ]
            ;
        var columnsThird = [
                <Panel.DefaultPanel>
                    <Tab.RightVerticalTab tabValues={basicTabData} minHeight={500} />
                </Panel.DefaultPanel>,
                <Panel.DefaultPanel>
                    test
                </Panel.DefaultPanel>
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

