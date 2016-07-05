import * as Index from '../containers'

export default [
        <ReactRouter.Route path="/" component={Index.dashBoard}>
        </ReactRouter.Route>,
        <ReactRouter.Route path="(**)/" component={Index.dashBoard}>
        </ReactRouter.Route>,
        <ReactRouter.Route path="/index.html" component={Index.dashBoard}>
        </ReactRouter.Route>,
        <ReactRouter.Route path="(**)/index.html" component={Index.dashBoard}>
        </ReactRouter.Route>
]

