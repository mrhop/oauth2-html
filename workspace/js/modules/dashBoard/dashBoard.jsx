/**
 * Created by Donghui Huo on 2016/5/10.
 */
require("./dashBoard.scss");
import data from './data/dashBoard'
import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider,injectIntl} from 'react-intl';
import utilFun from '../../util/utilFun';
import BaseComponent from '../common/baseComponent.jsx';
import DashboardTop from '../include/dashBoardTop/dashBoardTop.jsx';

class DashBoardBlock extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <div><DashboardTop {...this.props}/></div>;
    }
}

utilFun.domReady(function () {
    var locale = utilFun.getLocale();
    let DashBoardBlockWrapper = new injectIntl(DashBoardBlock);
    ReactDOM.render(
        <IntlProvider locale={locale} messages={utilFun.getIntl('dashBoard')}>
            <DashBoardBlockWrapper />
        </IntlProvider>,
        document.getElementsByTagName('main')[0]
    );
})
