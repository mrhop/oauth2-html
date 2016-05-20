/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardLeftNav.scss');
import data from './data/dashBoardLeftNav';
import {Scrollbars} from 'react-custom-scrollbars';


class DashboardLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var testData = {
            items: {
                url: '#',
                selected: true,
                iconClass:'home',
                name:'Dashboard'
            }
        }
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
                                    <li className="al-sidebar-sublist-item">
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
class DashboardLeftList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items = this.props.data.map(function (item) {
            var subItems = null;
            if (item.subItems) {
                subItems = <DashboardLeftSubList data={item.subItems}/>;
            }
            return (
                <li className={"al-sidebar-list-item  ${item.selected?'selected':null}"}>
                    <a className={"al-sidebar-list-link"} href={item.url}>
                        <i className={item.iconClass}></i>
                        <span>{item.name}</span>
                    </a>
                    {subItems}
                </li>
            );
        });

        return (
            <ul className="al-sidebar-list">
                {items}
            </ul>);
    }
}

class DashboardLeftSubList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var subItems = this.props.data.map(function (subItem) {
            return (
                <li className={"al-sidebar-sublist-item ${subItem.selected?'selected':null}"}>
                    <a className="al-sidebar-list-link" href={subItem.url}>{subItem.name}</a>
                </li>
            );
        });
        return (<ul className="al-sidebar-sublist">{subItems}</ul>);
    }
}
export default DashboardLeft;
