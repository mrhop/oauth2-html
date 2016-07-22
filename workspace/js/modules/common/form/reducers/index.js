import * as ActionTypes from '../actions'



function main(state = {}, action) {
    if (action.type === ActionTypes.FORM_INIT) {
        //from 初始化时设置，判断id是否存在
        state[action.formKey] = {}
        state[action.formKey].rule = action.rule
        state[action.formKey].status = 'init';
        return state
    }
    if (action.type === ActionTypes.FORM_VALIDATE_FAILURE) {
        state[action.formKey].rule.structure = action.structure
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.FORM_POST_SUCCESS) {
        let rule = state[action.formKey].rule
        //将action.response和 validateFailureMsg 合并,并返回;
        state[action.formKey].status = action.response.status;
        if(action.response.failureMsg){
            state[action.formKey].failureMsg = action.response.failureMsg;
        }
        if(action.response.responseData){
            state[action.formKey].responseData = action.response.responseData;

        }
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

export default Redux.combineReducers({main})