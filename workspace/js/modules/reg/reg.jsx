require('../auth/auth.scss');
import data from './data/reg';
import AuthOneClick from '../include/authOneClick.jsx';

class RegBlock extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='auth-block'>
                <h1>{this.props.intl.formatMessage({id: 'auth.signUp'}, {
                    appName: this.props.appPros['app.name'],
                    adminPlatform: this.props.appPros['app.adminPlatform']
                })}
                </h1>
                <a className='auth-link'>
                    {this.props.intl.formatMessage({id: 'auth.haveAccount'}, {
                        appName: this.props.appPros['app.name'],
                        adminPlatform: this.props.appPros['app.adminPlatform']
                    })}
                </a>
                <RegForm {...this.props}/>
                <AuthOneClick {...this.props}/>
            </div>

        );
    }
}
class RegForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="input-name"
                           className="col-sm-2 control-label">{this.props.appPros['app.username']}</label>

                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="input-name"
                               placeholder={this.props.appPros['app.fullName']}/>
                    </div>
                </div>
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
                                className="a btn btn-primary btn-auth">{this.props.intl.formatMessage({id: 'auth.register'})}</button>
                    </div>
                </div>
            </form>
        );
    }
}

UtilFun.domReady(function () {
    var locale = UtilFun.getLocale();
    let RegBlockWrapper = new ReactIntl.injectIntl(RegBlock);
    ReactDOM.render(
        <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('auth')}>
            <RegBlockWrapper />
        </ReactIntl.IntlProvider>,
        document.getElementsByClassName('auth-main')[0]
    );
});

