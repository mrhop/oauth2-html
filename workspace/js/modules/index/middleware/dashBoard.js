export const CALL_API = Symbol('Call API')

//index demo table----------------------------------------------------------------------------

//--schema
const demoTableRowSchema = new normalizr.Schema('demoTableRow', {
    idAttribute: rowData => rowData.key.toLowerCase()
})
export const Schemas = {
    DemoTableRow: demoTableRowSchema,
    DemoTable: normalizr.arrayOf(demoTableRowSchema)
}


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }
    const { schema, types } = callAPI
    const [ requestType, successType, failureType ] = types;
    next(actionWith({ type: requestType }))
    function actionWith(data) {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }
    next(actionWith({type: successType, name: 'test'}))
} ;

