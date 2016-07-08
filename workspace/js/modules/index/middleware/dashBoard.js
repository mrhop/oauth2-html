export const CALL_API = Symbol('Call API')
import {map} from 'lodash';
const toQueryString = function (obj) {
    return map(obj, function (v, k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(v);
    }).join('&');
};
//index demo table----------------------------------------------------------------------------

//--schema
const demoTableRowSchema = new normalizr.Schema('demoTableData', {
    idAttribute: rowData => rowData.key
})
export const Schemas = {
    DemoTableRow: demoTableRowSchema,
    DemoTable: normalizr.arrayOf(demoTableRowSchema)
}
//--DEMOtABLE STRUCTURE
export const demoTableRules = {
    thead: [{
        className: 'td-id',
        title: '#',
        value: 'serialNum',
        sort: 'asc',
        filter: false
    }, {
        title: 'First Name',
        value: 'firstName',
        filter: true,
        editable: true,
        addable: true,
        editType: 'select',
        columnEditable: true,
        editValue: [{label: 'select 1', value: 'Mark'}, {label: 'select 2', value: 'Mark1'}]
    }, {
        title: 'Last Name', value: 'lastName', filter: true, editable: true, addable: true, columnEditable: true,
        editType: 'radio', editValue: [{label: 'type 1', value: 'Otto'}, {label: 'type 2', value: 'Otto1'}]
    }, {
        title: 'Username',
        value: 'username',
        filter: true,
        editable: true,
        addable: true,
        columnEditable: true,//single column edit
        editType: 'text'
    }, {
        title: 'Email',
        value: 'email',
        columnEditable: true,
        editable: true,
        editType: 'text',
        addable: true,
        filter: true
    }, {
        title: 'Age',
        value: 'age',
        filter: true,
        editable: true,
        addable: true,
        editType: 'checkbox',
        columnEditable: true,
        editValue: [{label: '31', value: '31'}, {label: '32', value: '32'}]
    }],
    tfoot: [{
        className: 'td-foot',
        colSpan: 7,
        title: 'this is the footer for this table'
    }]
};
export const rowEditableAdditionalFeature = {
    extraClass: 'hover',
    sortAvailable: true,
    filterAvailable: true,
    pager: {
        show: true,
        rowSize: {
            show: true
        }
    }
};

function callApi(endpoint, schema, httpType, requestCondition) {
    httpType = httpType.toUpperCase();
    var fetchObj = null;
    if (httpType === 'POST' || httpType == 'PUT') {
        fetchObj = fetch(endpoint, {
            method: httpType,
            body: requestCondition
        });
    } else if (httpType === 'GET' || httpType == 'DELETE') {
        endpoint = endpoint + requestCondition ? '?' + toQueryString(requestCondition) : null;
        fetchObj = fetch(endpoint, {
            method: httpType
        });
    }
    if (fetchObj) {
        fetchObj.then(response =>
            response.json().then(json => ({json, response}))
        ).then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            const camelizedJson = humps.camelizeKeys(json)
            return Object.assign(
                normalizr.normalize(camelizedJson, schema)
            )
        })
    }
    return null;
}


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }
    let {endpoint} = callAPI
    const {httpType = 'post', schema, types, requestCondition = null} = callAPI
    const [ requestType, successType, failureType ] = types;

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }
    next(actionWith({type: requestType}))
    return callApi(endpoint, schema, httpType, requestCondition).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    )
} ;

