/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./text.scss');

//基本text
export default class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.data = e.target.value;
        this.props.rule.validated = true;
        this.props.rule.errorMsg = null;
        //also se
        this.forceUpdate();
    }

    render() {
        const rule = this.props.rule;
        let eleClassNames = classNames('form-group', (rule.validated === undefined || validated) ? null : 'has-error', rule.className);
        //validate 需要class 和tooltip放置，根据props的改变来做
        //data-validate = {rule.validate} validate shall not be here
        return <div className={eleClassNames}>{rule.label && <label
            for={this.props.id}>{rule.label}</label>}
            <input className='text' id={this.props.id} type={rule.type ? rule.type : 'text'}
                   name={rule.name} placeholder={rule.placeholder}
                   value={this.props.data}
                   autocomplete={rule.autocomplete !== undefined ? rule.autocomplete : true}
                   onChange={this.onChange.bind(this)}/>
            {(rule.validated === undefined || validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>;
    }
}


Text.propTypes = {rule: React.PropTypes.object};
Text.propTypes = {data: React.PropTypes.string};
Text.propTypes = {id: React.PropTypes.string};

