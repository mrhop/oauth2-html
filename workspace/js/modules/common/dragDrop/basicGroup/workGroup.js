/**
 * Created by Donghui Huo on 2016/5/13.
 */

export default class WorkGroup {
    constructor(parent, data) {
        this.parent = parent
        this.data = {items: data};
        this.svgContainer = this.parent.d3.svgContainer;
        this.workGroup = this.svgContainer.append("g")
            .attr("class", "work-group")
            .attr("transform", "translate(0,0)")
        this.baseReact = this.workGroup.append("rect")
            .attr("class", "work-base-react")
        this.totalElemntGroup = this.workGroup.append("g")
            .attr("class", "elements-group")
            .attr("transform", "translate(0,0)")
    }

    resize(containerWidth, containerHeight) {
        this.baseReact
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", (containerWidth - 110))
            .attr("height", containerHeight - 10);
        this.data.containerWidth = containerWidth - 110
        this.data.containerHeight = containerHeight - 10
        this.drawData()
    }

    cleanWorkgroup() {
        this.totalElemntGroup.selectAll("*").remove();
    }


    drawData() {
        this.cleanWorkgroup();
        var hor = this.data.containerWidth > this.data.containerHeight ? true : false;
        var y = 0, x = 0;
        var size = 80
        if (hor) {
            x = 5
            var widthSegment = parseInt((this.data.containerWidth - 5) / (2 * this.data.items.length - 1))
            size = 80 > widthSegment ? widthSegment : 80;
        } else {
            y = 5
            var heightSegment = parseInt((this.data.containerHeight - 5) / (2 * this.data.items.length - 1))
            size = 40 > heightSegment ? heightSegment : 40;
        }
        var linePoints = {}
        var positionData = [];
        for (var i = 0; i < this.data.items.length; i++) {
            var item = this.data.items[i];
            var length = item.length;
            var subSize = 50
            if (hor) {
                x = size * (i > 0 ? 2 : 0) + x;
                var heightSegment = parseInt(this.data.containerHeight / item.length)
                subSize = 50 > heightSegment ? heightSegment : 50;
            } else {
                y = size * (i > 0 ? 2 : 0) + y;
                var widthSegment = parseInt(this.data.containerWidth / item.length)
                subSize = 90 > widthSegment ? widthSegment : 90;
            }
            for (var j = 0; j < item.length; j++) {
                var subItem = item[j];
                if (hor) {
                    y = subSize * j;
                } else {
                    x = subSize * j;
                }
                var group = this.totalElemntGroup.append("g").data([subItem])
                    .attr("id", "item-workgroup-" + subItem.id)
                    .attr("transform", "translate(" + x + "," + y + ")")
                positionData.push({
                    x1: x,
                    y1: y,
                    x2: hor ? x + size : x + subSize,
                    y2: hor ? y + subSize : size + y,
                    data: subItem
                })
                var type = "rect";
                if (subItem.type == "role") {
                    type = "ellipse"
                } else if (subItem.type == "position") {
                    type = "rect"
                } else if (subItem.type == "action") {
                    type = "polygon"
                }

                group.append("text").data([subItem])
                    .attr("class", type + "-text innner-text")
                    .attr("x", hor ? parseInt(size / 2) : parseInt((subSize - 10) / 2) + 5)
                    .attr("y", hor ? parseInt((subSize - 10) / 2) + 5 : parseInt(size / 2))
                    .attr('pointer-events', 'all')
                    .text(subItem.label)
                var leftOrTopPoint = {
                    x: hor ? x : x + parseInt(subSize / 2),
                    y: hor ? y + parseInt(subSize / 2) : y
                }
                var rightOrBottomPoint = {
                    x: hor ? x + size : x + parseInt(subSize / 2),
                    y: hor ? y + parseInt(subSize / 2) : y + size
                }
                linePoints["point_" + subItem.id] = {leftOrTopPoint, rightOrBottomPoint}
                if (subItem.type == "role") {
                    group.append("ellipse").data([subItem])
                        .attr("class", "common-element common-element-workspace")
                        .attr("cx", hor ? parseInt(size / 2) : parseInt((subSize - 10) / 2) + 5)
                        .attr("cy", hor ? parseInt((subSize - 10) / 2) + 5 : parseInt(size / 2))
                        .attr("rx", hor ? parseInt(size / 2) : parseInt((subSize - 10) / 2))
                        .attr("ry", hor ? parseInt((subSize - 10) / 2) : parseInt(size / 2))
                        .attr('pointer-events', 'all')

                } else if (subItem.type == "position") {
                    group.append("rect").data([subItem])
                        .attr("class", "common-element common-element-workspace")
                        .attr("x", hor ? 0 : 5)
                        .attr("y", hor ? 5 : 0)
                        .attr("height", hor ? subSize - 10 : size)
                        .attr("width", hor ? size : subSize - 10)
                } else if (subItem.type == "action") {
                    var point = ""
                    if (hor) {
                        point = "0," + parseInt((subSize - 10) / 2 + 5) + " " + parseInt(size / 2) + ",5" + " " + size + "," + parseInt((subSize - 10) / 2 + 5) + " " + parseInt(size / 2) + "," + (subSize - 5)
                    } else {
                        point = "5," + parseInt(size / 2) + " " + parseInt((subSize - 10) / 2 + 5) + ",0" + " " + (subSize - 5) + "," + parseInt(size / 2) + " " + parseInt((subSize - 10) / 2 + 5) + "," + size
                    }
                    group.append("polygon").data([subItem])
                        .attr("class", "common-element common-element-workspace")
                        .attr("points", point)
                }
                if (subItem.parentId) {
                    for (var k = 0; k < subItem.parentId.length; k++) {
                        var originPoint = linePoints["point_" + subItem.parentId[k]]
                        if (originPoint) {
                            this.totalElemntGroup.append("line")
                                .attr("class", "line-work-group")
                                .attr("x1", originPoint.rightOrBottomPoint.x)
                                .attr("y1", originPoint.rightOrBottomPoint.y)
                                .attr("x2", leftOrTopPoint.x)
                                .attr("y2", leftOrTopPoint.y)
                        }
                    }
                }
            }
        }
        this.parent.workGroupData = positionData;
    }
}