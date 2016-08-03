/**
 * Created by Donghui Huo on 2016/5/13.
 */
export default class CommonElement {
    constructor(group, data) {
        this.type = data.type
        this.label = data.label
        this.group = group
        if (this.type == 'circle') {
            this.element = this.group.append("circle")
        }
        if (this.label) {
            this.textElement = this.group.append("text")
                .attr("class", this.type + "-text")
                .text(this.label)
        }
        this.data = data;
    }

    resize(obj) {
        if (this.type == 'circle') {
            if(this.element){
                this.element
                    .attr("cx", obj.cx)
                    .attr("cy", obj.cy)
                    .attr("r", obj.r)
            }
            if(this.textElement) {
                this.textElement
                    // .attr("x", obj.cx - obj.r + 16)
                    .attr("y", obj.cy + obj.r + 16)
            }
        }
    }
}