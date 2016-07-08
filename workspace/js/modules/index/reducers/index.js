import dashBoard from './dashBoard'
const routing = ReactRouterRedux.routerReducer;
const rootReducer = Redux.combineReducers({
    dashBoard,
    routing
})
export default rootReducer;