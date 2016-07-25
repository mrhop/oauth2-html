import {DefaultForm} from '../../../common/form/form.jsx'
import {VALIDATE_RULE} from '../../../common/form/actions'
export default class DefaultFormWrapper extends React.Component {

    render() {
        let extraClassName = 'test-default-form';
        let url = 'demoData/formData/basicForm.json'
        let callback = function (data) {
            console.log('the data:' + data)
        }
        let initRule = {
            structure: [{
                name: 'testText',
                defaultValue: 'my choice',
                label:'Test',
                type: 'text',
                placeholder: 'shall be just test',
                validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name}]
            }],
            submit: {label: '保存'},
            reset: {label: '重置'}
        }
        let symbol = 'form-' + 'index-demo-default'
        return <DefaultForm extraClassName={extraClassName} url={url} callback={callback} initRule={initRule} symbol={symbol} />
    }
}   