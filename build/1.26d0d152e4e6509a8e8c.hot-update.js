webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        // console.log('making label: ', this.props.fields);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            let labelRows = [];\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                let labelVals = [];\n\n                if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(k.values)) {\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k.values, function (d, p) {\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: d + p, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: k.heading + i, className: 'label-row ' + k.heading },\n                        labelVals\n                    ));\n                } else {\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k.heading + i, className: k.heading },\n                        k.values\n                    ));\n                }\n            });\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: \"label-wrapper\" },\n                labelRows\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__[\"a\" /* default */], { flavors: this.props.fields.flavors })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21ha2luZyBsYWJlbDogJywgdGhpcy5wcm9wcy5maWVsZHMpO1xuXG4gICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgbGV0IGxhYmVsUm93cyA9IFtdO1xuICAgICAgICAgICAgXy5lYWNoKG4sIGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxWYWxzID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5pc09iamVjdChrLnZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKGsudmFsdWVzLCBmdW5jdGlvbihkLCBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2QgKyBwfSBjbGFzc05hbWU9e3AgPT09ICdsYWJlbCcgPyAnaGVhZGluZycgOiAndmFsdWUnfT57ZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ay5oZWFkaW5nICsgaX0gY2xhc3NOYW1lPXsnbGFiZWwtcm93ICcgKyBrLmhlYWRpbmd9PntsYWJlbFZhbHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxSb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2suaGVhZGluZyArIGl9IGNsYXNzTmFtZT17ay5oZWFkaW5nfT57ay52YWx1ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsYWJlbC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbFJvd3N9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8Rmxhdm9yUm93cyBmbGF2b3JzPXt0aGlzLnByb3BzLmZpZWxkcy5mbGF2b3JzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUF4Q0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [],\n            sels = this.props.selections,\n            available = this.props.available;\n\n        for (let i = 1; i <= labelCount; i++) {\n            let labelBox = [];\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(available, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels.selectedFields, l);\n\n                if (show) {\n                    labelBox.push({ heading: l, values: n });\n                }\n            });\n            labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW10sXG4gICAgICAgICAgICBzZWxzID0gdGhpcy5wcm9wcy5zZWxlY3Rpb25zLFxuICAgICAgICAgICAgYXZhaWxhYmxlID0gdGhpcy5wcm9wcy5hdmFpbGFibGU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxCb3ggPSBbXTtcblxuICAgICAgICAgICAgXy5lYWNoKGF2YWlsYWJsZSwgZnVuY3Rpb24obiwgbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3cgPSBfLmluY2x1ZGVzKHNlbHMuc2VsZWN0ZWRGaWVsZHMsIGwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3gucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkaW5nOiBsLCB2YWx1ZXM6IG59XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhYmVsQm94ZXMucHVzaChsYWJlbEJveCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZmllbGRzPXtsYWJlbEJveGVzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQTNCQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})