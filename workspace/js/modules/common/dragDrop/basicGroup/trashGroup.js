/**
 * Created by Donghui Huo on 2016/5/13.
 */
const clearWorkgroup = {
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
    constructor(svgContainer, data) {
        this.data = data;
        this.svgContainer = svgContainer;
        this.trashGroup = this.svgContainer.append("g")
            .attr("class", "trash-group");
        this.baseText = this.trashGroup.append("text")
            .attr("class", "trash-base-text")
            .text(function (d) {
                return '\ue910'
            }).on("click", Modal.createModal.bind(this.data.workGroup, clearWorkgroup, 'messageConfirm'))
    }

    resize(containerWidth, containerHeight) {
        this.trashGroup
            .attr("transform", "translate(" + (containerWidth - 100) + "," + (containerHeight - 50) + ")")
        this.baseText
            .attr("x", 45)
            .attr("y", 30)
    }
}