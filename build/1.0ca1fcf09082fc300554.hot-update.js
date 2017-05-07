webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        console.log('labels: ', this.props.fields);\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            let labelRows = [];\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                let labelVals = [];\n\n                if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(k.values)) {\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k.values, function (d, p) {\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: d + p, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: k.heading + i, className: 'label-row ' + k.heading },\n                        labelVals\n                    ));\n                } else {\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k.heading + i, className: k.heading },\n                        k.values\n                    ));\n                }\n            });\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: \"label-wrapper\" },\n                labelRows\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhYmVsczogJywgdGhpcy5wcm9wcy5maWVsZHMpO1xuICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5maWVsZHMsIGZ1bmN0aW9uKG4sIGkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgIF8uZWFjaChuLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsVmFscyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaXNPYmplY3Qoay52YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChrLnZhbHVlcywgZnVuY3Rpb24oZCwgcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxWYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtkICsgcH0gY2xhc3NOYW1lPXtwID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2suaGVhZGluZyArIGl9IGNsYXNzTmFtZT17J2xhYmVsLXJvdyAnICsgay5oZWFkaW5nfT57bGFiZWxWYWxzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrLmhlYWRpbmcgKyBpfSBjbGFzc05hbWU9e2suaGVhZGluZ30+e2sudmFsdWVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGFiZWwucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWxSb3dzfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8Rmxhdm9yUm93cyBmbGF2b3JzPXt7fX0gc2hvdz1cInRydWVcIiBzZWxlY3Rpb25zPXt9Lz4qL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUF2Q0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [],\n            sels = this.props.selections,\n            available = this.props.available;\n        console.log(available, sels);\n\n        for (let i = 1; i <= labelCount; i++) {\n            let labelBox = [];\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(available, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels.selectedFields, l);\n\n                if (show) {\n                    labelBox.push({ heading: l, values: n });\n                }\n            });\n            labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW10sXG4gICAgICAgICAgICBzZWxzID0gdGhpcy5wcm9wcy5zZWxlY3Rpb25zLFxuICAgICAgICAgICAgYXZhaWxhYmxlID0gdGhpcy5wcm9wcy5hdmFpbGFibGU7XG4gICAgICAgIGNvbnNvbGUubG9nKGF2YWlsYWJsZSwgc2Vscyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxCb3ggPSBbXTtcblxuICAgICAgICAgICAgXy5lYWNoKGF2YWlsYWJsZSwgZnVuY3Rpb24obiwgbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3cgPSBfLmluY2x1ZGVzKHNlbHMuc2VsZWN0ZWRGaWVsZHMsIGwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3gucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkaW5nOiBsLCB2YWx1ZXM6IG59XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhYmVsQm94ZXMucHVzaChsYWJlbEJveCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZmllbGRzPXtsYWJlbEJveGVzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBNUJBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})