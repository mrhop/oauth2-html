export const DASHBOARD_FRAMEWORK_LEFTMENU_REQUEST = 'DASHBOARD_FRAMEWORK_LEFTMENU_REQUEST'
export const DASHBOARD_FRAMEWORK_LEFTMENU_SUCCESS = 'DASHBOARD_FRAMEWORK_LEFTMENU_SUCCESS'
export const DASHBOARD_FRAMEWORK_LEFTMENU_FAILURE = 'DASHBOARD_FRAMEWORK_LEFTMENU_FAILURE'
export const DASHBOARD_FRAMEWORK_LEFTMENU_CLICK = 'DASHBOARD_FRAMEWORK_LEFTMENU_CLICK'


// /index  &&/ demoTable  action
function getLeftMenu(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [DASHBOARD_FRAMEWORK_LEFTMENU_REQUEST, DASHBOARD_FRAMEWORK_LEFTMENU_SUCCESS, DASHBOARD_FRAMEWORK_LEFTMENU_FAILURE],
            endpoint: `demoData/dashboardFramework/leftmenu.json`,
        },
        requestCondition
    }
}
export function getLeftMenuDispatch(requestCondition) {
    return (dispatch, getState) => {
        return dispatch(getLeftMenu(requestCondition))
    }
}

export function leftMenuClick(requestCondition) {
    return (dispatch, getState) => {
        return dispatch({requestCondition,type:DASHBOARD_FRAMEWORK_LEFTMENU_CLICK})
    }
}