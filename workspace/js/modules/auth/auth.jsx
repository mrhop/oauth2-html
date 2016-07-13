require('./auth.scss');
import data from './data/auth';
import AuthOneClick from '../include/authOneClick.jsx';
class AuthBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='auth-block'>
                <h1><ReactIntl.FormattedMessage id='auth.signIn'
                                                values={{appName: globalProps['app.name'],adminPlatform: globalProps['app.adminPlatform']}}/>
                </h1>
                <a className='auth-link'>
                    <ReactIntl.FormattedMessage id='auth.newUser'
                                                values={{
                        appName: globalProps['app.name'],
                        adminPlatform: globalProps['app.adminPlatform']
                    }}/>
                </a>
                <AuthForm/>
                <AuthOneClick/>
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
                           className="col-sm-2 control-label">{globalProps['app.email']}</label>

                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="input-email"
                               placeholder={globalProps['app.email']}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="input-password"
                           className="col-sm-2 control-label">{globalProps['app.password']}</label>

                    <div className="col-sm-10"><input type="password" className="form-control" id="input-password"
                                                      placeholder={globalProps['app.password']}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit"
                                className="a btn btn-primary btn-auth"><ReactIntl.FormattedMessage id='auth.login'/>
                        </button>
                        <a href=""
                           className="forgot-pass"><ReactIntl.FormattedMessage id='auth.forgotPassword'/></a>
                    </div>
                </div>
            </form>
        );
    }
}
ReactDOM.render(
    <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('auth')}>
        <AuthBlock />
    </ReactIntl.IntlProvider>,
    document.querySelector('.auth-main')
);

