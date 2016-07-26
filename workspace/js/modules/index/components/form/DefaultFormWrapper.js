import {DefaultForm,NoLabelForm,HorizontalForm,InlineForm,BlockForm} from '../../../common/form/form.jsx'
import {VALIDATE_RULE} from '../../../common/form/actions'
let url = 'demoData/formData/basicForm.json'
let callback = function (data) {
    console.log('the data:' + data)
}
let initRule = {
    structure: [{
        name: 'testText',
        defaultValue: 'not null',
        label:'TestText',
        type: 'text',
        placeholder: 'give some words',
        required :true,
        validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name}]
    },{
        name: 'testNum',
        defaultValue: '1',
        label:'TestNum',
        type: 'number',
        placeholder: 'shall be just number',
        required :true,
        validateRules: [{name: 'custom_validate',validateRegex:'^(-?\\d+)(\\.\\d+)?$',errorMsg:'必须为数字'}]
    },{
        name: 'testPassword',
        label:'TestPassword',
        type: 'password',
        validateRules: [{name: 'custom_validate',validateRegex:'^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]{6,15}$',errorMsg:'至少包含数字，字母以及特殊字符【!@#$%^&*】中任意两种,并在6-15字符之间'}]
    },{
        name: 'testHidden',
        type: 'hidden',
        defaultValue:'you can not see it',
    },{
        label:'TestEmail',
        name: 'testEmail',
        type: 'email',
        defaultValue: 'a@a.com',
        validateRules: [{name: 'custom_validate',validateRegex:'^([\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+)$',errorMsg:'只能为电子邮件'}]
    }],
    submit: {label: '保存'},
    reset: {label: '重置'}
}

let initBlockRule = {
    structure: [[{
        name: 'testText',
        defaultValue: 'not null',
        label:'TestText',
        type: 'text',
        placeholder: 'give some words',
        required :true,
        validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name}]
    },{
        name: 'testNum',
        defaultValue: '1',
        label:'TestNum',
        type: 'number',
        placeholder: 'shall be just number',
        required :true,
        validateRules: [{name: 'custom_validate',validateRegex:'^(-?\\d+)(\\.\\d+)?$',errorMsg:'必须为数字'}]
    },{
        name: 'testCheckbox',
        defaultValue: '1,2',
        items:[{value:1,label:'label1'},{value:2,label:'label2'}],
        label:'TestCheckBox',
        type: 'checkbox',
        required :true
    }],[{
        name: 'testPassword',
        label:'TestPassword',
        type: 'password',
        validateRules: [{name: 'custom_validate',validateRegex:'^(?![a-zA-z]+$)(?!\\d+$)(?![!@#$%^&*]+$)[a-zA-Z\\d!@#$%^&*]{6,15}$',errorMsg:'至少包含数字，字母以及特殊字符【!@#$%^&*】中任意两种,并在6-15字符之间'}]
    },{
        name: 'testHidden',
        type: 'hidden',
        defaultValue:'you can not see it',
    },{
        label:'TestEmail',
        name: 'testEmail',
        type: 'email',
        defaultValue: 'a@a.com',
        validateRules: [{name: 'custom_validate',validateRegex:'^([\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+)$',errorMsg:'只能为电子邮件'}]
    }]],
    submit: {label: '保存'},
    reset: {label: '重置'}
}
export class DefaultFormWrapper extends React.Component {

    render() {
        let extraClassName = 'test-default-form';

        let symbol = 'form-' + 'index-demo-default'
        return <DefaultForm extraClassName={extraClassName} url={url} callback={callback} initRule={initRule} symbol={symbol} />
    }
}

export class NoLabelFormWrapper extends React.Component {

    render() {
        let extraClassName = 'test-nolabel-form';
        let symbol = 'form-' + 'index-demo-nolabel'
        return <NoLabelForm extraClassName={extraClassName} url={url} callback={callback} initRule={initRule} symbol={symbol} />
    }
}
export class HorizontalFormWrapper extends React.Component {

    render() {
        let extraClassName = 'test-horizontal-form';
        let symbol = 'form-' + 'index-demo-horizontal'
        return <HorizontalForm extraClassName={extraClassName} url={url} callback={callback} initRule={initRule} symbol={symbol} />
    }
}

export class InlineFormWrapper extends React.Component {

    render() {
        let extraClassName = 'test-inline-form';
        let symbol = 'form-' + 'index-demo-inline'
        return <InlineForm extraClassName={extraClassName} url={url} callback={callback} initRule={initRule} symbol={symbol} />
    }
}

export class BlockFormWrapper extends React.Component {

    render() {
        let extraClassName = 'test-block-form';
        let symbol = 'form-' + 'index-demo-block'
        return <BlockForm extraClassName={extraClassName} url={url} callback={callback} initRule={initBlockRule} symbol={symbol} />
    }
}