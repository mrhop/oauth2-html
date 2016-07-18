/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardLeftNav.scss');

class DashboardLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    onMouseOut(e) {
        document.querySelector('.al-sidebar .direct-line').style.top = '-200px';
    }

    render() {
        return (
            <sidebar>
                <aside className="al-sidebar" onMouseOut={this.onMouseOut}>
                    <div className="direct-line"></div>
                    <CustomScrollbar style={{'heigh':'100%'}}>
                        {this.props.data && <DashboardLeftList data={this.props.data}/>}
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

    componentDidUpdate(prevProps, prevState) {

    }

    onMouseOver(e) {
        var directLine = document.querySelector('.al-sidebar .direct-line');
        directLine.style.top = e.currentTarget.parentElement.offsetTop + 'px';
        directLine.style.height = e.currentTarget.clientHeight + 'px';
        e.stopPropagation();
    }

    onClick(e) {
        var parentDom = e.currentTarget;
        var subUl = parentDom.querySelector('.al-sidebar-sublist');
        if (subUl) {
            var sidebar = document.querySelector('.al-sidebar');
            if (!parentDom.classList.contains('opened')) {
                var height = 0;
                var liSubList = subUl.querySelectorAll('.al-sidebar-sublist-item');
                for (var i = 0; i < liSubList.length; ++i) {
                    height += liSubList[i].offsetHeight;
                }
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
                document.querySelector('main.al-main').classList.remove('collapse');
                document.querySelector('main.al-main').classList.add('un-collapse');
            }
            e.preventDefault();
        } else {
            //do selected
            var node = document.querySelector('.al-sidebar .al-sidebar-list-item.selected');
            if (node) {
                node.classList.remove('selected');
            } else {
                var subNode = document.querySelector('.al-sidebar .al-sidebar-sublist-item.selected');
                subNode && subNode.classList.remove('selected');
            }
            e.currentTarget.classList.add('selected');
        }
    }

    render() {
        var classNames = require('classnames');
        var items = this.props.data.map(function (item) {
            var liClass = classNames('al-sidebar-list-item', {'selected': item.selected});
            return (
                <li key={item.id} className={liClass}
                    onClick={this.onClick}>
                    <ReactRouter.Link className={"al-sidebar-list-link"} to={ item.url ? item.url : '#'}
                                      onMouseOver={this.onMouseOver}
                                      onClick={!item.url ? e => e.preventDefault() : null}>
                        <i className={item.iconClass}></i>
                        <span>{item.name}</span>
                        {item.subItems ? (<b className="down"></b>) : null}
                    </ReactRouter.Link>
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
            subNodeList && subNodeList.classList.remove('selected');
        }
        e.currentTarget.classList.add('selected');
        e.stopPropagation();
    }

    render() {
        var classNames = require('classnames');
        var subItems = this.props.data.map(function (subItem) {
            var liClass = classNames('al-sidebar-sublist-item', {'selected': subItem.selected});
            return (
                <li key={subItem.id} className={liClass} onClick={this.onClick} onMouseOver={this.onMouseOver}>
                    <ReactRouter.Link className={"al-sidebar-list-link"} to={subItem.url}>
                        <span>{subItem.name}</span>
                    </ReactRouter.Link>
                </li>
            );
        }, this);
        return (<ul className="al-sidebar-sublist">{subItems}</ul>);
    }
}


//export default ReactIntl.injectIntl(DashboardLeft);

DashboardLeft.propTypes = {
    data: React.PropTypes.array,
}

function mapStateToProps(state, ownProps) {
    if (state && state.dashBoardFramework && state.dashBoardFramework.leftMenuData) {
        const {
            data
        } = state.dashBoardFramework.leftMenuData
        return {data}
    } else {
        return {};
    }
}


export default ReactIntl.injectIntl(ReactRedux.connect(mapStateToProps, {})(DashboardLeft))