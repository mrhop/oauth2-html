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
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        let value = this.props.data
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
        this.props.data = value;
        this.props.rule.validated = true;
        this.props.rule.errorMsg = null;
        this.forceUpdate();
    }

    render() {
        const rule = this.props.rule;
        let classNames = classNames('checkbox', (rule.validated === undefined || validated) ? null : 'has-error', rule.className);
        //validate 需要class 和tooltip放置，根据props的改变来做
        //data-validate = {rule.validate} validate shall not be here
        let items = rule.items.map(function (item, index) {
            return <label>
                <input type="checkbox" name={rule.name} value={item.value} onChange={this.onChange.bind(this)}
                       checked={this.props.data.split(',').includes(item.value)  ? 'checked' : false}/>
                <span>{item.label}</span>
            </label>
        });
        return <div className={classNames} id={this.props.id}>
            {rule.label && <label>{rule.label}</label>}
            {items}
            {(rule.validated === undefined || validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>
    }
}


Checkbox.propTypes = {rule: React.PropTypes.object};
Checkbox.propTypes = {data: React.PropTypes.string};
Checkbox.propTypes = {id: React.PropTypes.string};


module.exports = {
    Checkbox
};