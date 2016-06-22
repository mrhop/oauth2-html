/**
 * Created by Donghui Huo on 2016/6/14.
 */
const sampleData =[{
    key: 1, value: [{
        className: 'td-id',
    }, {value: 'Mark'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
}, {
    key: 2, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 3, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 4, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 5, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 6, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 7, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 8, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 9, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 10, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 11, value: [{
        className: 'td-id',
    }, {value: 'Mark'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
}, {
    key: 12, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 13, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 14, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 15, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 16, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 17, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 18, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 19, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 20, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 21, value: [{
        className: 'td-id',
    }, {value: 'Mark'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
}, {
    key: 22, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 23, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 24, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
},{
    key: 25, value: [{
        className: 'td-id',
    }, {value: 'Mark1'}, {value: 'Otto'}, {value: '@mdo'}, {value: 'md@gmail.com'}, {value: '31,32'}]
}];
const sampleTotalCount = 50;
export default {
    'getList': function (parameters) {
        //base on the columns, filters, pagers, sort
        console.log(parameters.dataUrl);
        if (parameters.filters) {
            for (var key in parameters.filters) {
                console.log(key, parameters.filters[key]);
            }
        }
        if (parameters.sort) {
            console.log(parameters.sort.sortName, parameters.sort.sortDirection);
        }
        if (parameters.rowSize) {
            console.log(parameters.rowSize);
        }
        if (parameters.currentPage) {
            console.log(parameters.currentPage);
        }
        return {
            data: sampleData,
            totalCount: sampleTotalCount
        };
    },
    'delete': function (parameters) {
        //base on id,and update the state data
        console.log(parameters.dataUrl);
        if (parameters.filters) {
            parameters.filters.forEach(function (item) {
                console.log(item.name, item.value);
            });
        }
        if (parameters.sort) {
            console.log(parameters.sort.sortName, parameters.sort.sortDirection);
        }
        if (parameters.rowSize) {
            console.log(parameters.rowSize);
        }
        if (parameters.currentPage) {
            console.log(parameters.currentPage);
        }
        if (parameters.key) {
            console.log(parameters.key);
        }
        //do ajax delete and fetch
    },
    'update': function (parameters) {
        //base on id,and update the related columns then return true or false, for update the state data
        if (parameters.key) {
            console.log(parameters.key);
        }
        if (parameters.data) {
            parameters.data.forEach(function (item) {
                console.log(item.name, item.value);
            });
        }
        //do ajax update, and return result
        return {};
    },
    'add': function (parameters) {
        //add the data and return and update the state data,the state data update shall be at the table.jsx
        if (parameters.data) {
            parameters.data.forEach(function (item) {
                console.log(item.name, item.value);
            });
        }
        //do ajax add, and return result,here when add one ,top the top or refresh the data ,I think refresh,
        return {
            data: sampleData,
            totalCount: sampleTotalCount
        };
    }
};
