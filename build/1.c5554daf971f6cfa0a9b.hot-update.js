webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        if (this.props.fields) {\n            console.log('labelsss: ', typeof this.props.fields);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, (n, i) => {\n                let labelRows = [];\n                // console.log('making label', n);\n\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                    console.log('in the label: ', k[0]);\n                    let labelVals = [];\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k, (it, vl) => {\n                        console.log('in the field', it);\n\n                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(it.values, (val, x) => {\n                            console.log('val: ', val);\n                            labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                \"span\",\n                                { key: i + x },\n                                val\n                            ));\n                        });\n                    });\n\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: i + v, className: 'label-row ' },\n                        k[0].field,\n                        \" \",\n                        labelVals\n                    ));\n                });\n\n                label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: i, className: \"label-wrapper\" },\n                    labelRows\n                ));\n            });\n        }\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFiZWxzc3M6ICcsIHR5cGVvZiB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgKG4sIGkpPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsJywgbik7XG5cbiAgICAgICAgICAgICAgICBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIGxhYmVsOiAnLCBrWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsVmFscyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChrLCAoaXQsIHZsKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB0aGUgZmllbGQnLCBpdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChpdC52YWx1ZXMsICh2YWwsIHgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWw6ICcsIHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxWYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aSArIHh9Pnt2YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2kgKyB2fSBjbGFzc05hbWU9eydsYWJlbC1yb3cgJ30+e2tbMF0uZmllbGR9IHtsYWJlbFZhbHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsYWJlbC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsUm93c31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQTlDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})