/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardLeftNav.scss');
import data from './data/dashBoardLeftNav';

class DashboardLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    onMouseOut(e) {
        var directLine = document.querySelector('.al-sidebar .direct-line');
        directLine.style.top = '-200px';
    }

    render() {
        var testData = {
            items: [{
                id: '1',
                url: '#',
                selected: true,
                iconClass: 'home',
                name: 'Dashboard'
            },
                {
                    id: '2',
                    url: '#',
                    iconClass: 'cog',
                    name: 'Setting',
                    subItems: [{
                        id: '3',
                        url: '#',
                        name: 'User Info'
                    }, {
                        id: '4',
                        url: '#',
                        name: 'Others'
                    }]
                }, {
                    id: '5',
                    url: '#',
                    selected: false,
                    iconClass: 'home',
                    name: 'Test'
                }
            ]
        };
        return (
            <sidebar>
                <aside className="al-sidebar" onMouseOut={this.onMouseOut}>
                    <div className="direct-line"></div>
                    <CustomScrollbar style={{'heigh':'100%'}}>
                        {testData ? (<DashboardLeftList data={testData.items}/>) : null}
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

    componentDidMount() {
    }

    onMouseOver(e) {
        var directLine = document.querySelector('.al-sidebar .direct-line');
        directLine.style.top = e.currentTarget.parentNode.offsetTop + 'px';
        directLine.style.height = e.currentTarget.clientHeight + 'px';
        e.stopPropagation();
        //height?? something wrong
    }

    onClick(e) {
        var parentDom = e.currentTarget.parentElement;
        var subUl = parentDom.querySelector('.al-sidebar-sublist');
        if (subUl) {
            var sidebar = document.querySelector('.al-sidebar');

            if (!parentDom.classList.contains('opened')) {
                var height = 0;
                var liSubList = subUl.querySelectorAll('.al-sidebar-sublist-item');
                for (var i = 0; i < liSubList.length; ++i) {
                    height += liSubList[i].offsetHeight;
                }
                ;
                subUl.style.height = height + 'px';
                parentDom.classList.add('opened');
            } else {
                if ((!sidebar || sidebar && sidebar.classList.contains('un-collapse')) && parentDom.classList.contains('opened')) {
                    subUl.style.height = '0px';
                    parentDom.classList.remove('opened');
                }
            }
            if (sidebar && !sidebar.classList.contains('un-collapse')) {
                sidebar.classList.remove('collapse');
                sidebar.classList.add('un-collapse');
                document.querySelector('main.al-main').classList.remove('collapse').add('un-collapse');
            } 
        } else {
            //do selected
            var node = document.querySelector('.al-sidebar .al-sidebar-list-item.selected');
            if (node) {
                node.classList.remove('selected');
            } else {
                var subNode = document.querySelector('.al-sidebar .al-sidebar-sublist-item.selected');
                subNode.classList.remove('selected');
            }
            e.currentTarget.parentElement.classList.add('selected');
        }

    }

    render() {
        var classNames = require('classnames');
        var items = this.props.data.map(function (item) {
            var liClass = classNames('al-sidebar-list-item', {'selected': item.selected});
            return (
                <li key={item.id} className={liClass}>
                    <a className={"al-sidebar-list-link"} href={item.url} onMouseOver={this.onMouseOver}
                       onClick={this.onClick}>
                        <i className={item.iconClass}></i>
                        <span>{item.name}</span>
                        {item.subItems ? (<b className="down"></b>) : null}
                    </a>
                    {item.subItems ? (<DashboardLeftSubList data={item.subItems}/>) : null}
                </li>
            );
        }, this);

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

    onMouseOver(e) {
        var directLine = document.querySelector('.al-sidebar .direct-line');
        directLine.style.top = (e.currentTarget.offsetTop + e.currentTarget.parentNode.parentNode.offsetTop) + 'px';
        directLine.style.height = e.currentTarget.clientHeight + 'px';
        e.stopPropagation();
    }

    onClick(e) {
        var currentDom = e.currentTarget;
        var node = document.querySelector('.al-sidebar').querySelector('.al-sidebar-list-item.selected');
        if (node) {
            node.classList.remove('selected');
        } else {
            var subNodeList = document.querySelector('.al-sidebar').querySelector('.al-sidebar-sublist-item.selected');
            subNodeList.classList.remove('selected');
        }
        e.currentTarget.classList.add('selected');
    }

    render() {
        var classNames = require('classnames');
        var subItems = this.props.data.map(function (subItem) {
            var liClass = classNames('al-sidebar-sublist-item', {'selected': subItem.selected});
            return (
                <li key={subItem.id} className={liClass} onClick={this.onClick} onMouseOver={this.onMouseOver}>
                    <a className="al-sidebar-list-link" href={subItem.url}>{subItem.name}</a>
                </li>
            );
        }, this);
        return (<ul className="al-sidebar-sublist">{subItems}</ul>);
    }
}
export default ReactIntl.injectIntl(DashboardLeft);

//how to change the window width, when change