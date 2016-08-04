/**
 * Created by Donghui Huo on 2016/5/13.
 */

export default class WorkGroup {
    constructor(svgContainer, data) {
        this.svgContainer = svgContainer;
        this.workGroup = svgContainer.append("svg").append("g")
            .attr("class", "work-group")
        this.baseReact = this.workGroup.append("rect")
            .attr("class", "work-base-react")
        this.data = data;
    }

    resize(containerWidth, containerHeight) {
        this.workGroup
            .attr("transform", "translate(0,0)")
        this.baseReact
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", (containerWidth - 110))
            .attr("height", containerHeight - 10);
    }
}