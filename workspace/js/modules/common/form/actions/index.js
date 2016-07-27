export const FORM_INIT = 'FORM_INIT'
export const FORM_VALIDATE_FAILURE = 'FORM_VALIDATE_FAILURE'
export const FORM_POST_REQUEST = 'FORM_POST_REQUEST'
export const FORM_POST_SUCCESS = 'FORM_POST_SUCCESS'
export const FORM_POST_FAILURE = 'FORM_POST_FAILURE'

export const VALIDATE_RULE = {
    'REQUIRED_VALIDATE': {
        name: 'REQUIRED_VALIDATE',
        defaultRegex: '^\\S+(([\\S\\s]*\\S+$)|(\\S*$))',
        defaultErrorMsg: '不能为空且不能以空格开头和结尾'
    },
    'NUMBER_VALIDATE': {
        name: 'NUMBER_VALIDATE',
        defaultRegex: '^(-?\\d+)(\\.\\d+)?$',
        defaultErrorMsg: 'can only be a number'
    },
    'INT_VALIDATE': {name: 'INT_VALIDATE', defaultRegex: '^-?\\d+$', defaultErrorMsg: 'can only be an int'},
    'EMAIL_VALIDATE': {
        name: 'EMAIL_VALIDATE',
        defaultRegex: '^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$',
        defaultErrorMsg: 'not an email'
    },
}

function confirmForm(requestCondition) {

    return {
        [MiddleWare.CALL_API]: {
            httpType: 'post',
            types: [FORM_POST_REQUEST, FORM_POST_SUCCESS, FORM_POST_FAILURE],
            endpoint: requestCondition.url,
        },
        requestCondition
    }
}
export function confirmFormDispatch(requestCondition = {
    data, formKey
}) {
    return (dispatch, getState) => {
        //getstate 根据formKey获取rule，并首先client validate data，失败后 return FORM_VALIDATE_FAILURE ,一定要把formKey传入，并更新props
        //然后如果成功了进行form confirm，然后设置成功后，调用callback在form内
        //do validate
        // getState.form[formKey].rule
        var clientValidate = validateFormClient(requestCondition.data, getState().form.main[requestCondition.formKey].rule)
        if (!clientValidate.returnFlag) {
            var structure = clientValidate.structure
            return dispatch({formKey: requestCondition.formKey, structure, type: FORM_VALIDATE_FAILURE})
        }
        return dispatch(confirmForm(requestCondition))
    }
}


export function initForm(requestCondition = {
    rule, formKey
}) {
    //将数据进行处理化，并关联store后映射到form component中，然后根据props进行和state的对应更新
    return (dispatch, getState) => {
        l_assign(requestCondition, {type: FORM_INIT})
        return dispatch(requestCondition)
    }
}

function validateFormClient(data, rule) {
    const {structure} = rule
    let returnFlag = true;
    structure.forEach(function (item) {
        if (Array.isArray(item)) {
            item.forEach(function (subItem) {
                let subItemData = data[subItem.name]
                if (subItem.validateRules) {
                    var validateMsg = validateInternal(subItemData, subItem.validateRules, subItem.required)
                    if (validateMsg) {
                        l_assign(subItem, validateMsg);
                        returnFlag = false
                    }
                }
            })
        } else {
            let itemData = data[item.name]
            if (item.validateRules) {
                var validateMsg = validateInternal(itemData, item.validateRules, item.required)
                if (validateMsg) {
                    l_assign(item, validateMsg);
                    returnFlag = false
                }
            }
        }
    })
    return {structure, returnFlag}
}
function validateInternal(itemData, validateRules, required) {
    var tmpData = itemData ? itemData.replace(/(^\s*)|(\s*$)/g, "") : null;
    if (!tmpData) {
        if (!required) {
            return null
        }
        tmpData = '';
    }
    for (var index in validateRules) {
        let validateRule = validateRules[index];
        if (VALIDATE_RULE[validateRule.name] && !validateRule.validateRegex) {
            validateRule.validateRegex = VALIDATE_RULE[validateRule.name].defaultRegex;
        }
        if (typeof validateRule.validateRegex === 'string') {
            validateRule.validateRegex = new RegExp(validateRule.validateRegex);
        }
        if (VALIDATE_RULE[validateRule.name] && !validateRule.errorMsg) {
            validateRule.errorMsg = VALIDATE_RULE[validateRule.name].defaultErrorMsg;
        }
        if (!validateRule.validateRegex.test(tmpData)) {
            return {
                validated: false,
                errorMsg: validateRule.errorMsg
            }
        }
    }
    return null
}
