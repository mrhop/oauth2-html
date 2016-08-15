/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./dragDrop.scss');
import elementResizeEvent from 'element-resize-event';
import dragDropRules from './structure'

import {
    initWorkflowDispatch,
    getRolesDispatch,
    getPositionsDispatch,
    saveWorkflowDispatch,
    cleanWorkgroup,
    showElementFrom,
    hideElementFrom,
    afterSaveElement,
    deleteElement,
    createBasicSvg,
    resizeSvg
} from './actions'
class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        //shall be data relate form localstorage or data from server
        this.state = {size: {w: 0, h: 0}, anonymousId: 0};
        dragDropRules.dragModalData.closeFun = this.hideElementFrom.bind(this);
    }

    componentWillMount() {
    }

//点击和拖拽的是不一样的，拖拽的时候可以全部选择，但是只能选level0，拖拽在其中一个上时，标明是其的下行，也是全部可选的
//点击则可以选择其上行和下行的element，但是action上下行时用checkbox来多选，而职位和角色上下行时使用select，标明只能单选行为
    componentDidMount() {
        createBasicSvg(this, this.props.type)
        elementResizeEvent(this.refs.wrapper, this.fitToParentSize.bind(this));
        //init data
        this.props.initWorkflowDispatch({url: this.props.initUrl, symbol: this.props.symbol})
        this.props.getRolesDispatch({url: this.props.rolesUrl, symbol: this.props.symbol})
        this.props.getPositionsDispatch({url: this.props.positionsUrl, symbol: this.props.symbol})
        this.fitToParentSize()
    }

    componentDidUpdate() {
        resizeSvg(this)
    }

    render() {
        var dragdropDivClasses = classNames("dragdrop-wrapper", this.props.type, this.props.extraClassName)
        var addElementFormSymbol = 'form-' + 'work-flow-drag-drop-default'
        return <div className={dragdropDivClasses} ref="wrapper">
            {this.props.dragModalData && <Modal.MessageDefaultModal modalValues={this.props.dragModalData}
                                                                    alertVisible={this.props.addFormVisible}>
                <Form.HorizontalForm url={this.saveElementFrom.bind(this)} initRule={this.props.dragElementForm}
                                     symbol={addElementFormSymbol}/>
            </Modal.MessageDefaultModal>}
        </div>
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

    //清空工作区
    cleanWorkgroup() {
        this.props.cleanWorkgroup({symbol: this.props.symbol})
    }

    //show form
    showElementFrom(dataObj = {operationType, data, dataRelated, dataUp, dataDown}) {
        dataObj.dataLevel = this.props.workData[dataObj.data.level]
        this.props.showElementFrom({_this: this, symbol: this.props.symbol, dataObj});
    }

    //hide form
    hideElementFrom() {
        this.props.hideElementFrom({symbol: this.props.symbol});
        return true;
    }

    //saveElementFrom
    saveElementFrom(requestCondition) {
        //do something with requestCondition.data
        var data = requestCondition.data
        if (data) {
            if (data.type == "position") {
                for (var i = 0; i < this.props.positions.length; i++) {
                    var item = this.props.positions[i]
                    if (item.value == data.elementId) {
                        data.label = item.label
                    }
                }
            }
            if (data.type == "role") {
                for (var i = 0; i < this.props.roles.length; i++) {
                    var item = this.props.roles[i]
                    if (item.value == data.elementId) {
                        data.label = item.label
                    }
                }
            }
        }
        this.props.afterSaveElement({symbol: this.props.symbol,data})
    }
}
DragDrop.propTypes = {
    symbol: React.PropTypes.any.isRequired,
    type: React.PropTypes.string,
    extraClassName: React.PropTypes.string,
    workData: React.PropTypes.array,
    roles: React.PropTypes.array,
    positions: React.PropTypes.array,
    initUrl: React.PropTypes.string,
    saveUrl: React.PropTypes.string,
    rolesUrl: React.PropTypes.string,
    positionsUrl: React.PropTypes.string,
    dragElementForm: React.PropTypes.object,
    dragModalData: React.PropTypes.object,
    initWorkflowDispatch: React.PropTypes.func,
    getRolesDispatch: React.PropTypes.func,
    getPositionsDispatch: React.PropTypes.func,
    saveWorkflowDispatch: React.PropTypes.func,
    cleanWorkgroup: React.PropTypes.func,
    showElementFrom: React.PropTypes.func,
    hideElementFrom: React.PropTypes.func,
    afterSaveElement: React.PropTypes.func,
    deleteElement: React.PropTypes.func,
}

function mapStateToProps(state, ownProps) {
    if (ownProps.symbol && state && state.dragDrop && state.dragDrop.main[ownProps.symbol]) {
        const {
            data,
            flowId,
            flowName,
            roles,
            positions,
            addFormVisible,
            dragElementForm,
            dragModalData
        } = state.dragDrop.main[ownProps.symbol]
        return {
            workData: data,
            flowId, flowName,
            roles, positions,
            addFormVisible,
            dragElementForm,
            dragModalData
        }
    } else {
        return {};
    }
}

module.exports = {
    DragDrop: ReactRedux.connect(mapStateToProps, {
            initWorkflowDispatch,
            getRolesDispatch,
            getPositionsDispatch,
            saveWorkflowDispatch,
            cleanWorkgroup,
            showElementFrom,
            hideElementFrom,
            afterSaveElement,
            deleteElement
        }
    )(DragDrop)
}
;