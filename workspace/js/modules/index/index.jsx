/**
 * Created by Donghui Huo on 2016/5/11.
 */
import rootReducer from './reducers/reducers'
import routes from './routes/routes'
import api from '../../middleware/indexApi'



const store = ConfigureStore.configureStore({reducer:rootReducer,middleware:api});
const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, store)

ReactDOM.render(
     <RootContainer store={store} history={history} routes={routes}/>,
    document.querySelector('#entirety')    
)
