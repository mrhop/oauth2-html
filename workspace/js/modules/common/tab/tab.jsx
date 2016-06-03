/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./tab.scss');

class BasicTab extends React.Component {
    constructor(props) {
        super(props);
    }

    //need the basic functions to show and hide content

    componentDidMount() {
        var nodeList = this.modalDom.querySelectorAll('.nav-tabs > li:not(.with-dropdown)');
        for (var i = 0; i < nodeList.length; i++) {
            nodeList[i].querySelector('a').addEventListener('click', function (index) {
                var panelContentList = this.modalDom.querySelectorAll('.tab-content .tab-panel');
                for (var i = 0; i < panelContentList.length; i++) {
                    if (i != index) {
                        panelContentList[i].style.display = 'none';
                    } else {
                        panelContentList[i].style.display = 'block';
                    }
                }
                var navTabs = this.modalDom.querySelectorAll('.nav-tabs > li');
                for (var j = 0; j < navTabs.length; j++) {
                    navTabs[j].querySelector('a').classList.remove('active');
                }
                this.modalDom.querySelectorAll('.nav-tabs > li:not(.with-dropdown):nth-child(' + (index + 1) + ')').classList.add('active');
            }.bind(this, i));
        }
        var nodeListWithDropDown = this.modalDom.querySelectorAll('.nav-tabs > li.with-dropdown');
        for (var i = 0; i < nodeListWithDropDown.length; i++) {
            var subAList = nodeListWithDropDown[i].querySelectorAll('.dropdown-menu > li > a');
            for (var j = 0; j < subAList.length; j++) {
                subAList[j].addEventListener('click', function (index1, index2) {
                    var panelContentList = this.modalDom.querySelectorAll('.tab-content .tab-panel.with-sub');
                    for (var i = 0; i < panelContentList.length; i++) {
                        if (i != index1) {
                            panelContentList[i].style.display = 'none';
                        } else {
                            panelContentList[i].style.display = 'block';
                            var list = panelContentList[i].querySelectorAll('.sub-tab-panel');
                            for (var j = 0; j < list.length; j++) {
                                if (j != index2) {
                                    list[j].style.display = 'none';
                                } else {
                                    list[j].style.display = 'block';
                                }
                            }
                        }
                    }
                }.bind(this, i, j));
            }
        }

    }


    renderBasic() {
        return (
            <div className="tab" ref={(ref) => this.modalDom = ref}>
                <ul className="nav nav-tabs">
                    <li>
                        <a href="#" className="active">Tab1</a>
                    </li>
                    <li>
                        <a href="#">Tab2</a>
                    </li>
                    <li className="with-dropdown">
                        <a href="#">Tab3
                            <ul className="dropdown-menu">
                                <li><a>SubTitle 1</a></li>
                                <li><a className="active">SubTitle 2</a></li>
                            </ul>
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-panel">
                        Tab1
                    </div>
                    <div className="tab-panel">
                        Tab2
                    </div>
                    <div className="tab-panel with-sub">
                        <div className="sub-tab-panel">Sub Tab 3-1</div>
                        <div className="sub-tab-panel">Sub Tab 3-2</div>
                    </div>
                </div>
            </div>
        );
    }
}


class DefaultTab extends BasicTab {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderBasic()
        );
    }
}

DefaultTab.propTypes = {tabValues: React.PropTypes.array};
//tabValues title\ & related-content multi- and sub title, sub content

module.exports = {
    DefaultTab
};