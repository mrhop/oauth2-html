import * as ActionTypes from '../actions/chart'

function demoChartData(state = {}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_CHART_SUCCESS) {
        state.data = action.response
        state.requestCondition = action['requestCondition'];
        return l_merge({}, state)
    }
    return state  
}

export default Redux.combineReducers({demoChartData})