class LineTooltipChart extends React.Component {

    componentWillMount() {
        //this.props.getIndexDemoTableDispatch({})
    }

    render() {
        return this.props.data ? <ResponsiveCharts.ResponsiveLineChart
            legend={true}
            data={this.props.data}
            yAxisLabel="Altitude"
            xAxisLabel="Elapsed Time (sec)"
            domain={{x: [,6], y: [-10,]}}
            gridHorizontal={true}  
        /> : null;
    }
}

LineTooltipChart.propTypes = {
    data: React.PropTypes.array,
}

function mapStateToProps(state, ownProps) {
    if (state && state.dashBoard && state.dashBoard.demoChartData) {
        const {
            data
        } = state.dashBoard.demoChartData
        return {data}
    } else {
        return {};
    }
}


export default ReactRedux.connect(mapStateToProps, {})(LineTooltipChart)