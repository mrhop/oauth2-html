/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./select.scss');

//基本Select，然后有
// 使用已有的select module
class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.data = e.value;
        this.props.rule.validated = true;
        this.props.rule.errorMsg = null;
        this.forceUpdate();
    }

    render() {
        const rule = this.props.rule;
        let classNames = classNames('select', (rule.validated === undefined || validated) ? null : 'has-error', rule.className);
        return <div className={className}>
            {rule.label && <label>{rule.label}</label>}
            <Select name={rule.name} data-name={rule.name}
                    value={rule.value ? rule.value : null}
                    options={rule.options}
                    onChange={this.onChange.bind(this)}>
            </Select>
            {(rule.validated === undefined || validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>
    }
}


Select.propTypes = {rule: React.PropTypes.object};
Select.propTypes = {data: React.PropTypes.string};
Select.propTypes = {id: React.PropTypes.string};


module.exports = {
    Select
};