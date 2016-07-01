import DevTools from './DevTools'

class Root extends React.Component {
    render() {
        const {store, history, routes} = this.props
        return (
            <ReactRedux.Provider store={store}>
                <div style={{height : "100%"}}>
                    <ReactRouter.Router history={history} routes={routes}/>
                    <DevTools />
                </div>
            </ReactRedux.Provider>
        )
    }
}

Root.propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.any.isRequired
}

module.exports = Root
