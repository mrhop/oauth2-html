import * as ActionTypes from '../actions/chart'

function demoLineChartData(state = {}, action) {
    if (action.type === ActionTypes.LINE_DEMO_CHART_SUCCESS) {
        state.data = action.response
        state.requestCondition = action['requestCondition'];
        return l_merge({}, state)
    }
    return state  
}

function demoAreaChartData(state = {}, action) {
    if (action.type === ActionTypes.AREA_DEMO_CHART_SUCCESS) {
        state.data = action.response
        state.requestCondition = action['requestCondition'];
        return l_merge({}, state)
    }
    return state
}

export default Redux.combineReducers({demoLineChartData,demoAreaChartData})