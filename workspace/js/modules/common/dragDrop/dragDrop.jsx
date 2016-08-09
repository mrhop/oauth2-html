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
        var arrowMarker = defs.append("marker")
            .attr("id","arrow-marker")
            .attr("markerUnits","strokeWidth")
            .attr("markerWidth",6)
            .attr("markerHeight",6)
            .attr("viewBox","0 0 6 6")
            .attr("refX",3)
            .attr("refY",3)
            .attr("orient","auto")
        arrowMarker.append("path")
            .attr("d","M1,1 L5,3 L1,5 L3,3 L1,1")
            .style("fill", "#000")

        let workGroupData = [[
            {
                id: 1,
                name: 'role1',
                label: '角色1',
                type: 'role',
                level:'0',
                parentId: null,
                childId: [4]
            }, {
                id: 2,
                name: 'position1',
                label: '职位1',
                type: 'position',
                level:'0',
                parentId: null,
                childId: [4]
            }, {
                id: 3,
                name: 'role2',
                label: '角色2',
                type: 'role',
                level:'0',
                parentId: null,
                childId: [5]
            }
        ], [
            {
                id: 4,
                name: 'action1',
                label: '行为1',
                type: 'action',
                level:1,
                parentId: [1, 2],
                childId: [6,7]
            }, {
                id: 5,
                name: 'action2',
                label: '行为2',
                type: 'action',
                level:1,
                parentId: [3],
                childId: [6]
            }
        ], [
            {
                id: 6,
                name: 'role3',
                label: '角色3',
                type: 'role',
                level:2,
                parentId: [4, 5],
                childId: null
            }, {
                id: 7,
                name: 'role4',
                label: '角色4',
                type: 'role',
                level:2,
                parentId: [4],
                childId: null
            }
        ]]
        let sampleData = [
            {model: 'ellipse',type:'role', label: '角色'}, 
            {model: 'rect',type:'position', label: '职位'}, 
            {model: 'diamond',type:'action', label: '动作'}]
        let workGroup = new WorkGroup(this, workGroupData);
        let trashGroup = new TrashGroup(this);
        let sampleGroup = new SampleGroup(this, sampleData);
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