import * as ActionTypes from '../actions'



function form(state = {}, action) {
    if (action.type === ActionTypes.FORM_INIT) {
        //from 初始化时设置，判断id是否存在

        state[action.formKey] = {}
        state[action.formKey].rule = action.rule
        state[action.formKey].status = 'init';

        return l_merge({}, state)
    }
    if (action.type === ActionTypes.FORM_VALIDATE_FAILURE) {
        //from 初始化时设置，判断id是否存在
        let rule = state[action.formKey].rule
        let validateFailureMsg =  action.validateFailureMsg
        state[action.formKey].status = 'failure';
        //将state rule和 validateFailureMsg 合并,并返回
        state[action.formKey].rule = rule;
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.FORM_POST_SUCCESS) {
        let rule = state[action.formKey].rule
        //将action.response和 validateFailureMsg 合并,并返回;
        state[action.formKey].status = action.response.status;

        state[action.formKey].rule = rule;
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.FORM_POST_FAILURE) {
        state[action.formKey].status = 'serverFailure';
        state[action.formKey].failureMsg = action.error;
        return l_merge({}, state)
    }
    return state
}

export default Redux.combineReducers({confirmForm})