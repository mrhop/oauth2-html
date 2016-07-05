import {getIndexDemoTableDispatch} from '../../actions/dashBoard'

class TestClick extends React.Component {
    render() {
        //test router
        var route = function () {
            this.props.getIndexDemoTableDispatch()
        }
        return <button className="btn btn-primary open-toast1"
                       onClick={route.bind(this)}>open
        </button>
    }
}

TestClick.propTypes = {
    getIndexDemoTableDispatch: React.PropTypes.func.isRequired,
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default ReactRedux.connect(mapStateToProps, {
    getIndexDemoTableDispatch
})(TestClick)