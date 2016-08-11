/**
 * Created by Donghui Huo on 2016/8/10.
 */
import {VALIDATE_RULE} from '../../../common/form/actions'
export default {
    defaultWorkFlowSample: [
        {model: 'ellipse', type: 'role', label: '角色'},
        {model: 'rect', type: 'position', label: '职位'},
        {model: 'diamond', type: 'action', label: '动作'}],
    defaultPositionsFlowSample: [
        {model: 'rect', type: 'position', label: '职位'}],
    cleanWorkflowDialog: {
        content: <span>If you confirm this, the data on the workgroup will be clear</span>,
        title: 'Do you want to clear the workgroup ?',
        footerConfirmButton: {
            callback: function () {
                this.cleanWorkgroup();
            },
            title: 'Confirm',
        },
        footerCloseButton: {
            visible: true,
            title: 'Cancel',
        },
    },
    dragElementForm: {
        structure: [{
            name: 'id',
            type: 'hidden',
            defaultValue: '1',
        }, {
            name: 'relateId',
            type: 'hidden',
            defaultValue: '1',
        }, {
            name: 'role',
            label: '选择角色',
            type: 'select',
            items: [{label: 'select 1', value: 'select1'}, {label: 'select 2', value: 'select2'}],
            required: true,
            validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
        }, {
            name: 'upDown',
            items: [{value: 0, label: '下行'}, {value: 1, label: '上行'}],
            label: '上下行',
            type: 'radio',
            required: true,
            defaultValue: '0',
            validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
            //此处应该有form的触发
        }, {
            name: '说明',
            label: 'TestTextarea',
            type: 'textarea',
            rows: 3,
            placeholder: '说明',
        },],
        submit: {label: '保存'},
        reset: {label: '重置'}
    }, dragModalData: {
        title: '设置属性',
        footerCloseButton: {
            visible: false,
        }
    }, dragToastData: {
        content: <span>不能将角色和职位关联，行为和行为关联</span>,
        title: '拖拽错误'
    }

}