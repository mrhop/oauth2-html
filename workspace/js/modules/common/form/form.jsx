/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./form.scss');
import {initForm, confirmFormDispatch} from './actions'
import Text from './elements/text'
class BasicForm extends React.Component {
    constructor(props) {
        super(props);
        this.symbol = Symbol('Call API');
        this.uuid = 'form-' + UtilFun.uuid()
        //此处需要处理一下callback,设置一下将save按钮的可用性设置
        this.serverFailureModalData = {
            content: <span>Server error</span>,
            title: 'check the url and server configure ',
            footerCloseButton: {
                visible: true,
                title: 'close',
            },
            footerContent: <span>Form confirm Error</span>,
        }
        this.state = {data: {}};
    }

    componentWillMount() {
        //init action,设置 rule
        this.props.initForm({rule: this.props.initRule, formKey: this.symbol});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (rule.status && rule.status === 'serverFailure') {
            this.serverFailureModalData.content = <p>{rule.failureMsg}</p>
            Modal.createModal.bind(this, this.serverFailureModalData, 'messageError');
            return false;
        }
        if (rule.status && rule.status === 'success') {
            // reset the form
            this.props.initForm({rule: this.props.initRule, formKey: this.symbol});
            this.props.callback();
            return false;
        }
        return true;
    }

    reset() {
        this.props.initForm({rule: this.props.initRule, formKey: this.symbol});
        event.preventDefault()
    }

    submit() {
        //get data
        this.props.confirmFormDispatch({data: this.state.data, formKey: this.symbol});
        event.preventDefault()
    }

    //formExtraClass other layout
    renderBasic(type) {
        const rule = this.props.rule;
        const {structure, submit, reset} = rule
        var classNames = classNames(type, this.props.extraClassName)
        var submitElement = null;
        if (submit) {
            submitElement =
                <input type="submit" className="btn btn-primary"
                       onClick={this.submit.bind(this)}>{submit.label ? submit.label : 'Submit'}</input>;
        }
        var resetElement = null;
        if (reset) {
            resetElement =
                <input type="reset" className="btn btn-warning"
                       onClick={this.reset.bind(this)}>{reset.label ? reset.label : 'Reset'}</input>;
        }
        if (type === 'defaultForm' || type === 'inlineForm' || type === 'noLabelForm' || type === 'horizontalForm') {
            let formElements = structure.map(function (item, index) {
                let id = this.uuid + '-element-' + index;
                this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
                return generateFormElement(id, item, this.state.data[item['name']])
            })
            return <div className={classNames}>
                <form id={this.uuid}>
                    {formElements}
                    <div className="action">
                        <div className="submit">
                            {submitElement}
                        </div>
                        <div className="reset">
                            {resetElement}
                        </div>
                    </div>
                </form>
            </div>
        } else if (type === 'blockForm') {
            let rows = structure.map(function (item, index) {
                let size = 12 % item.length;
                let formElements = item.map(function (subItem, subIndex) {
                    let id = this.uuid + '-element-' + index + '-' + subIndex;
                    this.state.data[subItem['name']] = subItem['defaultValue'] ? subItem['defaultValue'] : null;
                    return <div className={"col-sm-" + size}>
                        {generateFormElement(id, subItem, this.state.data[subItem['name']])}
                    </div>
                });
                return <div className={classNames}>
                    <form id={this.uuid}>
                        {rows}
                        <div className="action row">
                            <div className="col-sm-6 submit">
                                {submitElement}
                            </div>
                            <div className="col-sm-6 reset">
                                {resetElement}
                            </div>
                        </div>
                    </form>
                </div>
            })
        }
    }

}
function generateFormElement(id, rule, data) {
    if (!rule.type || rule.type === 'text' || rule.type === 'email' ||
        rule.type === 'password' || rule.type === 'number'
        || rule.type === 'hidden') {
        return <Text rule={rule} id={id} data={data}/>
    } else if (rule.type === 'radio') {

    } else if (rule.type === 'checkox') {

    } else if (rule.type === 'select') {

    } else if (rule.type === 'file') {

    }
}

class DefaultForm extends BasicForm {
    constructor(props) {
        super(props);
    }

    render() {
        return (this.renderBasic('defaultForm'));
    }
}

class InlineForm extends BasicForm {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic('inlineForm'));
    }
}

class NoLabelForm extends BasicForm {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic('noLabelForm'));
    }
}

class HorizontalForm extends BasicForm {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic('horizontalForm'));
    }
}

class BlockForm extends BasicForm {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic('blockForm'));
    }
}

BasicForm.propTypes = {
    extraClassName: React.PropTypes.string,
    rule: React.PropTypes.object,
    status: React.PropTypes.string,
    failureMsg: React.PropTypes.string,
    url: React.PropTypes.string,
    callback: React.PropTypes.func,
    initForm: React.PropTypes.func,
    confirmFormDispatch: React.PropTypes.func,
}

function mapStateToProps(state, ownProps) {
    if (state && state.form && state.form[this.symbol]) {
        const {
            rule,
            status,
            failureMsg
        } = state.form[this.symbol]
        return {rule, status, failureMsg}
    } else {
        return {};
    }
}


module.exports = {
    DefaultForm: ReactRedux.connect(mapStateToProps, {initForm, confirmFormDispatch})(DefaultForm),
    InlineForm: ReactRedux.connect(mapStateToProps, {initForm, confirmFormDispatch})(InlineForm),
    NoLabelForm: ReactRedux.connect(mapStateToProps, {initForm, confirmFormDispatch})(NoLabelForm),
    HorizontalForm: ReactRedux.connect(mapStateToProps, {initForm, confirmFormDispatch})(HorizontalForm),
    BlockForm: ReactRedux.connect(mapStateToProps, {initForm, confirmFormDispatch})(BlockForm)
};