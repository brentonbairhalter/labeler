webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        console.log('making label: ', this.props.fields);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            let labelVals = [];\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(k.values)) {\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k.values, function (d, p) {\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"div\",\n                            { key: d + p, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n                } else {\n                    labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: k.heading + i, className: k.heading },\n                        k.values\n                    ));\n                }\n            });\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: \"label-wrapper\" },\n                labelVals\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsOiAnLCB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuZmllbGRzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxWYWxzID0gW107XG4gICAgICAgICAgICBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KGsudmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2goay52YWx1ZXMsIGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVmFscy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkICsgcH0gY2xhc3NOYW1lPXtwID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2R9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrLmhlYWRpbmcgKyBpfSBjbGFzc05hbWU9e2suaGVhZGluZ30+e2sudmFsdWVzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsYWJlbC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbFZhbHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWwuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFsQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})