import * as Index from '../containers'
import DashBoardContainer from '../../include/dashBoard/dashBoard.jsx'

export default [
        //<ReactRouter.IndexRoute component={Index.dashBoard} />
        <ReactRouter.Route path="/(index.html)" component={DashBoardContainer}>
                <ReactRouter.IndexRoute component={Index.dashBoard} />
                <ReactRouter.Route path="dashboard" component={Index.dashBoard} />
                <ReactRouter.Route path="table" component={Index.table} />
                <ReactRouter.Route path="chart" component={Index.chart} />
        </ReactRouter.Route>,
        <ReactRouter.Route path="(**)/(index.html)" component={DashBoardContainer}>
                <ReactRouter.IndexRoute component={Index.dashBoard} />
                <ReactRouter.Route path="dashboard" component={Index.dashBoard} />
                <ReactRouter.Route path="table" component={Index.table} />
                <ReactRouter.Route path="chart" component={Index.chart} />
        </ReactRouter.Route>
]

