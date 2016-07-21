/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./radio.scss');

//基本text，然后有
// type
// email，password...
// special feature
// tooltip
//下面text的分类应该不是以上面的来分
//应该要从最基本的做起，不应该再有分类
class Radio extends React.Component {
    constructor(props) {
        super(props);

    }
    onChange(e) {
        this.props.data = e.target.value;
        this.props.rule.validated = true;
        this.props.rule.errorMsg = null;
        this.forceUpdate();
    }
    render() {

        const rule = this.props.rule;
        let classNames = classNames('radio', (rule.validated === undefined || validated) ? null : 'has-error', rule.className);
        //validate 需要class 和tooltip放置，根据props的改变来做
        //data-validate = {rule.validate} validate shall not be here
        let items = rule.items.map(function (item, index) {
            return <label>
                <input type="radio" name={rule.name} value={item.value} onChange={this.onChange.bind(this)}
                       checked={item.value == this.props.data ? 'checked' : false}/>
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


Radio.propTypes = {rule: React.PropTypes.object};
Radio.propTypes = {data: React.PropTypes.string};
Radio.propTypes = {id: React.PropTypes.string};


module.exports = {
    Radio
};