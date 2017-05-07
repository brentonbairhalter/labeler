webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n\n        console.log('making label box: ', this.props.fields);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            const labelVals = [];\n\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(n.values)) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n.values, function (k, v) {\n                    labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k + v, className: v === 'label' ? 'heading' : 'value' },\n                        k\n                    ));\n                });\n            } else {\n                labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { key: n.heading, className: n.heading },\n                    n.values\n                ));\n            }\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i },\n                labelVals\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtpbmcgbGFiZWwgYm94OiAnLCB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuZmllbGRzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFZhbHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKF8uaXNPYmplY3Qobi52YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgXy5lYWNoKG4udmFsdWVzLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVmFscy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrICsgdn0gY2xhc3NOYW1lPXt2ID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtuLmhlYWRpbmd9IGNsYXNzTmFtZT17bi5oZWFkaW5nfT57bi52YWx1ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhYmVsLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWxWYWxzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eyctdGl0bGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3RpdGxlJyl9PjxzcGFuPlRpdGxlPC9zcGFuPiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtZGF0ZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZGF0ZScpfT48c3Bhbj5EYXRlPC9zcGFuPiB7dGhpcy5nZXREYXRlKCl9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eydwcmV2LXVzZXIgJyArICB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd1c2VyJyl9PjxzcGFuPlVzZXI8L3NwYW4+IHt0aGlzLnByb3BzLnVzZXJ9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPE5pY1JvdyBuaWM9e3RoaXMucHJvcHMubmljfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCduaWMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8QmFzZVJvdyBiYXNlPXt0aGlzLnByb3BzLmJhc2V9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2Jhc2UnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFBHUm93IHBnPXt0aGlzLnByb3BzLnBnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdwZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnBnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFZHUm93IHZnPXt0aGlzLnByb3BzLnZnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd2ZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnZnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPEZsYXZvclJvd3MgZmxhdm9ycz17dGhpcy5wcm9wcy5mbGF2b3JzfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBMUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})