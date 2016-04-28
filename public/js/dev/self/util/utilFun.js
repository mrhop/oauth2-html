/**
 * Created by Donghui Huo on 2016/3/15.
 */
import initial from '../env/initial';
import intl from '../intl/intl';
export default  {
    name:'utilFun',
    getName: function(){
        return this.name;
    },
    domReady: function(callback){
        if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
            callback();
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    },
    getIntl:function(){
        return intl[this.getLocale()];
    },
    getLocale:function(){
        var locale = navigator.language.split('-');
        locale = locale[1] ? '${locale[0]}-${locale[1].toUpperCase()}' : navigator.language;
        return intl[locale] ? locale : initial.locale;
    }
}