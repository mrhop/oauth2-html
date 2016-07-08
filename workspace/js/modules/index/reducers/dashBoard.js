import merge from 'lodash/merge'
import * as ActionTypes from '../actions/dashBoard'

function example(state = {}, action) {
    return state
}

function demoTable(state = {keys: [], demoTableData: {}}, action) {
    if (action.type === ActionTypes.INDEX_DEMO_TABLE_SUCCESS) {
        state.keys = action.response.result
        return merge({}, state, action.response.entities, {totalCount: action.response.totalCount})
    }
    return state
}

export default Redux.combineReducers({example, demoTable})