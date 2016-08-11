import d3 from 'd3'
import dragDropRules from '../structure'
import SampleGroup from '../basicGroup/sampleGroup';
import WorkGroup from '../basicGroup/workGroup';
import TrashGroup from '../basicGroup/trashGroup';
import {VALIDATE_RULE} from '../../../common/form/actions'


export const INIT_WORK_FLOW_REQUEST = 'INIT_WORK_FLOW_REQUEST'
export const INIT_WORK_FLOW_SUCCESS = 'INIT_WORK_FLOW_SUCCESS'
export const INIT_WORK_FLOW_FAILURE = 'INIT_WORK_FLOW_FAILURE'

export const ROLES_GET_REQUEST = 'ROLES_GET_REQUEST'
export const ROLES_GET_SUCCESS = 'ROLES_GET_SUCCESS'
export const ROLES_GET_FAILURE = 'ROLES_GET_FAILURE'

export const POSITIONS_GET_REQUEST = 'POSITIONS_GET_REQUEST'
export const POSITIONS_GET_SUCCESS = 'POSITIONS_GET_SUCCESS'
export const POSITIONS_GET_FAILURE = 'POSITIONS_GET_FAILURE'

export const SAVE_WORK_FLOW_REQUEST = 'SAVE_WORK_FLOW_REQUEST'
export const SAVE_WORK_FLOW_SUCCESS = 'SAVE_WORK_FLOW_SUCCESS'
export const SAVE_WORK_FLOW_FAILURE = 'SAVE_WORK_FLOW_FAILURE'
export const AFTER_SAVE_WORK_FLOW_SUCCESS = 'AFTER_SAVE_WORK_FLOW_SUCCESS'

//清空工作流模板
export const CLEAN_WORK_GROUP = 'CLEAN_WORK_GROUP'
//显示新建或者需修改的单个元素的form modal
export const SHOW_ELEMENT_FORM = 'SHOW_ELEMENT_FORM'
export const HIDE_ELEMENT_FORM = 'HIDE_ELEMENT_FORM'
//删除单个元素，同时删除单独关联元素
export const DELETE_ELEMENT = 'DELETE_ELEMENT'


//init flow
function initWorkflow(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [INIT_WORK_FLOW_REQUEST, INIT_WORK_FLOW_SUCCESS, INIT_WORK_FLOW_FAILURE],
            endpoint: requestCondition.url,
        },
        requestCondition
    }
}
export function initWorkflowDispatch(requestCondition) {
    if (requestCondition.url) {
        return (dispatch, getState) => {
            return dispatch(initWorkflow(requestCondition))
        }
    } else {
        if (window.localStorage && window.localStorage["work_flow"] && window.localStorage["work_flow"][requestCondition.symbol]) {
            return (dispatch, getState) => {
                return dispatch({
                    type: INIT_WORK_FLOW_SUCCESS,
                    requestCondition: requestCondition,
                    response: window.localStorage["work_flow"][requestCondition.symbol]
                })
            }
        } else {
            return (dispatch, getState) => {
                return dispatch({
                    type: INIT_WORK_FLOW_SUCCESS,
                    requestCondition
                })
            }
        }
    }
}


//GET roles
function getRoles(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [ROLES_GET_REQUEST, ROLES_GET_SUCCESS, ROLES_GET_FAILURE],
            endpoint: requestCondition.url,
        },
        requestCondition
    }
}
export function getRolesDispatch(requestCondition) {
    return (dispatch, getState) => {
        return dispatch(getRoles(requestCondition))
    }
}

//Get positions
function getPositions(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [POSITIONS_GET_REQUEST, POSITIONS_GET_SUCCESS, POSITIONS_GET_FAILURE],
            endpoint: requestCondition.url,
        },
        requestCondition
    }
}
export function getPositionsDispatch(requestCondition) {
    return (dispatch, getState) => {
        return dispatch(getPositions(requestCondition))
    }
}

//save workflow template
function saveWorkflow(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'post',
            types: [SAVE_WORK_FLOW_REQUEST, SAVE_WORK_FLOW_SUCCESS, SAVE_WORK_FLOW_FAILURE],
            endpoint: requestCondition.url,
        },
        requestCondition
    }
}
export function saveWorkflowDispatch(requestCondition) {
    return (dispatch, getState) => {
        return dispatch(saveWorkflow(requestCondition))
    }
}
//clear workflow work group
export function cleanWorkgroup(requestCondition) {
    //firsh clear the localshorage, then reduce change the state
    if (window.localStorage && window.localStorage["work_flow::" + requestCondition.symbol]) {
        var json = JSON.parse(window.localStorage["work_flow::" + requestCondition.symbol])
        json.data = null
        window.localStorage["work_flow::" + requestCondition.symbol] = JSON.stringify(json)
    }
    return (dispatch, getState) => {
        return dispatch({type: CLEAN_WORK_GROUP, requestCondition})
    }
}

//show the new element form and
export function showElementFrom(requestCondition) {
    //base on the key,根据内容进行调整 form的内容，以及modal的标题等，并放置在requestCondition里面
    var dataObj = requestCondition.dataObj
    var data = dataObj.data
    var dataRelated = dataObj.dataRelated
    var dataUp = dataObj.dataUp
    var dataDown = dataObj.dataDown
    var dragElementForm = {
        structure: [],
        submit: {label: '保存'},
        reset: {label: '重置'}
    };
    dragElementForm.structure.push({
        name: "type",
        type: "hidden",
        defaultValue: data.type,
    })
    dragElementForm.structure.push({
        name: "level",
        type: "hidden",
        defaultValue: data.level,
    })
    dragElementForm.structure.push({
        name: "id",
        type: "hidden",
        defaultValue: data.id ? data.id : "temp_id" + this.state.anonymousId
    })
    if (!data.id) {
        this.state.anonymousId += 1;
    }
    if (dataRelated) {
        dragElementForm.structure.push({
            name: "parentId",
            type: "hidden",
            defaultValue: [dataRelated.id],
        })
    }
    dragElementForm.structure.push({
        name: "label",
        label: '名称',
        type: "text",
        placeholder: '请输入名称',
        defaultValue: data.label,
        required: true,
        validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
    })
    if (data.type == "position") {
        dragElementForm.structure.push({
            name: "elementId",
            label: '选择职位',
            type: "select",
            items: this.props.positions,
            defaultValue: data.elementId,
            required: true,
            validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
        })
    } else if (data.type == "role") {
        dragElementForm.structure.push({
            name: "elementId",
            label: '选择角色',
            type: "select",
            items: this.props.roles,
            defaultValue: data.elementId,
            required: true,
            validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
        })
    } else if (data.type == "action") {
        dragElementForm.structure.push({
            name: "elementId",
            type: "hidden",
            defaultValue: data.elementId
        })
        dragElementForm.structure.push({
            name: "action",
            label: '行为标准',
            type: "radio",
            items: dragDropRules.defaultActionChoices,
            defaultValue: data.actionRule ? data.actionRule : "single",
            required: true,
            validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
        })
    }
    if (dataUp) {
        if (type === 'role' || type === 'position' && dataUp.data) {
            dragElementForm.structure.push({
                name: "parent",
                label: '上行行为',
                type: "checkbox",
                items: dataUp.data,
                defaultValue: dataUp.defaultValue,
                required: true,
                validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
            })
        } else {
            if (dataUp.data.roles && dataUp.data.roles.length > 0) {
                dragElementForm.structure.push({
                    name: "parentRoles",
                    label: '上行角色',
                    type: "checkbox",
                    items: dataUp.data.roles,
                    defaultValue: dataUp.defaultValue.roles,
                    required: true,
                    validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
                })
            }
            if (dataUp.data.positions && dataUp.data.positions.length > 0) {
                dragElementForm.structure.push({
                    name: "parentPositions",
                    label: '上行职位',
                    type: "checkbox",
                    items: dataUp.data.positions,
                    defaultValue: dataUp.defaultValue.positions,
                    required: true,
                    validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
                })
            }
        }
    }
    if (dataDown) {
        if (type === 'role' || type === 'position' && dataDown.data) {
            dragElementForm.structure.push({
                name: "child",
                label: '下行行为',
                type: "select",
                items: dataDown.data,
                defaultValue: dataDown.defaultValue,
                required: true,
                validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
            })
        } else {
            if (dataDown.data.roles && dataDown.data.roles.length > 0) {
                dragElementForm.structure.push({
                    name: "childRoles",
                    label: '下行角色',
                    type: "checkbox",
                    items: dataDown.data.roles,
                    defaultValue: dataDown.defaultValue.roles,
                    required: true,
                    validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
                })
            }
            if (dataDown.data.positions && dataDown.data.positions.length > 0) {
                dragElementForm.structure.push({
                    name: "childPositions",
                    label: '下行职位',
                    type: "checkbox",
                    items: dataDown.data.positions,
                    defaultValue: dataDown.defaultValue.positions,
                    required: true,
                    validateRules: [{name: VALIDATE_RULE.REQUIRED_VALIDATE.name, errorMsg: '不能为空'}]
                })
            }
        }
    }
    dragElementForm.structure.push({
        name: "desc",
        label: "详细说明",
        type: "textarea",
        defaultValue: data.desc,
        placeholder: '请输入详细说明'
    })
    requestCondition.dragElementForm = dragElementForm
    requestCondition.dragModalData = dragDropRules.dragModalData
    //注意此处的数据结构要和传输的data保持一致性，所以要在commonElement部分进行data结构的解析和完善，分为多种，注意toplevel的情况处理，
    // 是否尝试在modalheadr部分加入声明title？，比如您正在添加一个角色，您正在修改一个角色，您正在将角色添加在顶部等等！！！
    return (dispatch, getState) => {
        return dispatch({type: SHOW_ELEMENT_FORM, requestCondition})
    }
}
export function hideElementFrom(requestCondition) {
    //base on the key,根据内容进行调整 form的内容，以及modal的标题等，并放置在requestCondition里面

    return (dispatch, getState) => {
        return dispatch({type: HIDE_ELEMENT_FORM, requestCondition})
    }
}

//-I think the form have been saved,shall be callback, 根据返回的data,进行新增element 的id的更新，预设temp id
export function afterSaveElement(requestCondition) {
    //base on the key
    if (window.localStorage && window.localStorage["work_flow::" + requestCondition.symbol]) {
        var data = JSON.parse(window.localStorage["work_flow::" + requestCondition.symbol]).data
        var items = data[requestCondition.level]
        if (!items) {
            items = [requestCondition]
            data.push(items)
        } else {
            items.push(requestCondition);
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
        return (dispatch, getState) => {
            return dispatch({type: AFTER_SAVE_ELEMENT, requestCondition, data})
        }
    }
    return (dispatch, getState) => {
        return dispatch({type: AFTER_SAVE_ELEMENT, requestCondition})
    }
}
//delete one single element, rebuild the data structure,because of delete the related elements
export function deleteElement(requestCondition) {
    //base on the key
    if (window.localStorage && window.localStorage["work_flow::" + requestCondition.symbol]) {
        var data = JSON.parse(window.localStorage["work_flow::" + requestCondition.symbol]).data
        var items = data[requestCondition.level]
        var item = null;
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === requestCondition.id) {
                var item = items.splice(i, 1);
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
            iterationFlowDelete(item, data, requestCondition.level + 1, itemsTemp)
            for (var i = 0; i < itemsTemp.length; i++) {
                var obj = itemsTemp[i];
                data[obi.i].splice(obi.j, 1);
            }
        }
        return (dispatch, getState) => {
            return dispatch({type: DELETE_ELEMENT, requestCondition, data})
        }
    }
    return (dispatch, getState) => {
        return dispatch({type: DELETE_ELEMENT, requestCondition})
    }
}

export function iterationFlowDelete(item, data, level, dataReturn) {
    var items = data[level]
    if (items) {
        for (var j = 0; j < items.length; j++) {
            var itemSub = items[j]
            if (itemSub.parentId && itemSub.parentId.length == 1 && itemSub.parentId.indexOf(item.id) > -1) {
                dataReturn.push({x: level, y: j})
                iterationDelete(itemSub, data, level + 1, dataReturn)
            }
        }
    }
    return dataReturn
}


export function createBasicSvg(_this, type) {
    var el = _this.refs.wrapper;
    _this.d3 = {svgContainer: d3.select(el).append("svg")}
    var defs = _this.d3.svgContainer.append("defs");
    var filter = defs.append("filter")
        .attr("id", "drop-shadow")
        .attr("height", "150%");
    filter.append("feGaussianBlur")
        .attr("in", "SourceAlpha")
        .attr("stdDeviation", 5)
        .attr("result", "blur");
    var feOffset = filter.append("feOffset")
        .attr("in", "blur")
        .attr("dx", 5)
        .attr("dy", 5)
        .attr("result", "offsetBlur");
    var feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
        .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic");
    var arrowMarker = defs.append("marker")
        .attr("id", "arrow-marker")
        .attr("markerUnits", "strokeWidth")
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("viewBox", "0 0 6 6")
        .attr("refX", 3)
        .attr("refY", 3)
        .attr("orient", "auto")
    arrowMarker.append("path")
        .attr("d", "M1,1 L5,3 L1,5 L3,3 L1,1")
        .style("fill", "#000")
    let sampleGroup =
        _this.d3.workGroup = new WorkGroup(_this);
    _this.d3.trashGroup = new TrashGroup(_this);
    _this.d3.sampleGroup = new SampleGroup(_this,
        (type && type == 'positions') ? dragDropRules.defaultPositionsFlowSample : dragDropRules.defaultWorkFlowSample);
}

export function resizeSvg(_this) {
    _this.d3.svgContainer.attr("width", _this.state.size.w)
        .attr("height", _this.state.size.h);
    _this.d3.sampleGroup.resize(_this.state.size.w, _this.state.size.h);
    _this.d3.workGroup.resize(_this.state.size.w, _this.state.size.h, _this.props.workData);
    _this.d3.trashGroup.resize(_this.state.size.w, _this.state.size.h);
}
export function cleanWorkflowDialog(_this) {
    Modal.createModal.bind(_this, {modalValues: dragDropRules.cleanWorkflowDialog, type: 'messageConfirm'})()
}
