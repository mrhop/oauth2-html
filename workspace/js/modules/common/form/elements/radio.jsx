/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./radio.scss');

export default class Radio extends React.Component {
    constructor(props) {
        super(props);

    }
    onChange(e) {
        this.props.data.value = e.target.value;
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
        let eleClassNames = classNames('radio', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);
        //validate 需要class 和tooltip放置，根据props的改变来做
        //data-validate = {rule.validate} validate shall not be here
        let items = rule.items.map(function (item, index) {
            return <label>
                <input type="radio" name={rule.name} value={item.value} onChange={this.onChange.bind(this)}
                       checked={item.value == this.props.data.value ? 'checked' : false}/>
                <span>{item.label}</span>
            </label>
        },this);
        return <div className={eleClassNames} id={this.props.id}>
            {rule.label && <label>{rule.label}</label>}
            {items}
            {(rule.validated === undefined || rule.validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>
    }
}


Radio.propTypes = {rule: React.PropTypes.object};
Radio.propTypes = {data: React.PropTypes.string};
Radio.propTypes = {id: React.PropTypes.string};
