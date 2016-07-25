/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./file.scss');

//基本file,需要考虑file data的获取， if not ,form submit
export default class File extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.data.value = e.target.value;
        console.log('something happened')
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
        let eleClassNames = classNames('form-group', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);
        return <div className={eleClassNames}>{rule.label && <label
            for={this.props.id}>{rule.label}</label>}
            <input className='file' id={this.props.id} type='file'
                   name={rule.name}
                   value={this.props.data.value}
                   onChange={this.onChange.bind(this)}/>
            {(rule.validated === undefined || rule.validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>
    }
}


File.propTypes = {rule: React.PropTypes.object};
File.propTypes = {data: React.PropTypes.string};
File.propTypes = {id: React.PropTypes.string};
