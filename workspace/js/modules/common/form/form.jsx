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
        // const {structure} = this.props.initRule
        // if (this.formType === 'defaultForm' || this.formType === 'inlineForm' || this.formType === 'noLabelForm' || this.formType === 'horizontalForm') {
        //     for(var item in structure){
        //         this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
        //     }
        // } else if (this.formType === 'blockForm') {
        //     for(var item in structure){
        //         for(var subItem in item){
        //             this.state.data[subItem['name']] = subItem['defaultValue'] ? subItem['defaultValue'] : null;
        //         }
        //     }
        // }
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
            this.props.callback(nextProps.responseData);
            this.props.submitProcess.status = true
            return true;
        }
        return true;
    }

    reset(e) {
        const {structure} = this.props.initRule
        if (this.formType === 'blockForm') {
            for (var index in structure) {
                let item = structure[index]
                for (var subIndex in item) {
                    let subItem = item[subIndex]
                    this.state.data[subItem['name']] = subItem['defaultValue'] ? subItem['defaultValue'] : null;
                }
            }
        } else {
            structure.forEach(function (item) {
                this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
            }.bind(this))
        }
        this.props.initForm({rule: this.props.initRule, formKey: this.props.symbol});
        e.preventDefault()
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.props.submitProcess.status) {
            this.props.submitProcess.status = true
            this.forceUpdate();
            this.props.confirmFormDispatch({data: this.state.data, formKey: this.props.symbol, url: this.props.url});
        }
    }

    generateFormElement(id, rule, name) {
        if (!rule.type || rule.type === 'text' || rule.type === 'email' ||
            rule.type === 'password' || rule.type === 'number'
            || rule.type === 'hidden') {
            return <Text key={id} formType={this.formType} rule={rule} id={id} data={this.state.data} name={name}/>
        } else if (rule.type === 'radio') {
            return <Radio key={id} formType={this.formType} rule={rule} id={id} data={this.state.data} name={name}/>
        } else if (rule.type === 'checkbox') {
            return <Checkbox key={id} formType={this.formType} rule={rule} id={id} data={this.state.data} name={name}/>
        } else if (rule.type === 'select') {
            return <Select key={id} formType={this.formType} rule={rule} id={id} data={this.state.data} name={name}/>
        } else if (rule.type === 'file') {
            return <File key={id} formType={this.formType} rule={rule} id={id} data={this.state.data} name={name}/>
        } else if (rule.type === 'date') {

        } else if (rule.type === 'time') {

        } else if (rule.type === 'dateTime') {

        }
    }


    //formExtraClass other layout
    renderBasic() {
        let actionClasses = 'action'
        switch (this.formType) {
            case 'horizontalForm':
                actionClasses = classNames(actionClasses, 'col-sm-10')
        }
        if (this.props.rule) {
            const rule = this.props.rule;
            const {structure, submit, reset} = rule
            var formDivClasses = classNames(this.formType, this.props.extraClassName)

            var submitClasses = classNames('btn btn-primary', this.props.submitProcess.status ? 'disabled' : null);
            var submitElement = null;
            if (submit) {
                submitElement =
                    <button type="button" className={submitClasses}
                            onClick={this.handleSubmit.bind(this)}>{submit.label ? submit.label : 'Submit'}</button>;
            }
            var resetElement = null;
            if (reset) {
                resetElement =
                    <button type="button" className="btn btn-warning"
                            onClick={this.reset.bind(this)}>{reset.label ? reset.label : 'Reset'}</button>;
            }
            if (this.formType === 'defaultForm' || this.formType === 'inlineForm' || this.formType === 'noLabelForm' || this.formType === 'horizontalForm') {
                let formElements = structure.map(function (item, index) {
                    let id = this.props.symbol + '-element-' + index;
                    //this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
                    return this.generateFormElement(id, item, item['name'])
                    //this.state.data[item['name']]
                }, this)
                return <div className={formDivClasses}>
                    <form id={this.props.symbol} onSubmit={this.handleSubmit.bind(this)}>
                        {formElements}
                        <div className={actionClasses}>
                            <div className="submit">
                                {submitElement}
                            </div>
                            <div className="reset">
                                {resetElement}
                            </div>
                        </div>
                    </form>
                </div>
            } else if (this.formType === 'blockForm') {
                let rows = structure.map(function (item, index) {
                    var indexTmp;
                    var length = 0
                    for (indexTmp in item) {
                        if (!item[indexTmp].type || item[indexTmp].type !== 'hidden') {
                            length++;
                        }
                    }
                    let size = 12 / length;
                    let formElements = item.map(function (subItem, subIndex) {
                        let id = this.props.symbol + '-element-' + index + '-' + subIndex;
                        //this.state.data[subItem['name']] = subItem['defaultValue'] ? subItem['defaultValue'] : null;
                        return <div key={subIndex} className={"col col-sm-" + size}>
                            {this.generateFormElement(id, subItem, subItem['name'])}
                        </div>
                    }, this)
                    return formElements
                }, this);
                return <div className={formDivClasses}>
                    <form id={this.props.symbol}>
                        {rows}
                        <div className={actionClasses}>
                            <div className="submit">
                                {submitElement}
                            </div>
                            <div className="reset">
                                {resetElement}
                            </div>
                        </div>
                    </form>
                </div>
            }
        }
        return null;
    }
}


class DefaultForm extends BasicForm {
    constructor(props) {
        super(props);
        this.formType = 'defaultForm'
        const {structure} = this.props.initRule
        structure.forEach(function (item) {
            this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
        }.bind(this))
    }

    render() {
        return (this.renderBasic());
    }
}

class InlineForm extends BasicForm {
    constructor(props) {
        super(props);
        this.formType = 'inlineForm'
        const {structure} = this.props.initRule
        structure.forEach(function (item) {
            this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
        }.bind(this))
    }

    render() {
        return (super.renderBasic());
    }
}

class NoLabelForm extends BasicForm {
    constructor(props) {
        super(props);
        this.formType = 'noLabelForm'
        const {structure} = this.props.initRule
        structure.forEach(function (item) {
            this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
        }.bind(this))
    }

    render() {
        return (super.renderBasic());
    }
}

class HorizontalForm extends BasicForm {
    constructor(props) {
        super(props);
        this.formType = 'horizontalForm'
        const {structure} = this.props.initRule
        structure.forEach(function (item) {
            this.state.data[item['name']] = item['defaultValue'] ? item['defaultValue'] : null;
        }.bind(this))

    }

    render() {
        return (super.renderBasic());
    }
}

class BlockForm extends BasicForm {
    constructor(props) {
        super(props);
        this.formType = 'blockForm'
        const {structure} = this.props.initRule
        for (var index in structure) {
            let item = structure[index]
            for (var subIndex in item) {
                let subItem = item[subIndex]
                this.state.data[subItem['name']] = subItem['defaultValue'] ? subItem['defaultValue'] : null;
            }
        }
    }

    render() {
        return (super.renderBasic());
    }
}

BasicForm.propTypes = {
    type: React.PropTypes.string,
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
    submitProcess: React.PropTypes.object
}
BasicForm.defaultProps = {
    submitProcess: {status: false}
}


function mapStateToProps(state, ownProps) {
    if (ownProps.symbol && state && state.form && state.form.main[ownProps.symbol]) {
        const {
            rule,
            status,
            failureMsg,
            responseData
        } = state.form.main[ownProps.symbol]
        return {rule, status, failureMsg, responseData, submitProcess: {status: false}}
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