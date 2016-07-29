/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('./selectWrapper.scss');

//基本Select，然后有
// 使用已有的select module
export default class SelectWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.data[this.props.name] = e ? e.value : null;
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
        let eleClassNames = classNames('select-wrapper', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);

        let labelClassNames = null
        let errorBlockClassNames = 'error-block';
        

        let selectEle = <Select name={rule.name}
                                value={this.props.data[this.props.name] ? this.props.data[this.props.name] : null}
                                options={rule.items}
                                onChange={this.onChange.bind(this)}>
        </Select>
        switch (this.props.formType) {
            case  'horizontalForm':
                labelClassNames = 'col-sm-2'
                errorBlockClassNames = classNames(errorBlockClassNames, 'col-sm-10')
                selectEle = <div className="col-sm-10">
                    {selectEle}
                </div>
            case  'inlineForm':
                selectEle =
                    <div className="select-first-wrapper"><div className="select-second-wrapper"> {selectEle}</div></div>
        }
        return <div className={eleClassNames}>
            <label
                className={labelClassNames}>{rule.label ? rule.label : null}{rule.label && rule.required ?
                <span className="required">*</span> : null}</label>
            {selectEle}
            {(rule.validated === undefined || rule.validated) ? null :
                <span className={errorBlockClassNames}>{rule.errorMsg}</span>}
        </div>
    }
}


SelectWrapper.propTypes = {rule: React.PropTypes.object};
SelectWrapper.propTypes = {data: React.PropTypes.string};
SelectWrapper.propTypes = {id: React.PropTypes.string};
SelectWrapper.propTypes = {formType: React.PropTypes.string};
