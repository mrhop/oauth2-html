/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardTop.scss');
import data from './data/dashBoardTop';

class DashboardTop extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick(e) {
        var sidebar = document.querySelector('.al-sidebar');
        var mainContent = document.querySelector('main');

        if (sidebar) {
            if (sidebar.classList.contains('collapse') || sidebar.clientWidth < 100) {
                sidebar.classList.remove('collapse');
                sidebar.classList.add('un-collapse');
                if(mainContent){
                    mainContent.classList.remove('collapse');
                    mainContent.classList.add('un-collapse');
                }
            } else {
                sidebar.classList.remove('un-collapse');
                sidebar.classList.add('collapse');
                if(mainContent){
                    mainContent.classList.add('collapse');
                    mainContent.classList.remove('un-collapse');
                }
            }
        }
        return false;
    }

    render() {
        return (
            <div className="page-top clearfix">
                <a href="#" className="al-logo clearfix">
                    <span>{this.props.appPros['app.name']}</span>{this.props.appPros['app.adminPlatform']}
                </a>
                <a href="#" className="collapse-menu-link" onClick={this.onClick}></a>

                <div className="search">
                    <i className="ion-ios-search-strong"></i>
                    <input id="searchInput" type="text"
                           placeholder={this.props.intl.formatMessage({id: 'dashBoard.searchPlaceHolder'})}/>
                </div>
                <div className="user-profile clearfix">
                    <div className="al-user-profile dropdown">
                        <a className="profile-toggle-link dropdown-toggle">
                            <img src={require('../../../../../assets/images/profile/Nasta.png')}/>
                        </a>
                    </div>
                    <ul className="al-msg-center clearfix">
                        <li className="dropdown">
                            <a href="" className="dropdown-toggle"><i className="fa fa-bell-o"></i><span>5</span>
                                <div className="notification-ring"></div>
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="" className="msg dropdown-toggle"><i
                                className="fa fa-envelope-o"></i><span>15</span>
                                <div className="notification-ring"></div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="questions-section">{this.props.intl.formatMessage({id: 'dashBoard.haveQuestions'})} <a
                    href="mailto:service@hhdd.com">service@hhdd.com</a>
                </div>
            </div>
        );
    }
}

export default DashboardTop;
