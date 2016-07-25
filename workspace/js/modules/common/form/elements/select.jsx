/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./select.scss');

//基本Select，然后有
// 使用已有的select module
export default class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.data.value = e.value;
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
        let eleClassNames = classNames('select', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);
        return <div className={eleClassNames}>
            {rule.label && <label>{rule.label}</label>}
            <Select name={rule.name} data-name={rule.name}
                    value={this.props.data.value ? this.props.data.value : null}
                    options={rule.options}
                    onChange={this.onChange.bind(this)}>
            </Select>
            {(rule.validated === undefined || rule.validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>
    }
}


Select.propTypes = {rule: React.PropTypes.object};
Select.propTypes = {data: React.PropTypes.string};
Select.propTypes = {id: React.PropTypes.string};
