/**
 * Created by Donghui Huo on 2016/5/13.
 */

export default class TrashGroup {
    constructor(svgContainer, data) {
        this.svgContainer = svgContainer;
        this.trashGroup = this.svgContainer.append("g")
            .attr("class", "trash-group");
        this.baseText = this.trashGroup.append("text")
            .attr("class", "trash-base-text")
            .text(function (d) {
                return '\ue910'
            })
        this.data = data;
    }

    resize(containerWidth, containerHeight) {
        this.trashGroup
            .attr("transform", "translate(" + (containerWidth - 100) + "," + (containerHeight - 50) + ")")
        this.baseText
            .attr("x", 45)
            .attr("y", 30)
    }
}