/**
 * Created by Donghui Huo on 2016/5/13.
 */

export default class TrashGroup {
    constructor(svgContainer, data) {
        this.svgContainer = svgContainer;
        this.trashGroup = svgContainer.append("svg")
            .attr("class", "trash-group")
        this.trashG = this.trashGroup.append("g");
        this.baseText = this.trashG.append("text")
            .attr("class", "trash-base-text")
            .attr("x", 30)
            .attr("y", 40)
            .text(function (d) {
                return '\ue910'
            })
        this.data = data;
    }

    resize(containerWidth, containerHeight) {
        this.trashGroup
            .attr("x", containerWidth - 100)
            .attr("y", containerHeight - 50)
    }
}