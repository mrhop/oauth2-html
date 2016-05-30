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

        var basicModalData = {
            content: <span>who know this is right or not?</span>,
            openDom: '.open-modal1',
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
        var columns = [
                <Panel.DefaultPanel>
                    <span>you shall know this is the basic default panel</span>
                </Panel.DefaultPanel>,
                <Panel.PanelWithHeader panelValues={dataWithTitle}>
                    <span>you shall know this is the basic default panel</span>
                </Panel.PanelWithHeader>,
                < Modal.DefaultModal modalValues={basicModalData}>
                    <span>you shall know this is the basic default panel</span>
                </Modal.DefaultModal>,
                <Panel.DefaultPanel>
                    <button className="btn btn-primary open-modal1">open</button>
                </Panel.DefaultPanel>
            ]
            ;
        return (<Layout.Columns4 columnValues={columns}/>);
        //return <div style={{'height' : '2000px'}}>123</div>;
    }
}
DashBoardBlockCreate(MainBlock, 'indexMainBlock');
//dashBoardCreate({},'indexMainBlock')

