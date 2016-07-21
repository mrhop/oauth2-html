/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./file.scss');

//基本file,需要考虑file data的获取， if not ,form submit
class File extends React.Component {
    constructor(props) {
        super(props);
    }
    onChange(e) {
        this.props.data = e.target.value;
        console.log('something happened')
        this.props.rule.validated = true;
        this.props.rule.errorMsg = null;
        //and also need to do the data format
        this.forceUpdate();
    }
    render() {
        const rule = this.props.rule;
        let classNames = classNames('form-group', (rule.validated === undefined || validated) ? null : 'has-error', rule.className);
        return <div className={classNames}>{rule.label && <label
            for={this.props.id}>{rule.label}</label>}
            <input className='file' id={this.props.id} type='file'
                   name={rule.name}
                   value={this.props.data}
                   onChange={this.onChange.bind(this)}/>
            {(rule.validated === undefined || validated) ? null : <span className="error-block">{rule.errorMsg}</span>}
        </div>
    }
}


File.propTypes = {rule: React.PropTypes.object};
File.propTypes = {data: React.PropTypes.string};
File.propTypes = {id: React.PropTypes.string};


module.exports = {
    File
};