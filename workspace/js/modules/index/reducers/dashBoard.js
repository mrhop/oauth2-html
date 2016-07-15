import * as ActionTypes from '../actions/dashBoard'

function demoTable(state = {keys: [], demoTableData: {}}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_TABLE_SUCCESS) {
        state.keys = action.response.result
        state.requestCondition = action['requestCondition'];
        state.demoTableRefresh = false;
        return l_merge({}, state, action.response.entities, {totalCount: 23})
    }
    if (action.type === ActionTypes.INDEX_DEMO_TABLE_DELETE_SUCCESS ||
        action.type === ActionTypes.INDEX_DEMO_TABLE_ADD_SUCCESS) {
        return l_merge({}, state, {demoTableRefresh: true})
    }
    return state
}

//shall do nothing ,but use the data get back from server the render,this is just the test to see the state change
//recatch data = true
function demoTableDelete(state = {}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_TABLE_DELETE_SUCCESS) {
        // do other things
        // pull(state.keys,action.key);
        // delete state.demoTableData[action.key];
        // state.totalCount = state.totalCount - 1
    }
    return state
}

function demoChartData(state = {}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_CHART_SUCCESS) {
        state.data = action.response
        state.requestCondition = action['requestCondition'];
        return l_merge({}, state)
    }
    return state  
}

export default Redux.combineReducers({demoTable, demoTableDelete, demoChartData})