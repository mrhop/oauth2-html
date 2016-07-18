import dashBoard from './dashBoard'
import chart from './chart'
const routing = ReactRouterRedux.routerReducer;
const rootReducer = Redux.combineReducers({
    dashBoard,
    chart,
    routing
})
export default rootReducer;