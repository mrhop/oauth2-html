export const FORM_INIT = 'FORM_INIT'
export const FORM_VALIDATE_FAILURE = 'FORM_VALIDATE_FAILURE'
export const FORM_POST_REQUEST = 'FORM_POST_REQUEST'
export const FORM_POST_SUCCESS = 'FORM_POST_SUCCESS'
export const FORM_POST_FAILURE = 'FORM_POST_FAILURE'

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
export function confirmFormDispatch(requestCondition = {data,formKey
}) {
    return (dispatch, getState) => {
        //getstate 根据formKey获取rule，并首先client validate data，失败后 return FORM_VALIDATE_FAILURE ,一定要把formKey传入，并更新props
        //然后如果成功了进行form confirm，然后设置成功后，调用callback在form内
        //do validate
        // getState.form[formKey].rule
        if(false){
            var validateFailureMsg = {}
            return dispatch({formKey,validateFailureMsg,type:FORM_VALIDATE_FAILURE})
        }
        return dispatch(confirmForm(requestCondition))
    }
}




export function initForm(requestCondition = {rule,formKey
}) {
    //将数据进行处理化，并关联store后映射到form component中，然后根据props进行和state的对应更新
    return (dispatch, getState) => {
        return dispatch({rule,formKey,type:FORM_INIT})
    }
}
