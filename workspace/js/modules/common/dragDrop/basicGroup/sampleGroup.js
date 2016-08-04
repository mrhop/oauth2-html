/**
 * Created by Donghui Huo on 2016/5/13.
 */
import d3 from 'd3'
import CommonElement from '../basicElement/commonElement';

export default class SampleGroup {
    constructor(svgContainer, data) {
        this.data = data;
        this.svgContainer = svgContainer;
        this.sampleGroup = this.svgContainer.append("g")
            .attr("class", "sample-group")
        this.baseReact = this.sampleGroup.append("rect")
            .attr("class", "sample-base-react")

        this.innerElements = []
        if (this.data) {
            this.data.forEach(function (item) {
                let commonElement = new CommonElement(this.sampleGroup, item, this.dragStart);
                this.innerElements.push(commonElement);
            }.bind(this))
        }
    }

    resize(containerWidth, containerHeight) {
        this.sampleGroup.attr("x", (containerWidth - 100))
            .attr("transform", "translate(" + (containerWidth - 100) + ",0)")
        this.baseReact
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 90)
            .attr("height", containerHeight - 50);
        if (this.innerElements.length > 0) {
            var height = parseInt((containerHeight - 60 - 15 * this.innerElements.length) / this.innerElements.length)
            var size = height > 40 ? 40 : height
            var top = 15
            this.innerElements.forEach(function (item, i) {
                if (item.type == 'circle') {
                    item.resize({
                        cx: 45,
                        cy: top + parseInt(size / 2),
                        r: parseInt(size / 2)
                    })
                    top = top + 15 + parseInt(size)
                } else if (item.type == 'rect') {
                    item.resize({
                        x: 5,
                        y: top,
                        w: 80,
                        h: size
                    })
                    top = top + 15 + parseInt(size)
                } else if (item.type == 'ellipse') {
                    item.resize({
                        cx: 45,
                        cy: top + parseInt(size / 2),
                        rx: parseInt(40),
                        ry: parseInt(size / 2)
                    })
                    top = top + 15 + parseInt(size)
                } else if (item.type == 'diamond') {
                    item.resize({
                        cx: 45,
                        cy: top + parseInt(size / 2),
                        points: "5," + (top + parseInt(size / 2)) + " 45," + top + " 85," + (top + parseInt(size / 2)) + " 45," + (top + size)
                    })
                    top = top + 15 + parseInt(size)
                }
            }.bind(this))

        }

    }


}