!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["antd","classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactAntSelect=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactAntSelect=t(e.antd,e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,o,a){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(7),d=n(f),y=r(6),b=n(y),m=r(3),v=n(m),h=r(4),x=(n(h),r(5)),j=(n(x),r(2)),O=(s=c=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.items,n=o(e,["className","items"]);return d.default.createElement(j.Select,p({},n,{className:(0,v.default)("react-ant-select",t)}),r.length>0&&r.map(function(e,t){return d.default.createElement(j.Select.Option,{key:e.value,value:e.value},e.text)}))}}],[{key:"build",value:function(e,t){return e.map(function(e,r){var n=t?e:r;return{text:e,value:n}})}}]),t}(f.Component),c.propTypes={className:b.default.string,placeholder:b.default.string,items:b.default.array},c.defaultProps={items:[],placeholder:"请选择"},s);t.default=O},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-ant-select.js.map