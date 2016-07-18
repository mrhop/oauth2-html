export const INDEX_DEMO_CHART_REQUEST = 'INDEX_DEMO_CHART_REQUEST'
export const INDEX_DEMO_CHART_SUCCESS = 'INDEX_DEMO_CHART_SUCCESS'
export const INDEX_DEMO_CHART_FAILURE = 'INDEX_DEMO_CHART_FAILURE'

function getIndexDemoChart(requestCondition) {
    return {
        [MiddleWare.CALL_API]: {
            httpType: 'get',
            types: [INDEX_DEMO_CHART_REQUEST, INDEX_DEMO_CHART_SUCCESS, INDEX_DEMO_CHART_FAILURE],
            endpoint: `demoData/chartData/line.json`,
        },
        requestCondition
    }
}
export function getIndexDemoChartDispatch(requestCondition = {
    filters: null,
}) {
    return (dispatch, getState) => {
        return dispatch(getIndexDemoChart(requestCondition))
    }
}