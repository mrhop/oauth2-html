import dashBoardFramework from '../../include/dashBoard/reducers'
import dashBoard from './dashBoard'
import table from './table'
import chart from './chart'
const routing = ReactRouterRedux.routerReducer;
const rootReducer = Redux.combineReducers({
    dashBoardFramework,
    dashBoard,
    table,
    chart,
    routing
})
export default rootReducer;