/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardLeftNav.scss');
import data from './data/dashBoardLeftNav';
import { Scrollbars } from 'react-custom-scrollbars';


class DashboardTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <sidebar>
                <aside className="al-sidebar">
                    <CustomScrollbar style={{'heigh':'100%'}}>
                        <ul className="al-sidebar-list">
                            <li className="al-sidebar-list-item selected">
                                <a className="al-sidebar-list-link" href="#">
                                    <i className="home"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="al-sidebar-list-item">
                                <a className="al-sidebar-list-link" href="#">
                                    <i className="cog"></i>
                                    <span>Setting</span>
                                    <b className="down"></b>
                                </a>
                                <ul className="al-sidebar-sublist">
                                    <li className="al-sidebar-sublist-item selected">
                                        <a className="al-sidebar-list-link">Personal information</a>
                                    </li>
                                    <li  className="al-sidebar-sublist-item">
                                        <a className="al-sidebar-list-link">Other settings</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </CustomScrollbar>
                </aside>
            </sidebar>
        );
    }
}
class DashboardTopLi extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <li className="al-sidebar-list-item selected">
            <a className="al-sidebar-list-link" href="#">
                <i className="home"></i>
                <span>Dashboard</span>
            </a>
        </li>);
    }
}
export default DashboardTop;
