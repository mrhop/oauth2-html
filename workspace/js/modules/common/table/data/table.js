/**
 * Created by Donghui Huo on 2016/6/14.
 */
export default {
    'getList': function(parameters){
        //base on the columns, filters, pagers, sort
    },
    'delete': function(parameters){
        //base on id,and update the state data
    },
    'update': function(parameters){
        //base on id,and update the related columns then return true or false, for update the state data
    },
    'add': function(parameters){
        //add the data and return and update the state data,the state data update shall be at the table.jsx
    }
};
