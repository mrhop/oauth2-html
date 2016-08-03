/**
 * Created by Donghui Huo on 2016/5/13.
 */
import CommonElement from '../basicElement/commonElement';
export default class SampleGroup {
    constructor(svgContainer, data) {
        this.data = data;
        this.svgContainer = svgContainer;
        this.sampleGroup = svgContainer.append("svg")
            .attr("class", "sample-group")
        this.sampleG = this.sampleGroup.append("g")
        this.baseReact = this.sampleG.append("rect")
            .attr("class", "sample-base-react")
            .attr("x", 0)
            .attr("y", 0)
        this.innerElements = []
        if (this.data) {
            this.data.forEach(function (item) {
                if (item.type == 'circle') {
                    let circle = new CommonElement(this.sampleG, item);
                    this.innerElements.push(circle);
                }
            }.bind(this))
        }
    }

    resize(containerWidth, containerHeight) {
        this.sampleGroup.attr("x", (containerWidth - 100))
        this.baseReact
            .attr("width", 90)
            .attr("height", containerHeight - 50);
        if (this.innerElements.length > 0) {
            var height = parseInt((containerWidth - 100 - 15 * this.innerElements.length) / this.innerElements.length)
            var size = height > 80 ? 80 : height
            this.innerElements.forEach(function (item, i) {
                if (item.type == 'circle') {
                    item.resize({cx: 5 + parseInt(size / 2), cy: ((15 + parseInt(size / 2)) * (i + 1)), r: parseInt(size / 2)})
                }
            }.bind(this))

        }

    }
}