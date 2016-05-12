/**
 * Created by Donghui Huo on 2016/5/6.
 */
require("./404.scss");


ReactIntl.addLocaleData([...ReactIntlEn, ...ReactIntlZh]);
class ErrorPage404 extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1><ReactIntl.FormattedMessage id='404.error'/></h1>

                <p><ReactIntl.FormattedMessage id='404.sorrySentence'/><a href='/'><ReactIntl.FormattedMessage id='404.backHome'/></a></p>
            </div>
        );
    }
}

UtilFun.domReady(function () {
    var locale = UtilFun.getLocale();
    ReactDOM.render(
        <ReactIntl.IntlProvider locale={locale} messages={UtilFun.getIntl('404')}>
            <ErrorPage404 />
        </ReactIntl.IntlProvider>,
        document.getElementsByClassName('page-not-found-modal')[0]
    );
})

