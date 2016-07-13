import * as Index from '../containers'
import DashBoardContainer from '../../include/dashBoard/dashBoard.jsx'

export default [
        //<ReactRouter.IndexRoute component={Index.dashBoard} />
        <ReactRouter.Route path="/" component={DashBoardContainer}>
                <ReactRouter.IndexRoute component={Index.dashBoard} />
        </ReactRouter.Route>,
        <ReactRouter.Route path="(**)/" component={DashBoardContainer}>
                <ReactRouter.IndexRoute component={Index.dashBoard} />
        </ReactRouter.Route>,
        <ReactRouter.Route path="/index.html" component={DashBoardContainer}>
                <ReactRouter.IndexRoute component={Index.dashBoard} />
        </ReactRouter.Route>,
        <ReactRouter.Route path="(**)/index.html" component={DashBoardContainer}>
                <ReactRouter.IndexRoute component={Index.dashBoard} />
        </ReactRouter.Route>
]

