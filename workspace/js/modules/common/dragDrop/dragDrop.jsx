/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./dragDrop.scss');
import d3 from 'd3'
import elementResizeEvent from 'element-resize-event';
import SampleGroup from './basicGroup/sampleGroup';
import WorkGroup from './basicGroup/workGroup';
import TrashGroup from './basicGroup/trashGroup';
class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        //shall be data relate form localstorage or data from server
        this.state = {size: {w: 0, h: 0}};
    }

    fitToParentSize() {
        const w = this.refs.wrapper.offsetWidth;
        const h = this.refs.wrapper.offsetHeight;
        const currentSize = this.state.size;
        if (w !== currentSize.w || h !== currentSize.h) {
            this.setState({
                size: {w, h},
            });
        }
    }

    setTimeOutFitToParentSize() {
        clearTimeout(resizeId);
        resizeId = setTimeout(this.fitToParentSize.bind(this), 200);
    }

    componentWillMount() {
    }


    componentDidMount() {
        var el = this.refs.wrapper;
        this.d3 = {svgContainer: d3.select(el).append("svg")}
        var defs = this.d3.svgContainer.append("defs");
        var filter = defs.append("filter")
            .attr("id", "drop-shadow")
            .attr("height", "150%");
        filter.append("feGaussianBlur")
            .attr("in", "SourceAlpha")
            .attr("stdDeviation", 5)
            .attr("result", "blur");
        var feOffset = filter.append("feOffset")
            .attr("in", "blur")
            .attr("dx", 5)
            .attr("dy", 5)
            .attr("result", "offsetBlur");
        var feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode")
            .attr("in", "offsetBlur")
        feMerge.append("feMergeNode")
            .attr("in", "SourceGraphic");

        let sampleData = [{type:'circle',label:'角色'}]
        let sampleGroup = new SampleGroup(this.d3.svgContainer,sampleData);
        let workGroup = new WorkGroup(this.d3.svgContainer);
        let trashGroup = new TrashGroup(this.d3.svgContainer);
        this.d3.sampleGroup = sampleGroup;
        this.d3.workGroup = workGroup;
        this.d3.trashGroup = trashGroup;
        elementResizeEvent(this.refs.wrapper, this.fitToParentSize.bind(this));
        this.fitToParentSize()
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    componentDidUpdate() {
        this.d3.svgContainer.attr("width", this.state.size.w)
            .attr("height", this.state.size.h);
        this.d3.sampleGroup.resize(this.state.size.w, this.state.size.h);
        this.d3.workGroup.resize(this.state.size.w, this.state.size.h);
        this.d3.trashGroup.resize(this.state.size.w, this.state.size.h);
    }

    render() {
        return <div className="dragdrop-wrapper" ref="wrapper"></div>
    }
}
DragDrop.propTypes = {}

function mapStateToProps(state, ownProps) {
    return ownProps
}

module.exports = {
    DragDrop: ReactRedux.connect(mapStateToProps, {})(DragDrop),
};