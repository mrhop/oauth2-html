function index(state = {}, action) {
    return state
}
const routing = ReactRouterRedux.routerReducer;
const rootReducer = Redux.combineReducers({
    index,
    routing
})


export default rootReducer; 