import {Schemas} from '../middleware/dashBoard'

export const INDEX_DEMO_TABLE_REQUEST = 'INDEX_DEMO_TABLE_REQUEST'
export const INDEX_DEMO_TABLE_SUCCESS = 'INDEX_DEMO_TABLE_SUCCESS'
export const INDEX_DEMO_TABLE_FAILURE = 'INDEX_DEMO_TABLE_FAILURE'

export const INDEX_DEMO_TABLE_DELETE_REQUEST = 'INDEX_DEMO_TABLE_DELETE_REQUEST'
export const INDEX_DEMO_TABLE_DELETE_SUCCESS = 'INDEX_DEMO_TABLE_DELETE_SUCCESS'
export const INDEX_DEMO_TABLE_DELETE_FAILURE = 'INDEX_DEMO_TABLE_DELETE_FAILURE'


export const INDEX_DEMO_TABLE_RE_REQUEST = 'INDEX_DEMO_TABLE_RE_REQUEST'
export const INDEX_DEMO_TABLE_RE_SUCCESS = 'INDEX_DEMO_TABLE_RE_SUCCESS'
export const INDEX_DEMO_TABLE_RE_FAILURE = 'INDEX_DEMO_TABLE_RE_FAILURE'

// /index  &&/ demoTable  action
function getIndexDemoTable(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [INDEX_DEMO_TABLE_REQUEST, INDEX_DEMO_TABLE_SUCCESS, INDEX_DEMO_TABLE_FAILURE],
            schema: Schemas.DemoTable,
            endpoint: `demoData/tableData.json`,
        },
        requestCondition
    }
}
export function getIndexDemoTableDispatch(requestCondition = {
    filters: null,
    sort: null,
    rowSize: null,
    currentPage: 0
}) {
    return (dispatch, getState) => {
        const totalCount = getState().dashBoard.demoTable.totalCount;
        if (totalCount && totalCount > 0) {
            return null
        }
        return dispatch(getIndexDemoTable(requestCondition))
    }
}
function deleteDemoTable(requestCondition = {key: null}) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'delete',
            types: [INDEX_DEMO_TABLE_DELETE_REQUEST, INDEX_DEMO_TABLE_DELETE_SUCCESS, INDEX_DEMO_TABLE_DELETE_FAILURE],
            schema: Schemas.DemoTable,
            endpoint: `demoData/deleteData.json`,
        },
        requestCondition
    }
}
export function deleteDemoTableDispatch(requestCondition = {key: null}) {
    return (dispatch, getState) => {
        return dispatch(deleteDemoTable(requestCondition))
    }
}

//refresh
export function refreshDemoTableDispatch() {
    return (dispatch, getState) => {
        const {
            requestCondition
        } = getState().dashBoard.demoTable
        return dispatch(getIndexDemoTable(requestCondition))
    }
}

