import {DragDrop} from '../../../common/dragDrop/dragDrop.jsx'
export class DefaultDragDropWrapper extends React.Component {

    render() {
        return <div><DragDrop symbol={"test_default_flow"} type={"actions"}
                              initUrl={"demoData/dragDrop/workGroupSample.json"}
                              rolesUrl={"demoData/dragDrop/roles.json"}
                              positionsUrl={"demoData/dragDrop/positions.json"}/></div>
    }
}

