import {CALL_API, Schemas} from '../middleware/dashBoard'

export const INDEX_DEMO_TABLE_REQUEST = 'INDEX_DEMO_TABLE_REQUEST'
export const INDEX_DEMO_TABLE_SUCCESS = 'INDEX_DEMO_TABLE_SUCCESS'
export const INDEX_DEMO_TABLE_FAILURE = 'INDEX_DEMO_TABLE_FAILURE'

// /index  &&/ demoTable  action
function getIndexDemoTable(requestCondition) {
    return {
        [CALL_API]: {
            types: [INDEX_DEMO_TABLE_REQUEST, INDEX_DEMO_TABLE_SUCCESS, INDEX_DEMO_TABLE_FAILURE],
            schema: Schemas.DemoTable,
            endpoint: `demoData/tableData.json`,
            requestCondition
        }
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

//init the data here

