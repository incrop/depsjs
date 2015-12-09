var _ = require('lodash');

exports.uniq = function(arr) {
    return _.reduce(arr, function(res, dep) {
        var notFound = !_.find(res, function(i) {
            return _.isEqual(dep, i);
        });

        return notFound ? res.concat(dep) : res;
    }, []);
};

exports.createMapEntry = function(key, value) {
    return _.set({}, key, value);
};

exports.wrapIntoArray = function(val) {
    return _.isArray(val) ? val : [val];
};

exports.withoutEmpty = function(obj) {
    return _.omit(obj, _.isEmpty);
};

var find = exports.find = function(arr, obj) {
    return _.find(arr, _.isEqual.bind(null, obj));
};

exports.difference = function(firstArr, secondArr) {
    return _.filter(secondArr, function(itemFromSecondArr) {
        return !find(firstArr, itemFromSecondArr);
    });
};

exports.isNotEmpty = function(value) {
    return !_.isEmpty(value);
};