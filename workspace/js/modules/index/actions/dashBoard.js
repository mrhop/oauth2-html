import { CALL_API, Schemas } from '../middleware/dashBoard'

export const INDEX_DEMO_TABLE_REQUEST = 'INDEX_DEMO_TABLE_REQUEST'
export const INDEX_DEMO_TABLE_SUCCESS = 'INDEX_DEMO_TABLE_SUCCESS'
export const INDEX_DEMO_TABLE_FAILURE = 'INDEX_DEMO_TABLE_FAILURE'

// /index  &&/ demoTable  action
function getIndexDemoTable() {
  return {
    [CALL_API]: {
      types: [ INDEX_DEMO_TABLE_REQUEST, INDEX_DEMO_TABLE_SUCCESS, INDEX_DEMO_TABLE_FAILURE ],
      schema: Schemas.DemoTable
    }
  }
}
export function getIndexDemoTableDispatch(){
  return (dispatch, getState) => {
      return dispatch(getIndexDemoTable())
  }
}

