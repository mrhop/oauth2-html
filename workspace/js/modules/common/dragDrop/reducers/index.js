import * as ActionTypes from '../actions'


function main(state = {}, action) {
    if (action.type === ActionTypes.INIT_WORK_FLOW_SUCCESS) {
        //INIT env
        if (action.response) {
            state[action.requestCondition.symbol] = {
                data: action.response.data,
                flowId: action.response.flowId,
                flowName: action.response.flowName
            }
            if (action.requestCondition.url) {
                if (window.localStorage) {
                    window.localStorage["work_flow::" + action.requestCondition.symbol] = JSON.stringify(action.response)
                }
            }
        }
        return l_merge({}, state)
    }
    if (action.type === ActionTypes.ROLES_GET_SUCCESS) {
        //get need rows
        if (action.response.responseData) {
            state[action.requestCondition.symbol].roles = action.response.responseData;
        }
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.POSITIONS_GET_SUCCESS) {
        //get need rows
        if (action.response.responseData) {
            state[action.requestCondition.symbol].positions = action.response.responseData;
        }
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.SAVE_WORK_FLOW_REQUEST) {

        if (action.requestCondition.flowName) {
            state[action.requestCondition.symbol].flowName = action.requestCondition.flowName
            return l_merge({}, state)
        }
        return state
    }

    if (action.type === ActionTypes.SAVE_WORK_FLOW_SUCCESS) {

        if (action.response.responseData && action.response.responseData.flowId) {
            state[action.requestCondition.symbol].flowId = action.response.responseData.flowId
            return l_merge({}, state)
        }
        return state
    }


    if (action.type === ActionTypes.CLEAN_WORK_GROUP) {
        state[action.requestCondition.symbol].data = null;
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.SHOW_ELEMENT_FORM) {
        state[action.requestCondition.symbol]["elementForm"] = {
            formStructure: action.requestCondition.formStructure,
            visible: true
        };
        return l_merge({}, state)
    }
    if (action.type === ActionTypes.AFTER_SAVE_ELEMENT) {
        if (action.data) {
            state[action.requestCondition.symbol].data = action.data
        } else {
            var data = state[action.requestCondition.symbol].data
            var items = data[action.requestCondition.level]
            if (!items) {
                items = [action.requestCondition]
                data.push(items)
            } else {
                items.push(action.requestCondition);
            }
        }
        return l_merge({}, state)
    }

    if (action.type === ActionTypes.AFTER_SAVE_ELEMENT) {
        if (action.data) {
            state[action.requestCondition.symbol].data = action.data
        } else {
            var data = state[action.requestCondition.symbol].data;
            var items = data[action.requestCondition.level]
            if (!items) {
                items = [action.requestCondition]
                data.push(items)
            } else {
                items.push(action.requestCondition);
            }
            if (requestCondition.parentId && data[requestCondition.level - 1]) {
                items = data[requestCondition.level - 1]
                for (var i = 0; i < items.length; i++) {
                    if (requestCondition.parentId.indexOf(items[i].id) > -1) {
                        var childId = items[i].childId;
                        if (!childId) {
                            items[i].childId = [requestCondition.id];
                        } else if (childId && childId.indexOf(requestCondition.id) < 0) {
                            items[i].childId.push(requestCondition.id)
                        }
                    }
                }
            }
            if (requestCondition.parentId && data[requestCondition.level + 1]) {
                items = data[requestCondition.level + 1]
                for (var i = 0; i < items.length; i++) {
                    if (requestCondition.childId.indexOf(items[i].id) > -1) {
                        var parentId = items[i].parentId;
                        if (!parentId) {
                            items[i].parentId = [requestCondition.id];
                        } else if (parentId && parentId.indexOf(requestCondition.id) < 0) {
                            items[i].parentId.push(requestCondition.id)
                        }
                    }
                }
            }
        }
        return l_merge({}, state)
    }
    if (action.type === ActionTypes.DELETE_ELEMENT) {
        if (action.data) {
            state[action.requestCondition.symbol].data = action.data
        } else {
            var data = state[action.requestCondition.symbol].data
            var items = data[requestCondition.level]
            var item = null;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === requestCondition.id) {
                    item = items.splice(i, 1);
                    // base on the item find the children-->sub children delete, find the parent and release the connection!!!
                    break
                }
            }
            if (item) {
                items = data[requestCondition.level - 1]
                if (items && item.parentId) {
                    for (var i = 0; i < items.length; i++) {
                        var itemSub = items[i]
                        if (item.parentId.indexOf(itemSub.id) > -1) {
                            if (itemSub.childId) {
                                itemSub.childId.splice(itemSub.childId.indexOf(item.id), 1);
                            }
                        }
                    }
                }
                var itemsTemp = [];
                ActionTypes.iterationFlowDelete(item, data, requestCondition.level + 1, itemsTemp)
                for (var i = 0; i < itemsTemp.length; i++) {
                    var obj = itemsTemp[i];
                    data[obi.i].splice(obi.j, 1);
                }
            }
        }
        return l_merge({}, state)
    }
    return state
}

export default Redux.combineReducers({main})