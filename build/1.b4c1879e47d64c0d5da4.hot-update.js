webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        if (this.props.fields) {\n            console.log('labelsss: ', typeof this.props.fields);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, (n, i) => {\n                let labelRows = [];\n                console.log('making label', n);\n\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                    console.log('in the label: ', k);\n                    let labelVals = [];\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k, (it, vl) => {\n                        console.log('in the field', it, vl);\n\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: k + it, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n\n                    // if (_.isObject(k.values)) {\n                    //     _.each(k.values, function(d, p) {\n\n                    //     });\n                    //     labelRows.push(\n                    //         <div key={k.heading + i} className={'label-row ' + k.heading}>{labelVals}</div>\n                    //     );\n                    // } else {\n                    //     labelRows.push(\n                    //         <span key={k.heading + i} className={k.heading}>{k.values}</span>\n                    //     );\n                    // }\n                });\n\n                label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: i, className: \"label-wrapper\" },\n                    labelRows\n                ));\n            });\n        }\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFiZWxzc3M6ICcsIHR5cGVvZiB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgKG4sIGkpPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsJywgbik7XG5cbiAgICAgICAgICAgICAgICBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gdGhlIGxhYmVsOiAnLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsVmFscyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChrLCAoaXQsIHZsKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB0aGUgZmllbGQnLCBpdCwgdmwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2sgKyBpdH0gY2xhc3NOYW1lPXtwID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoXy5pc09iamVjdChrLnZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIF8uZWFjaChrLnZhbHVlcywgZnVuY3Rpb24oZCwgcCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYga2V5PXtrLmhlYWRpbmcgKyBpfSBjbGFzc05hbWU9eydsYWJlbC1yb3cgJyArIGsuaGVhZGluZ30+e2xhYmVsVmFsc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsYWJlbFJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8c3BhbiBrZXk9e2suaGVhZGluZyArIGl9IGNsYXNzTmFtZT17ay5oZWFkaW5nfT57ay52YWx1ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGFiZWwucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbFJvd3N9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBbkRBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})