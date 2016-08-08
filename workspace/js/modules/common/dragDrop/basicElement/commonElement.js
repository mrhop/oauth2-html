/**
 * Created by Donghui Huo on 2016/5/13.
 */
import d3 from 'd3'

export default class CommonElement {
    constructor(group, data, dragstart, drag, dragend) {
        this.type = data.type
        this.model = data.model
        this.label = data.label
        this.group = group


        this.dragstart = dragstart ? dragstart : this.defaultDragStart;
        this.drag = drag ? drag : this.defaultDrag;
        this.dragend = dragend ? dragend : this.defaultDragEnd;

        let select = this.model === 'diamond' ? 'polygon' : this.model;
        this.groupBack = this.group.append("g").data([{x: 0, y: 0, model: this.model}])
            .attr("class", "sample-group-drag")
        if (this.label) {
            this.textElementBack = this.groupBack.append("text")
                .attr("class", this.model + "-text innner-text")
                .text(this.label)
        }

        this.elementBack = this.groupBack.append(select)
            .attr("class", "common-element common-element-back")
        this.groupDrag = this.group.append("g").data([{x: 0, y: 0, model: this.model}])
            .attr("class", "sample-group-drag")
            .call(this.dragEvent.bind(this)())
        if (this.label) {
            this.textElementDrag = this.groupDrag.append("text")
                .attr("class", this.model + "-text innner-text")
                .text(this.label)
        }
        this.elementDrag = this.groupDrag.append(select)
            .attr("class", "common-element")
        this.data = data;
    }

    resize(obj) {
        l_merge(this.data, obj)
        this.groupBack.data([this.data])
            .attr("transform", "translate(" + obj.x + "," + obj.y + ")")
        this.groupDrag.data([this.data])
            .attr("transform", "translate(" + obj.x + "," + obj.y + ")")
        if (this.textElementBack) {
            this.textElementBack
                .data([this.data])
                .attr("x", 40)
                .attr("y", function (d) {
                    return parseInt(d.size / 2)
                })
        }
        this.textElementDrag
            .data([this.data])
            .attr("x", 40)
            .attr("y", function (d) {
                return parseInt(d.size / 2)
            })
        if (this.model == 'circle') {
            if (this.elementBack) {
                this.elementBack
                    .data([this.data])
                    .attr("cx", 40)
                    .attr("cy", function (d) {
                        return parseInt(d.size / 2)
                    })
                    .attr("r", function (d) {
                        return parseInt(d.size / 2)
                    })
            }
            this.elementDrag
                .data([this.data])
                .attr("cx", 40)
                .attr("cy", function (d) {
                    return parseInt(d.size / 2)
                })
                .attr("r", function (d) {
                    return parseInt(d.size / 2)
                })
        } else if (this.model == 'rect') {
            if (this.elementBack) {
                this.elementBack
                    .data([this.data])
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("height", this.data.size)
                    .attr("width", 80)
            }
            this.elementDrag
                .data([this.data])
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", this.data.size)
                .attr("width", 80)
        } else if (this.model == 'ellipse') {
            if (this.elementBack) {
                this.elementBack
                    .data([this.data])
                    .attr("cx", 40)
                    .attr("cy", function (d) {
                        return parseInt(d.size / 2)
                    })
                    .attr("rx", 40)
                    .attr("ry", function (d) {
                        return parseInt(d.size / 2)
                    })
            }
            this.elementDrag
                .data([this.data])
                .attr("cx", 40)
                .attr("cy", function (d) {
                    return parseInt(d.size / 2)
                })
                .attr("rx", 40)
                .attr("ry", function (d) {
                    return parseInt(d.size / 2)
                })
        } else if (this.model == 'diamond') {
            var point = "0," + parseInt(this.data.size / 2) + " 40," + 0 + " 80," + parseInt(this.data.size / 2) + " 40," + this.data.size
            if (this.elementBack) {
                this.elementBack
                    .data([this.data])
                    .attr("points", point)
            }
            this.elementDrag
                .data([this.data])
                .attr("points", point)
        } else if (this.model == 'polygon') {

        }
    }

    defaultDragStart(d) {
        //d3.select(this).classed("dragging");
        var node = d3.select(this.parentNode)
        d.g = {initTransform: node.attr("transform")}
        console.log('startDrag')
    }

    defaultDrag(d) {
        //var node = d3.select(this.parentNode);
        console.log('dragging')
        d.x = d3.event.dx + d.x
        d.y = d3.event.dy + d.y
        if (d.x > 5) {
            d.x = 5
        }
        if ((-d.x) + 105 > d.containerWidth) {
            d.x = -(d.containerWidth - 105);
        }
        if (d.y < 5) {
            d.y = 5;
        }
        if (d.y + d.size + 15 > d.containerHeight) {
            d.y = d.containerHeight - 15 - d.size;
        }
        d3.select(this).attr("transform", "translate(" + d.x + "," + d.y + ")");
        d3.event.sourceEvent.stopPropagation();
    }

    defaultDragEnd(d) {
        console.log('drag end')
        //此处应该关联到工作区的callback
        if (d.x >= -95) {
            d.x = d.initX
            d.y = d.initY
        }
        d3.select(this).attr("transform", "translate(" + d.x + "," + d.y + ")");
        d3.event.sourceEvent.stopPropagation();
    }

    dragEvent() {
        var _this = this;
        return d3.behavior.drag()
            .on("dragstart", _this.dragstart)
            .on("drag", _this.drag)
            .on("dragend", _this.dragend)
    }
}