import merge from 'lodash/merge'
import * as ActionTypes from '../actions/dashBoard'
import {pull} from 'lodash'

function demoTable(state = {keys: [], demoTableData: {}}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_TABLE_SUCCESS) {
        state.keys = action.response.result
        return merge({}, state, action.response.entities, {totalCount: 23})
    }
    return state
}

//shall do nothing ,but use the data get back from server the render,this is just the test to see the state change
function demoTableDelete(state = {}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_TABLE_DELETE_SUCCESS) {
        pull(state.keys,action.key);
        delete state.demoTableData[key];
        state.totalCount = state.totalCount - 1
    }
    return state
}

export default Redux.combineReducers({demoTable,demoTableDelete})