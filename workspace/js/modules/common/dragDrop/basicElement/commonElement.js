/**
 * Created by Donghui Huo on 2016/5/13.
 */
import d3 from 'd3'

export default class CommonElement {
    constructor(group, data, dragstart, drag, dragend) {
        this.type = data.type
        this.label = data.label
        this.group = group
        this.dragstart = dragstart ? dragstart : this.defaultDragStart;
        this.drag = drag ? drag : this.defaultDrag;
        this.dragend = dragend ? dragend : this.defaultDragEnd;
        if (this.label) {
            this.textElement = this.group.append("text")
                .attr("class", this.type + "-text innner-text")
                .text(this.label)
        }
        let select = this.type === 'diamond' ? 'polygon' : this.type;
        this.elementBack = this.group.append(select)
            .attr("class", "common-element common-element-back")
        this.element = this.group.append(select)
            .attr("class", "common-element")
        this.data = data;
    }

    resize(obj) {
        l_merge(this.data, obj)
        if (this.type == 'circle') {
            if (this.textElement) {
                this.textElement
                    .data([this.data])
                    .attr("x", function (d) {
                        return d.cx
                    })
                    .attr("y", function (d) {
                        return d.cy
                    })
            }
            if (this.element) {
                this.elementBack
                    .data(this.data)
                    .attr("cx", function (d) {
                        return d.cx
                    })
                    .attr("cy", function (d) {
                        return d.cy
                    })
                    .attr("r", function (d) {
                        return d.r
                    })
                this.element
                    .data([this.data])
                    .attr("cx", function (d) {
                        return d.cx
                    })
                    .attr("cy", function (d) {
                        return d.cy
                    })
                    .attr("r", function (d) {
                        return d.r
                    })
                    .call(this.dragEvent.bind(this)())
            }
        } else if (this.type == 'rect') {
            if (this.textElement) {
                this.textElement
                    .data([this.data])
                    .attr("x", function (d) {
                        return d.x + parseInt(d.w / 2)
                    })
                    .attr("y", function (d) {
                        return d.y + parseInt(d.h / 2)
                    })
            }
            if (this.element) {
                this.elementBack
                    .data([this.data])
                    .attr("x", function (d) {
                        return d.x
                    })
                    .attr("y", function (d) {
                        return d.y
                    })
                    .attr("height", function (d) {
                        return d.h
                    })
                    .attr("width", function (d) {
                        return d.w
                    })
                    .attr("rx", 10)
                    .attr("ry", 10)
                this.element
                    .data([this.data])
                    .attr("x", function (d) {
                        return d.x
                    })
                    .attr("y", function (d) {
                        return d.y
                    })
                    .attr("height", function (d) {
                        return d.h
                    })
                    .attr("width", function (d) {
                        return d.w
                    })
                    .attr("rx", 10)
                    .attr("ry", 10)
                    .call(this.dragEvent.bind(this)())
            }
        } else if (this.type == 'ellipse') {
            if (this.textElement) {
                this.textElement
                    .data([this.data])
                    .attr("x", function (d) {
                        return d.cx
                    })
                    .attr("y", function (d) {
                        return d.cy
                    })
            }
            if (this.element) {
                this.elementBack
                    .data([this.data])
                    .attr("cx", function (d) {
                        return d.cx
                    })
                    .attr("cy", function (d) {
                        return d.cy
                    })
                    .attr("rx", function (d) {
                        return d.rx
                    })
                    .attr("ry", function (d) {
                        return d.ry
                    })
                this.element
                    .data([this.data])
                    .attr("cx", function (d) {
                        return d.cx
                    })
                    .attr("cy", function (d) {
                        return d.cy
                    })
                    .attr("rx", function (d) {
                        return d.rx
                    })
                    .attr("ry", function (d) {
                        return d.ry
                    })
                    .call(this.dragEvent.bind(this)())
            }
        } else if (this.type == 'diamond' || this.type == 'polygon') {
            if (this.textElement) {
                this.textElement
                    .data([this.data])
                    .attr("x", function (d) {
                        return d.cx
                    })
                    .attr("y", function (d) {
                        return d.cy
                    })
            }
            if (this.element) {
                this.elementBack
                    .data([this.data])
                    .attr("points", function (d) {
                        return d.points
                    })
                this.element
                    .data([this.data])
                    .attr("points", function (d) {
                        return d.points
                    })
                    .call(this.dragEvent.bind(this)())

            }
        }
    }

    defaultDragStart(d) {
        //d3.select(this).classed("dragging");
        console.log('startDrag')
    }

    defaultDrag(d) {
        console.log('dragging')
        if (d.type == 'ellipse' || d.type == 'circle') {
            d.cx += d3.event.dx;
            d.cy += d3.event.dy;
            var node = d3.select(this);
            node.attr({cx: d.cx, cy: d.cy});
        }

    }

    defaultDragEnd(d) {
        console.log('drag end')
    }

    dragEvent() {
        var _this = this;
        return d3.behavior.drag()
            .on("dragstart", _this.dragstart)
            .on("drag", _this.drag)
            .on("dragend", _this.dragend)
    }
}