webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        if (this.props.fields) {\n            console.log('labelsss: ', typeof this.props.fields);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, (n, i) => {\n                let labelRows = [];\n                // console.log('making label', n);\n\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                    console.log('in the label: ', k);\n                    let labelVals = [];\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k, (it, vl) => {\n                        console.log('in the field', it.values);\n\n                        // _.each(it, (val, x)=> {\n                        //     console.log('val: ', val);\n                        //     // labelVals.push(\n                        //     //     <span key={i + v + i + x}>{val}</span>\n                        //     // );\n                        // });\n\n                    });\n\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: i + v, className: 'label-row ' },\n                        k[0].field,\n                        \" \",\n                        labelVals\n                    ));\n                });\n\n                label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: i, className: \"label-wrapper\" },\n                    labelRows\n                ));\n            });\n        }\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFiZWxzc3M6ICcsIHR5cGVvZiB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgKG4sIGkpPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsJywgbik7XG5cbiAgICAgICAgICAgICAgICBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIGxhYmVsOiAnLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsVmFscyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChrLCAoaXQsIHZsKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB0aGUgZmllbGQnLCBpdC52YWx1ZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfLmVhY2goaXQsICh2YWwsIHgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd2YWw6ICcsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gbGFiZWxWYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIDxzcGFuIGtleT17aSArIHYgKyBpICsgeH0+e3ZhbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIHZ9IGNsYXNzTmFtZT17J2xhYmVsLXJvdyAnfT57a1swXS5maWVsZH0ge2xhYmVsVmFsc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGxhYmVsLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWxSb3dzfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWwuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQTlDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})