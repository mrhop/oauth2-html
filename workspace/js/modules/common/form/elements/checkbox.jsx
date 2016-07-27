/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./checkbox.scss');

//基本text，然后有
// type
// email，password...
// special feature
// tooltip
//下面text的分类应该不是以上面的来分
//应该要从最基本的做起，不应该再有分类
export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        let value = this.props.data[this.props.name]
        if (e.target.checked) {
            value = value ? value + ',' + e.target.value : e.target.value;
        } else {
            value = value ? value.replace(e.target.value, '') : null;
        }
        if (value && value.endsWith(',')) {
            value = value.substring(0, value.length - 1);
        }
        if (value && value.startsWith(',')) {
            value = value.substring(1);
        }
        this.props.data[this.props.name] = value;
        if (this.props.rule.validated != undefined) {
            this.props.rule.validated = true;
        }
        if (this.props.rule.errorMsg != undefined) {
            this.props.rule.errorMsg = null;
        }
        this.forceUpdate();
    }

    render() {
        const rule = this.props.rule;
        let eleClassNames = classNames('checkbox-wrapper', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);
        let labelClassNames = null
        let errorBlockClassNames = 'error-block';

        switch (this.props.formType) {
            case 'horizontalForm':
                labelClassNames = 'col-sm-2'
                errorBlockClassNames = classNames(errorBlockClassNames, 'col-sm-10')
        }
        let items = rule.items.map(function (item, index) {
            return <li key={index}>
                <input type="checkbox" id={this.props.id + '-' + index} name={rule.name} value={item.value}
                       onChange={this.onChange.bind(this)}
                       checked={this.props.data[this.props.name] ? (this.props.data[this.props.name].split(',').includes(item.value + '') ? 'checked' : false) : false}/>
                <label htmlFor={this.props.id + '-' + index}>
                    <span>{item.label}</span>
                </label>
            </li>
        }, this);
        return <div className={eleClassNames} id={this.props.id}>
            <label
                className={labelClassNames}>{rule.label ? rule.label : null}{rule.label && rule.required ?
                <span className="required">*</span> : null}</label>
            {this.props.formType === 'horizontalForm' ?
                <div className="col-sm-10"><ul className="checkbox"> {items}</ul></div> : <ul className="checkbox"> {items}</ul> }
            {(rule.validated === undefined || rule.validated) ? null :
                <span className={errorBlockClassNames}>{rule.errorMsg}</span>}
        </div>
    }
}


Checkbox.propTypes = {rule: React.PropTypes.object};
Checkbox.propTypes = {data: React.PropTypes.string};
Checkbox.propTypes = {id: React.PropTypes.string};
Checkbox.propTypes = {formType: React.PropTypes.string};
