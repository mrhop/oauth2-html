/**
 * Created by Donghui Huo on 2016/3/15.
 */
import initial from '../env/initial';
import intl from '../intl/intl';

let utilFun = function () {

};
utilFun.prototype = {
    name: 'utilFun',
    getName: function () {
        return this.name;
    },
    domReady: function (callback) {
        if (document.readyState == 'complete' || document.readyState == 'loaded' || document.readyState == 'interactive') {
            callback();
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    },
    getLocale: function () {
        var locale = navigator.language.split('-');
        locale = locale[1] ? '${locale[0]}-${locale[1].toUpperCase()}' : navigator.language;
        return intl[locale] ? locale : initial.locale;
    },
    getIntl: function (...pageKeys) {
        var obj = {};
        var locale = this.getLocale();
        pageKeys.forEach(function (key) {
            for (var subKey of Object.keys(intl[locale][key])) {
                obj[subKey] = intl[locale][key][subKey];
            }
        });
        return obj;
    },
    getGlobalProps: function () {
        return intl[this.getLocale()]['app'];
    },
    uuid: function () {
        var s = [];
        var hexDigits = '0123456789abcdef';
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = '-';

        var uuid = s.join('');
        return uuid;
    },
    delay: (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })(),
    //form type from data --> dom
    formType:function(parameters){
        if(parameters.type == 'text'){
            var value = parameters.value ? parameters.value : '';
            var className = classNames('editable', parameters.className);
            return <input type="text" className={className} data-name={parameters.name}
                          name={parameters.name} value={value}
                          onChange={parameters.onChangeCallback}/>;
        }else if(parameters.type == 'select'){
            var className = classNames('editable', parameters.className);
            return <Select className={className} name={parameters.name} data-name={parameters.name}
                           value={parameters.value ? parameters.value : null}
                           options={parameters.options}
                           onChange={parameters.onChangeCallback}>
            </Select>;
        }else if(parameters.type == 'radio'){
            var className = classNames('editable ul-wrapper', parameters.className);
            var editContent = parameters.options.map(function (subItem, index) {
                const checked = subItem.value == parameters.value ? 'checked' : false;
                return <li key={index}><input type="radio" name={parameters.name} id={parameters.name + '-' + index}
                                              data-name={parameters.name}
                                              value={ subItem.value}
                                              checked={checked}
                                              onChange={parameters.onChangeCallback}/>
                    <label htmlFor={parameters.name + '-' + index}>{subItem.label}</label></li>;
            }, this);
            editContent = <ul className={className}>{editContent}</ul>;
            return editContent;
        }else if(parameters.type == 'checkbox'){
            className = classNames('editable ul-wrapper', parameters.className);
            var value = parameters.value ? parameters.value : '';
            var editContent = parameters.options.map(function (subItem, index) {
                return <li key={index}><input type="checkbox" name={parameters.name} id={parameters.name + '-' + index}
                                              data-name={parameters.name}
                                              value={ subItem.value}
                                              checked={value.split(',').includes(subItem.value)  ? 'checked' : false}
                                              onChange={parameters.onChangeCallback}/>
                    <label htmlFor={parameters.name + '-' + index}>{subItem.label}</label></li>;
            }, this);
            editContent = <ul className={className}>{editContent}</ul>;
            return editContent;
        }
    },
    formTypeSelect: function (name, value, options, onChangeCallback, className) {
        className = classNames('editable', className);
        return <Select className={className} name={name} data-name={name}
                       value={value ? value : null}
                       options={options}
                       onChange={onChangeCallback}>
        </Select>;
    },
    formTypeText: function (name, value, onChangeCallback, className) {
        className = classNames('editable', className);
        return <input type="text" className={className} data-name={name}
                      name={name} value={value}
                      onChange={onChangeCallback}/>;
    },
    formTypeRadio: function (name, value, options, onChangeCallback, className) {
        className = classNames('editable ul-wrapper', className);
        var editContent = options.map(function (subItem, index) {
            const checked = subItem.value == value ? 'checked' : false;
            return <li key={index}><input type="radio" name={name} id={name + '-' + index}
                                          data-name={name}
                                          value={ subItem.value}
                                          checked={checked}
                                          onChange={onChangeCallback}/>
                <label htmlFor={name + '-' + index}>{subItem.label}</label></li>;
        }, this);
        editContent = <ul className={className}>{editContent}</ul>;
        return editContent;
    },
    formTypeCheckbox: function (name, value, options, onChangeCallback, className) {
        className = classNames('editable ul-wrapper', className);
        value = value ? value : '';
        var editContent = options.map(function (subItem, index) {
            return <li key={index}><input type="checkbox" name={name} id={name + '-' + index}
                                          data-name={name}
                                          value={ subItem.value}
                                          checked={value.split(',').includes(subItem.value)  ? 'checked' : false}
                                          onChange={onChangeCallback}/>
                <label htmlFor={name + '-' + index}>{subItem.label}</label></li>;
        }, this);
        editContent = <ul className={className}>{editContent}</ul>;
        return editContent;
    }
};

module.exports = new utilFun();