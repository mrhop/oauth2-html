import * as ActionTypes from '../actions/'

function leftMenuData(state = {}, action) {
    if (action.type === ActionTypes.DASHBOARD_FRAMEWORK_LEFTMENU_SUCCESS) {
        state.data = action.response
        state.requestCondition = action['requestCondition'];
        return l_merge({}, state)
    }
    if (action.type === ActionTypes.DASHBOARD_FRAMEWORK_LEFTMENU_CLICK) {
        state.currentClickDom = action['requestCondition'];
        return l_merge({}, state)
    }
    return state  
}

export default Redux.combineReducers({leftMenuData})