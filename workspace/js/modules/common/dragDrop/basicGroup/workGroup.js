/**
 * Created by Donghui Huo on 2016/5/13.
 */

export default class WorkGroup {
    constructor(svgContainer, data) {
        this.svgContainer = svgContainer;
        this.workGroup = svgContainer.append("svg")
            .attr("class", "work-group")
        this.baseReact = this.workGroup.append("g").append("rect")
            .attr("class", "work-base-react")
            .attr("x", 0)
            .attr("y", 0)
        this.data = data;
    }

    resize(containerWidth, containerHeight) {
        this.workGroup.attr("x", 0)
        this.baseReact
            .attr("width", (containerWidth - 110))
            .attr("height", containerHeight - 10);
    }
}