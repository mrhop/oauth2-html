/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {cleanWorkflowDialog} from "../actions"
const cleanWorkgroup = {
    content: <span>If you confirm this, the data on the workgroup will be clear</span>,
    title: 'Do you want to clear the workgroup ?',
    footerConfirmButton: {
        callback: function () {
            this.cleanWorkgroup();
        },
        title: 'Confirm',
    },
    footerCloseButton: {
        visible: true,
        title: 'Cancel',
    },
};
export default class TrashGroup {
    constructor(parent) {
        this.parent = parent;
        this.svgContainer =  this.parent.d3.svgContainer;
        this.trashGroup = this.svgContainer.append("g")
            .attr("class", "trash-group");
        this.baseText = this.trashGroup.append("text")
            .attr("class", "trash-base-text")
            .text(function (d) {
                return '\ue910'
            }).on("click",cleanWorkflowDialog.bind(this,this.parent))
    }

    resize(containerWidth, containerHeight) {
        this.trashGroup
            .attr("transform", "translate(" + (containerWidth - 100) + "," + (containerHeight - 50) + ")")
        this.baseText
            .attr("x", 45)
            .attr("y", 30)
    }
}