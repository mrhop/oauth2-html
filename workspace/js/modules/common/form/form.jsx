/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./form.scss');
import {initForm, confirmFormDispatch} from './actions'
import Text from './elements/text.jsx'
import Checkbox from './elements/checkbox.jsx'
import File from './elements/file.jsx'
import Radio from './elements/radio.jsx'
import Select from './elements/select.jsx'
class BasicForm extends React.Component {
    constructor(props) {
        super(props);
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
        this.props.initForm({rule: this.props.initRule, formKey: this.props.symbol});
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status && nextProps.status === 'serverFailure') {
            this.serverFailureModalData.content = <p>{nextProps.failureMsg}</p>
            Modal.createModal.bind(this, this.serverFailureModalData, 'messageError');
            return false;
        }
        if (nextProps.status && nextProps.status === 'success') {
            // reset the form
            this.props.initForm({rule: this.props.initRule, formKey: nextProps.symbol});
            this.props.callback(nextProps.responseData);
            return false;
        }
        return true;
    }

    reset() {
        this.props.initForm({rule: this.props.initRule, formKey: this.props.symbol});
        event.preventDefault()
    }

    submit() {
        //get data
        this.props.confirmFormDispatch({data: this.state.data, formKey: this.props.symbol});
        event.preventDefault()
    }

    //formExtraClass other layout
    renderBasic(type) {
        if (this.props.rule) {
            const rule = this.props.rule;
            const {structure, submit, reset} = rule
            var formClasses = classNames(type, this.props.extraClassName)
            var submitElement = null;
            if (submit) {
                submitElement =
                    <input type="submit" className="btn btn-primary"
                           onClick={this.submit.bind(this)} value ={submit.label ? submit.label : 'Submit'} ></input>;
            }
            var resetElement = null;
            if (reset) {
                resetElement =
                    <input type="reset" className="btn btn-warning"
                           onClick={this.reset.bind(this)} value ={reset.label ? reset.label : 'Reset'}></input>;
            }
            if (type === 'defaultForm' || type === 'inlineForm' || type === 'noLabelForm' || type === 'horizontalForm') {
                let formElements = structure.map(function (item, index) {
                    let id = this.props.symbol + '-element-' + index;
                    this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
                    return generateFormElement(id, item, this.state.data[item['name']])
                },this)
                return <div className={formClasses}>
                    <form id={this.props.symbol}>
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
                        let id = this.props.symbol + '-element-' + index + '-' + subIndex;
                        this.state.data[subItem['name']] = subItem['defaultValue'] ? subItem['defaultValue'] : null;
                        return <div key = {subIndex} className={"col-sm-" + size}>
                            {generateFormElement(id, subItem, this.state.data[subItem['name']])}
                        </div>
                    },this);
                    return <div key = {index}  className={classNames}>
                        <form id={this.props.symbol}>
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
                },this)
            }
        }
        return null;
    }
}
function generateFormElement(id, rule, data) {
    if (!rule.type || rule.type === 'text' || rule.type === 'email' ||
        rule.type === 'password' || rule.type === 'number'
        || rule.type === 'hidden') {
        return <Text key = {id} rule={rule} id={id} data={data}/>
    } else if (rule.type === 'radio') {
        return <Radio  key = {id} rule={rule} id={id} data={data}/>
    } else if (rule.type === 'checkox') {
        return <Checkbox  key = {id} rule={rule} id={id} data={data}/>
    } else if (rule.type === 'select') {
        return <Select  key = {id} rule={rule} id={id} data={data}/>
    } else if (rule.type === 'file') {
        return <File  key = {id} rule={rule} id={id} data={data}/>
    } else if (rule.type === 'date') {

    } else if (rule.type === 'time') {

    } else if (rule.type === 'dateTime') {

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
    initRule: React.PropTypes.object,
    url: React.PropTypes.string,
    callback: React.PropTypes.func,
    symbol: React.PropTypes.any,
    rule: React.PropTypes.object,
    status: React.PropTypes.string,
    failureMsg: React.PropTypes.string,
    responseData: React.PropTypes.object,
    initForm: React.PropTypes.func,
    confirmFormDispatch: React.PropTypes.func,
}

function mapStateToProps(state, ownProps) {
    if (ownProps.symbol && state && state.form && state.form.main[ownProps.symbol]) {
        const {
            rule,
            status,
            failureMsg
        } = state.form.main[ownProps.symbol]
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