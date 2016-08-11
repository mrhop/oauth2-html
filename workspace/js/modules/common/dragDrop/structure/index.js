/**
 * Created by Donghui Huo on 2016/8/10.
 */
export default {
    defaultWorkFlowSample: [
        {model: 'ellipse', type: 'role', label: '角色'},
        {model: 'rect', type: 'position', label: '职位'},
        {model: 'diamond', type: 'action', label: '动作'}],
    defaultPositionsFlowSample: [
        {model: 'rect', type: 'position', label: '职位'}],
    elementForm: [],
    cleanWorkflowDialog:{
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
    }

}