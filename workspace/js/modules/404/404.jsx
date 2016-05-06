/**
 * Created by Donghui Huo on 2016/5/6.
 */
require("./404.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider,FormattedMessage,addLocaleData} from 'react-intl';
import en from '../../../../node_modules/react-intl/locale-data/en';
import zh from '../../../../node_modules/react-intl/locale-data/zh';
import utilFun from '../../util/utilFun';
import BaseComponent from '../common/baseComponent.jsx';


addLocaleData([...en, ...zh]);
class ErrorPage404 extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page-not-found-modal">
                <h1><FormattedMessage id='404.error'/></h1>

                <p><FormattedMessage id='404.sorrySentence'/><a href='/'><FormattedMessage id='404.backHome'/></a></p>
            </div>
        );
    }
}

utilFun.domReady(function () {
    var locale = utilFun.getLocale();
    ReactDOM.render(
        <IntlProvider locale={locale} messages={utilFun.getIntl('404')}>
            <ErrorPage404 />
        </IntlProvider>,
        document.getElementsByTagName('body')[0]
    );
})

