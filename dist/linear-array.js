!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.lineArr=r():e.lineArr=r()}(this,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(...e){for(let r=0;r<e.length;r++){if(!Number.isFinite(e[r]))throw new TypeError("expected a number");if(!Number.isInteger(e[r]))throw new Error("expected an integer");if(!Number.isSafeInteger(e[r]))throw new Error("value above safe integer");if(e[r]<0)throw new Error("expected a number greater or equal to 0")}}function o(...e){for(let r=0;r<e.length;r++)if(!Array.isArray(e[r]))throw new Error("expected an array")}function u(e){o(e);try{if(n(...e),0!==e[0])return!1;for(let r=1;r<e.length;r++)if(e[r]-e[r-1]!=1)return!1;return!0}catch(e){return!1}}function f(e,r=!1){n(e),function(...e){for(let r=0;r<e.length;r++)if("boolean"!=typeof e[r])throw new Error("expected a boolean")}(r);const t=new Array(e);for(let n=0;n<(r?e+1:e);n++)t[n]=n;return t}function i(e,r=1,t=0){o(e),n(r,t);try{if(n(...e),e[0]!==t)return!1;for(let t=1;t<e.length;t++)if(e[t]-e[t-1]!==r)return!1;return!0}catch(e){return!1}}function c(e,r=1,t=0){n(e,r,t);const o=new Array(e);for(let n=0;n<e;n++)o[n]=n*r+t;return o}
/*!
 * linear-array <https://github.com/ispoljari/linear-array>
 *
 * Copyright (c) 2020, Ivan Spoljaric.
 * Released under the MIT License.
 */t.r(r),t.d(r,"isSeqNaturalNumbers",(function(){return u})),t.d(r,"fillSeqNaturalNumbers",(function(){return f})),t.d(r,"isStepSequenceWithOffset",(function(){return i})),t.d(r,"fillStepSequenceWithOffset",(function(){return c}))}])}));