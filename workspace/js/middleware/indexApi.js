import {camelizeKeys} from 'humps'
import 'isomorphic-fetch'

export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }  

    let {testStr, type} = callAPI
    console.log(testStr)
    function actionWith(data) {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }
    next(actionWith({type: type, name: 'test'}))
}
