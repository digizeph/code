"use strict";var _ramda=require("./ramda");Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"memoizeWith",{enumerable:!0,get:function get(){return _ramda.memoizeWith}}),Object.defineProperty(exports,"identity",{enumerable:!0,get:function get(){return _ramda.identity}}),Object.defineProperty(exports,"pick",{enumerable:!0,get:function get(){return _ramda.pick}}),exports.classWriter=exports.hasOwnProperty=exports.cutLeft=exports.commonKeys=exports.copy=exports.repeat=void 0;function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}var commonKeys=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=[];for(var d in a)d in b&&c.push(d);return c}};exports.commonKeys=commonKeys;var cutLeft=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:" ";return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";return b.replace(new RegExp("^["+a+"]+"),"")}};exports.cutLeft=cutLeft,exports.cutLeft=cutLeft=(0,_ramda.memoizeWith)(_ramda.identity,cutLeft);var repeat=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:1;1e3<b&&console.warn("'repeat' may pause your system");for(var c=0;c<b;c++)a()}};exports.repeat=repeat;var objectFromArray=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[];return Object.assign.apply(Object,[{}].concat(_toConsumableArray(a)))},copy=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return 1e3<b&&console.warn("'copy' may pause your system"),Array(b).fill(a)}};exports.copy=copy;var hasOwnProperty=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";return Object.prototype.hasOwnProperty.call(a,b)}};exports.hasOwnProperty=hasOwnProperty;var strRemover=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"undefined";return a.split(" ").filter(function(a){return a!==b}).join(" ")}};strRemover=(0,_ramda.memoizeWith)(_ramda.identity,strRemover);var propWriter=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";return hasOwnProperty(a,b)&&a[b]}},sharedClass=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return propWriter(a)("class")+" "+propWriter(a)("className")},specificClass=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return propWriter(a)("class")+" "+propWriter(a)("className")},classWriter=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return strRemover([specificClass(a),sharedClass(b)].join(" "))()}};exports.classWriter=classWriter;