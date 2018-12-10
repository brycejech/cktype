'use strict';

export function type(thing){
    return Object.prototype.toString.call(thing).match(/\[object (.*)\]/)[1].toLowerCase();
}

/*
    ==============
    STATIC METHODS
    ==============
*/
type.isObject = function isObject(thing){
    return type(thing) === 'object';
}

type.isArray = function isArray(thing){
    if(typeof Array.isArray === 'function'){
        return Array.isArray(thing);
    }
    return type(thing) === 'array';
}

type.isFunction = function isFunction(thing){
    return type(thing) === 'function';
}

type.isString = function isString(thing){
    return type(thing) === 'string';
}

type.isNumber = function isNumber(thing){
    return type(thing) === 'number';
}

type.isNaN = isNaN;

type.isNull = function isNull(thing){
    return type(thing) === 'null';
}

type.isUndefined = function isUndefined(thing){
    return type(thing) === 'undefined';
}

type.isBoolean = function isBoolean(thing){
    return type(thing) === 'boolean';
}

type.isRegExp = function isRegExp(thing){
    return type(thing) === 'regexp';
}

type.isDate = function isDate(thing){
    return type(thing) === 'date';
}
