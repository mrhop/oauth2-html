export const LINE_DEMO_CHART_REQUEST = 'LINE_DEMO_CHART_REQUEST'
export const LINE_DEMO_CHART_SUCCESS = 'LINE_DEMO_CHART_SUCCESS'
export const LINE_DEMO_CHART_FAILURE = 'LINE_DEMO_CHART_FAILURE'
export const AREA_DEMO_CHART_REQUEST = 'AREA_DEMO_CHART_REQUEST'
export const AREA_DEMO_CHART_SUCCESS = 'AREA_DEMO_CHART_SUCCESS'
export const AREA_DEMO_CHART_FAILURE = 'AREA_DEMO_CHART_FAILURE'

function getDemoLineChart(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [LINE_DEMO_CHART_REQUEST, LINE_DEMO_CHART_SUCCESS, LINE_DEMO_CHART_FAILURE],
            endpoint: `demoData/chartData/line.json`,
        },
        requestCondition
    }
}
export function getDemoLineChartDispatch(requestCondition = {
    filters: null,
}) {
    return (dispatch, getState) => {
        return dispatch(getDemoLineChart(requestCondition))
    }
}

function getDemoAreaChart(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [AREA_DEMO_CHART_REQUEST, AREA_DEMO_CHART_SUCCESS, AREA_DEMO_CHART_FAILURE],
            endpoint: `demoData/chartData/area.json`,
        },
        requestCondition
    }
}
export function getDemoAreaChartDispatch(requestCondition = {
    filters: null,
}) {
    return (dispatch, getState) => {
        return dispatch(getDemoAreaChart(requestCondition))
    }
}