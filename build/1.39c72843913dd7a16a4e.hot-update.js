webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (r, l) => {\n                    const selName = r + 'Selection';\n                    labelBoxes[r] = [];\n\n                    console.log('going to loop these::', this.props.selections[selName]);\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], dpName => {\n                        console.log('each selected: ', dpName);\n                        console.log('available: ', this.props.available[r]);\n                        labelBoxes[r].push({ name: this.props.available[r], values: this.props.available[r] });\n                    });\n                });\n                // console.log('labelBoxes: ', labelBoxes);\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('LABELBOXES:::> ', labelBoxes)\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXy5oYXModGhpcy5wcm9wcywgJ3NlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMnKSAmJiBfLmhhcyh0aGlzLnByb3BzLCAnYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAociwgbCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSByICsgJ1NlbGVjdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQm94ZXNbcl0gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ29pbmcgdG8gbG9vcCB0aGVzZTo6JywgdGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdLCAoZHBOYW1lKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlYWNoIHNlbGVjdGVkOiAnLCBkcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F2YWlsYWJsZTogJywgdGhpcy5wcm9wcy5hdmFpbGFibGVbcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tyXS5wdXNoKHtuYW1lOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtyXSwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtyXX0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGFiZWxCb3hlczogJywgbGFiZWxCb3hlcyk7XG4gICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVscl9sYWJlbHNcIiBjbGFzc05hbWU9eydzZWxlY3RlZC10ZW1wbGF0ZSd9PlxuICAgICAgICAgICAgICAgIHsvKjxMYWJlbCBmaWVsZHM9e2xhYmVsQm94ZXN9Lz4qL31cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ0xBQkVMQk9YRVM6Ojo+ICcsIGxhYmVsQm94ZXMpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBS0E7QUEvQkE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})