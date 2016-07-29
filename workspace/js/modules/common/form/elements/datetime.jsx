/**
 * Created by Donghui Huo on 2016/5/13.
 */
require('react-datepicker/dist/react-datepicker.css');
require('./datetime.scss');
import DatePicker from 'react-datepicker'
import moment from 'moment'

//基本text
export default class DateTime extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange(e) {
        this.props.data[this.props.name] = e;
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
        let eleClassNames = classNames('datetime-wrapper', (rule.validated === undefined || rule.validated) ? null : 'has-error', rule.className);

        let labelClassNames = null
        let errorBlockClassNames = 'error-block';

        switch (this.props.formType) {
            case 'horizontalForm':
                labelClassNames = 'col-sm-2'
                errorBlockClassNames = classNames(errorBlockClassNames, 'col-sm-10')
        }

        let datetimeElement = null
        if (rule.type === 'date') {
            datetimeElement = <div className={rule.type}> <DatePicker fixedHeight id={this.props.id}
                dateFormat={rule.dateFormat ? rule.dateFormat : 'YYYY/MM/DD'}
                selected={this.props.data[this.props.name] ? moment(this.props.data[this.props.name],(rule.dateForma ? rule.dateFormat : 'YYYY/MM/DD')) : moment()}
                placeholderText={rule.placeholder}
                locale={locale}
                todayButton={'今天'}
                onChange={this.onChange.bind(this)}/></div>
        }
        return <div className={eleClassNames}><label
            htmlFor={this.props.id}
            className={labelClassNames}>{rule.label ? rule.label : null}{rule.label && rule.required ?
            <span className="required">*</span> : null}</label>
            {this.props.formType === 'horizontalForm' ?
                <div className="col-sm-10 input-wrapper">{datetimeElement}</div> : datetimeElement }
            {(rule.validated === undefined || rule.validated) ? null :
                <span className={errorBlockClassNames}>{rule.errorMsg}</span>}
        </div>;
    }
}


DateTime.propTypes = {rule: React.PropTypes.object};
DateTime.propTypes = {data: React.PropTypes.object};
DateTime.propTypes = {id: React.PropTypes.string};
DateTime.propTypes = {name: React.PropTypes.string};
DateTime.propTypes = {formType: React.PropTypes.string};

