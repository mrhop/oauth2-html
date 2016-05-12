require('./auth.scss');
import data from './data/auth';
//import ReactDOM from 'react-dom';
import {IntlProvider,injectIntl} from 'react-intl';
import AuthOneClick from '../include/authOneClick.jsx';

class AuthBlock extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='auth-block'>
                <h1>{this.props.intl.formatMessage({id: 'auth.signIn'}, {
                    appName: this.props.appPros['app.name'],
                    adminPlatform: this.props.appPros['app.adminPlatform']
                })}
                </h1>
                <a className='auth-link'>
                    {this.props.intl.formatMessage({id: 'auth.newUser'}, {
                        appName: this.props.appPros['app.name'],
                        adminPlatform: this.props.appPros['app.adminPlatform']
                    })}
                </a>
                <AuthForm {...this.props}/>
                <AuthOneClick {...this.props}/>
            </div>

        );
    }
}
class AuthForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="input-email"
                           className="col-sm-2 control-label">{this.props.appPros['app.email']}</label>

                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="input-email"
                               placeholder={this.props.appPros['app.email']}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="input-password"
                           className="col-sm-2 control-label">{this.props.appPros['app.password']}</label>

                    <div className="col-sm-10"><input type="password" className="form-control" id="input-password"
                                                      placeholder={this.props.appPros['app.password']}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit"
                                className="a btn btn-primary btn-auth">{this.props.intl.formatMessage({id: 'auth.login'})}</button>
                        <a href=""
                           className="forgot-pass">{this.props.intl.formatMessage({id: 'auth.forgotPassword'})}</a>
                    </div>
                </div>
            </form>
        );
    }
}

UtilFun.domReady(function () {
    var locale = UtilFun.getLocale();
    let AuthBlockWrapper = new ReactIntl.injectIntl(AuthBlock);
    ReactDOM.render(
        <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('auth')}>
            <AuthBlockWrapper />
        </ReactIntl.IntlProvider>,
        document.getElementsByClassName('auth-main')[0]
    );
});

