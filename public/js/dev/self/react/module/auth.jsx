import data from '../data/auth'
import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider,FormattedMessage, FormattedNumber, FormattedPlural,FormattedDate,FormattedRelative} from 'react-intl';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import utilFun from 'utilFun';
import BaseComponent from 'baseComponent';

addLocaleData([...en, ...zh]);


class AuthMain extends BaseComponent{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>
                <FormattedMessage
                    id='auth.signIn'
                    values={{
                        appName: this.props.appPros['app.name'],
                        adminPlatform:this.props.appPros['app.adminPlatform']
                    }}/>
            </p>
        );
    }
}

utilFun.domReady(function () {
    var locale = utilFun.getLocale();
   // console.log(utilFun.getIntl().auth.signIn);
    ReactDOM.render(
        <IntlProvider locale={locale} messages={utilFun.getIntl('auth')}>
            <AuthMain />
        </IntlProvider>,
        document.getElementById('containerTest')
    );
})