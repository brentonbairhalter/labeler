webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        console.log('labels: ', this.props.fields);\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            let labelRows = [];\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                let labelVals = [];\n\n                if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(k.values)) {\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k.values, function (d, p) {\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: d + p, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: k.heading + i, className: 'label-row ' + k.heading },\n                        labelVals\n                    ));\n                } else {\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k.heading + i, className: k.heading },\n                        k.values\n                    ));\n                }\n            });\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: \"label-wrapper\" },\n                labelRows\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coJ2xhYmVsczogJywgdGhpcy5wcm9wcy5maWVsZHMpO1xuICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5maWVsZHMsIGZ1bmN0aW9uKG4sIGkpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgIF8uZWFjaChuLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsVmFscyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaXNPYmplY3Qoay52YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChrLnZhbHVlcywgZnVuY3Rpb24oZCwgcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxWYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtkICsgcH0gY2xhc3NOYW1lPXtwID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2suaGVhZGluZyArIGl9IGNsYXNzTmFtZT17J2xhYmVsLXJvdyAnICsgay5oZWFkaW5nfT57bGFiZWxWYWxzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrLmhlYWRpbmcgKyBpfSBjbGFzc05hbWU9e2suaGVhZGluZ30+e2sudmFsdWVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGFiZWwucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWxSb3dzfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8Rmxhdm9yUm93cyBmbGF2b3JzPXt7fX0gc2hvdz1cInRydWVcIiBzZWxlY3Rpb25zPXt9Lz4qL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUF2Q0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            let labelBox = [];\n\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (r, l) => {\n                    console.log('selectedField::', r);\n\n                    console.log('available:: ', this.props.available[r]);\n                    console.log('selections', this.props.selections);\n\n                    const selName = r + 'Selection';\n\n                    console.log('sn: ', selName);\n                    labelBox.push(r);\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (s, t) => {\n                        console.log('each selected: ', s, t);\n                        labelBox[r] = {\n                            field: s,\n                            values: t\n                        };\n                    });\n                });\n            };\n\n            // _.each(selectedFields, function(n, l) {\n            //     // const show = _.includes(sels.selectedFields, l);\n            //     const fields = available[l];\n            //\n            //     console.log('looping selected: ', available.user, l);\n            //\n            //     // if (show) {\n            //         labelBox.push(\n            //             {heading: l, values: n}\n            //         )\n            //     // }\n            // });\n            labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"div\", { id: \"elr_labels\", className: 'selected-template' });\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxCb3ggPSBbXTtcblxuICAgICAgICAgICAgaWYgKF8uaGFzKHRoaXMucHJvcHMsICdzZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzJykgJiYgXy5oYXModGhpcy5wcm9wcywgJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcywgKHIsIGwpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRGaWVsZDo6Jywgcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F2YWlsYWJsZTo6ICcsIHRoaXMucHJvcHMuYXZhaWxhYmxlW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbnMnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSByICsgJ1NlbGVjdGlvbic7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuOiAnLCBzZWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3gucHVzaChyKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdLCAocywgdCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWFjaCBzZWxlY3RlZDogJywgcywgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEJveFtyXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gXy5lYWNoKHNlbGVjdGVkRmllbGRzLCBmdW5jdGlvbihuLCBsKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc3Qgc2hvdyA9IF8uaW5jbHVkZXMoc2Vscy5zZWxlY3RlZEZpZWxkcywgbCk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZmllbGRzID0gYXZhaWxhYmxlW2xdO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnbG9vcGluZyBzZWxlY3RlZDogJywgYXZhaWxhYmxlLnVzZXIsIGwpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAvLyBpZiAoc2hvdykge1xuICAgICAgICAgICAgLy8gICAgICAgICBsYWJlbEJveC5wdXNoKFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAge2hlYWRpbmc6IGwsIHZhbHVlczogbn1cbiAgICAgICAgICAgIC8vICAgICAgICAgKVxuICAgICAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKGxhYmVsQm94KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVscl9sYWJlbHNcIiBjbGFzc05hbWU9eydzZWxlY3RlZC10ZW1wbGF0ZSd9PlxuICAgICAgICAgICAgICAgIHsvKjxMYWJlbCBmaWVsZHM9e2xhYmVsQm94ZXN9Lz4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBcERBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})