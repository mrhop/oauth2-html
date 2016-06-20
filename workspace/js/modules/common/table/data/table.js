/**
 * Created by Donghui Huo on 2016/6/14.
 */
export default {
    'getList': function (parameters) {
        //base on the columns, filters, pagers, sort
        console.log(parameters.dataUrl);
        if(parameters.filters){
            parameters.filters.forEach(function(item){
                console.log(item.name,item.value);
            });
        }
        if(parameters.sort){
            console.log(parameters.sort.sortName,parameters.sort.sortDirection);
        }
        if(parameters.rowSize){
            console.log(parameters.rowSize);
        }
        if(parameters.currentPage){
            console.log(parameters.currentPage);
        }
    },
    'delete': function (parameters) {
        //base on id,and update the state data
        console.log(parameters.dataUrl);
        if(parameters.filters){
            parameters.filters.forEach(function(item){
                console.log(item.name,item.value);
            });
        }
        if(parameters.sort){
            console.log(parameters.sort.sortName,parameters.sort.sortDirection);
        }
        if(parameters.rowSize){
            console.log(parameters.rowSize);
        }
        if(parameters.currentPage) {
            console.log(parameters.currentPage);
        }
        if(parameters.key) {
            console.log(parameters.key);
        }
        //do ajax delete and fetch
    },
    'update': function (parameters) {
        //base on id,and update the related columns then return true or false, for update the state data
        if(parameters.key) {
            console.log(parameters.key);
        }
        if(parameters.data) {
            parameters.data.forEach(function(item){
                console.log(item.name,item.value);
            });
        }
        //do ajax update, and return result
        return {};
    },
    'add': function (parameters) {
        //add the data and return and update the state data,the state data update shall be at the table.jsx
        if(parameters.data) {
            parameters.data.forEach(function(item){
                console.log(item.name,item.value);
            });
        }
        //do ajax add, and return result,here when add one ,top the top or refresh the data ,I think refresh,
        return {};
    }
};
