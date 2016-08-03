import {DragDrop} from '../../../common/dragDrop/dragDrop.jsx'
export class DefaultDragDropWrapper extends React.Component {

    render() {
        return <div ref='dragDropWrapper'><DragDrop svgWidth = {500}/></div>
    }
}

