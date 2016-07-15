const CALL_API = Symbol('Call API')

var toQueryString = function (obj) {
    return l_map(obj, function (v, k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(v);
    }).join('&');
};

var callApi = function (endpoint, schema, httpType, requestCondition) {
    httpType = httpType.toUpperCase();
    var fetchObj = null;
    if (httpType === 'POST' || httpType == 'PUT') {
        return fetch(endpoint, {
            method: httpType,
            body: requestCondition ? requestCondition : null
        }).then(response => response.text().then(function (text) {
                if (text) {
                    var json = JSON.parse(text);
                    return {json, response}
                } else {
                    return {response}
                }
            }
        )).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            if (json) {
                if(schema){
                    const camelizedJson = humps.camelizeKeys(json)
                    return Object.assign(
                        normalizr.normalize(camelizedJson, schema)
                    )
                }else{
                    return json
                }
            } else {
                return {};
            }
        });
    } else if (httpType === 'GET' || httpType == 'DELETE') {
        endpoint = endpoint + (requestCondition ? ('?' + toQueryString(requestCondition)) : null);
        return fetch(endpoint, {
            method: httpType
        }).then(response => response.text().then(function (text) {
                if (text) {
                    var json = JSON.parse(text);
                    return {json, response}
                } else {
                    return {response}
                }
            }
        )).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            if (json) {
                if(schema){
                    const camelizedJson = humps.camelizeKeys(json)
                    return Object.assign(
                        normalizr.normalize(camelizedJson, schema)
                    )
                }else{
                    return json
                }
            } else {
                return {};
            }
        });
    }
    return null;
}


const defaultCall = store=>
    next => action => {
        const callAPI = action[CALL_API]
        if (typeof callAPI === 'undefined') {
            return next(action)
        }
        let {endpoint} = callAPI
        const {httpType = 'post', schema, types} = callAPI
        const [ requestType, successType, failureType ] = types;
        const requestCondition = action['requestCondition'];

        function actionWith(data) {
            const finalAction = Object.assign({}, action, data)
            delete finalAction[CALL_API]
            return finalAction
        }

        next(actionWith({type: requestType}))
        return callApi(endpoint, schema, httpType, action['requestCondition']).then(
            response => next(actionWith({
                response,
                type: successType
            })),
            error => next(actionWith({
                type: failureType,
                error: error.message || 'Something bad happened'
            }))
        )
    }

module.exports = {CALL_API, defaultCall}