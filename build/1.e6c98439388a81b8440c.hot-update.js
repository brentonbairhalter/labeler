webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            let labelBox = [];\n\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (r, l) => {\n                    console.log('selectedField::', r);\n\n                    console.log('available:: ', this.props.available[r]);\n                    console.log('selections', this.props.selections);\n\n                    const selName = r + 'Selection';\n\n                    console.log('sn: ', selName);\n                    labelBox.push(r);\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (s, t) => {\n                        console.log('each selected: ', s, t);\n                        labelBox[r].push({\n                            field: s,\n                            values: t\n                        });\n                    });\n                });\n            };\n\n            // _.each(selectedFields, function(n, l) {\n            //     // const show = _.includes(sels.selectedFields, l);\n            //     const fields = available[l];\n            //\n            //     console.log('looping selected: ', available.user, l);\n            //\n            //     // if (show) {\n            //         labelBox.push(\n            //             {heading: l, values: n}\n            //         )\n            //     // }\n            // });\n            labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxCb3ggPSBbXTtcblxuICAgICAgICAgICAgaWYgKF8uaGFzKHRoaXMucHJvcHMsICdzZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzJykgJiYgXy5oYXModGhpcy5wcm9wcywgJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcywgKHIsIGwpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRGaWVsZDo6Jywgcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F2YWlsYWJsZTo6ICcsIHRoaXMucHJvcHMuYXZhaWxhYmxlW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGlvbnMnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSByICsgJ1NlbGVjdGlvbic7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NuOiAnLCBzZWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3gucHVzaChyKTtcbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSwgKHMsIHQpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VhY2ggc2VsZWN0ZWQ6ICcsIHMsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hbcl0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiB0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBfLmVhY2goc2VsZWN0ZWRGaWVsZHMsIGZ1bmN0aW9uKG4sIGwpIHtcbiAgICAgICAgICAgIC8vICAgICAvLyBjb25zdCBzaG93ID0gXy5pbmNsdWRlcyhzZWxzLnNlbGVjdGVkRmllbGRzLCBsKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBmaWVsZHMgPSBhdmFpbGFibGVbbF07XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdsb29waW5nIHNlbGVjdGVkOiAnLCBhdmFpbGFibGUudXNlciwgbCk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIC8vIGlmIChzaG93KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGxhYmVsQm94LnB1c2goXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB7aGVhZGluZzogbCwgdmFsdWVzOiBufVxuICAgICAgICAgICAgLy8gICAgICAgICApXG4gICAgICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBsYWJlbEJveGVzLnB1c2gobGFiZWxCb3gpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICAgICAgPExhYmVsIGZpZWxkcz17bGFiZWxCb3hlc30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFuREE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})