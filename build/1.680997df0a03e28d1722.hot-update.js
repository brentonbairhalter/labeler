webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        if (this.props.fields) {\n            console.log('labelsss: ', typeof this.props.fields);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, (n, i) => {\n                let labelRows = [];\n                // console.log('making label', n);\n\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                    console.log('in the label: ', k);\n                    let labelFields = [];\n                    let labelVals = [];\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k, (it, vl) => {\n                        console.log('in the field', it.item, it.values);\n\n                        if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(it.values)) {\n                            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(it.values, (v, ct) => {\n                                console.log('in the vals', v, ct);\n\n                                labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                    \"span\",\n                                    { key: v + ct + v },\n                                    v\n                                ));\n                            });\n                        } else {\n                            labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                                \"span\",\n                                { key: v + vl + v },\n                                it.values\n                            ));\n                        }\n\n                        labelFields.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: vl + v + i },\n                            it.item,\n                            \" \",\n                            labelVals\n                        ));\n                    });\n\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: i + v, className: 'label-row ' },\n                        k[0].field,\n                        \" \",\n                        labelFields\n                    ));\n                });\n\n                label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: i, className: \"label-wrapper\" },\n                    labelRows\n                ));\n            });\n        }\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFiZWxzc3M6ICcsIHR5cGVvZiB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgKG4sIGkpPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsJywgbik7XG5cbiAgICAgICAgICAgICAgICBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIGxhYmVsOiAnLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsRmllbGRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbFZhbHMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBfLmVhY2goaywgKGl0LCB2bCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIGZpZWxkJywgaXQuaXRlbSwgaXQudmFsdWVzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uaXNPYmplY3QoaXQudmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaChpdC52YWx1ZXMsICh2LCBjdCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB0aGUgdmFscycsIHYsIGN0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17diArIGN0ICsgdn0+e3Z9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt2ICsgdmwgKyB2fT57aXQudmFsdWVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEZpZWxkcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dmwgKyB2ICsgaX0+e2l0Lml0ZW19IHtsYWJlbFZhbHN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBsYWJlbFJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpICsgdn0gY2xhc3NOYW1lPXsnbGFiZWwtcm93ICd9PntrWzBdLmZpZWxkfSB7bGFiZWxGaWVsZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsYWJlbC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsUm93c31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQXpEQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})