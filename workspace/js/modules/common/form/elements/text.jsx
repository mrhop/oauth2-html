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
        this.props.data[this.props.name] = e.target.value;
        if (this.props.rule.validated != undefined) {
            this.props.rule.validated = true;
        }
        if (this.props.rule.errorMsg != undefined) {
            this.props.rule.errorMsg = null;
        }
        //also se
        this.forceUpdate();
    }

    render() {
        const rule = this.props.rule;
        let eleClassNames = classNames('form-group', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);
        //validate 需要class 和tooltip放置，根据props的改变来做
        //data-validate = {rule.validate} validate shall not be here
        let inputClassNames = classNames('form-control', (rule.type ? rule.type : 'text'));

        return <div className={eleClassNames}>{rule.label && <label
            for={this.props.id}>{rule.label}</label>}
            <input className={inputClassNames} id={this.props.id} type={rule.type ? rule.type : 'text'}
                   name={rule.name} placeholder={rule.placeholder}
                   value={this.props.data[this.props.name]}
                   autocomplete={rule.autocomplete !== undefined ? rule.autocomplete : true}
                   onChange={this.onChange.bind(this)}/>
            {(rule.validated === undefined || rule.validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>;
    }
}


Text.propTypes = {rule: React.PropTypes.object};
Text.propTypes = {data: React.PropTypes.object};
Text.propTypes = {id: React.PropTypes.string};
Text.propTypes = {name: React.PropTypes.string};

