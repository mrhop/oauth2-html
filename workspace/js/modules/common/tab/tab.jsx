/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./tab.scss');

class BasicTab extends React.Component {
    constructor(props) {
        super(props);
    }

    //need the basic functions to show and hide content

    componentDidMount() {
        var aList = this.modalDom.querySelectorAll('.nav-tabs li.tab-a');
        for (var i = 0; i < aList.length; i++) {
            if (!aList[i].classList.contains('with-dropdown')) {
                aList[i].addEventListener('click', function (modalDom) {
                    var panelContent = modalDom.querySelector('.tab-content ' + this.getAttribute('data-related'));
                    var panelContentParent = null;
                    var aParent = null;
                    if (this.getAttribute('data-related-parent')) {
                        panelContentParent = modalDom.querySelector('.tab-content ' + this.getAttribute('data-related-parent'));
                        aParent = this.parentNode.parentNode;
                    }
                    var panelContentList = modalDom.querySelectorAll('.tab-content .active');
                    if (panelContentList) {
                        for (var i = 0; i < panelContentList.length; i++) {
                            if (panelContentList[i] !== panelContentParent && panelContentList[i] !== panelContent) {
                                panelContentList[i].classList.remove('active');
                            }
                        }
                    }
                    if (panelContentParent) {
                        panelContentParent.classList.add('active');
                    }
                    panelContent.classList.add('active');
                    //active the a tab
                    var aList = modalDom.querySelectorAll('.tab-a.active');
                    if (aList) {
                        for (var j = 0; j < aList.length; j++) {
                            if (aList[j] !== this && aList[j] !== aParent) {
                                aList[j].classList.remove('active');
                            }
                        }
                    }
                    if (aParent) {
                        aParent.classList.add('active');
                    }
                    this.classList.add('active');
                }.bind(aList[i], this.modalDom));
            }
        }
    }


    renderBasic(tabExtraClass) {
        var classNames = require('classnames');
        var tabClass = classNames('tab', tabExtraClass);
        var tab = <ul className="nav nav-tabs">
            <li className="tab-a active" data-related=".tab-panel-1">Tab1
            </li>
            <li className="tab-a" data-related=".tab-panel-2">
                Tab2
            </li>
            <li className="tab-a with-dropdown">
                Tab3
                <ul className="dropdown-menu">
                    <li className="tab-a tab-sub-a" data-related-parent=".tab-panel-3"
                        data-related=".tab-panel-3-1">SubTitle 1
                    </li>
                    <li className="tab-a tab-sub-a" data-related-parent=".tab-panel-3"
                        data-related=".tab-panel-3-2">SubTitle 2
                    </li>
                </ul>
            </li>
        </ul>;
        var content = <div className="tab-content">
            <div className="tab-panel tab-panel-1 active">
                Tab1
            </div>
            <div className="tab-panel tab-panel-2">
                Tab2
            </div>
            <div className="tab-panel tab-panel-3">
                <div className="sub-tab-panel tab-panel-3-1">Sub Tab 3-1</div>
                <div className="sub-tab-panel tab-panel-3-2">Sub Tab 3-2</div>
            </div>
        </div>;
        return (
            <div className={tabClass} ref={(ref) => this.modalDom = ref}>
                {tab}
                {content}
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

class LeftVerticalTab extends BasicTab {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderBasic('left-vertical')
        );
    }
}

class RightVerticalTab extends BasicTab {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.renderBasic('right-vertical')
        );
    }
}

DefaultTab.propTypes = {tabValues: React.PropTypes.array};
LeftVerticalTab.propTypes = {tabValues: React.PropTypes.array};
RightVerticalTab.propTypes = {tabValues: React.PropTypes.array};
//tabValues title\ & related-content multi- and sub title, sub content
//hor, then ver then others

module.exports = {
    DefaultTab,
    LeftVerticalTab,
    RightVerticalTab
};