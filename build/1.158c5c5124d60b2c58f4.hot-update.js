webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (r, l) => {\n                    const selName = r + 'Selection';\n                    labelBoxes[r] = [];\n\n                    console.log('selectedField::', r, l);\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (s, t) => {\n                        console.log('each selected: ', s, t);\n                        console.log('available: ', this.props.available[r][s]);\n                        labelBoxes[r].push({ name: r, value: this.props.available[r][s] });\n                    });\n                });\n                // console.log('labelBoxes: ', labelBoxes);\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('LABELBOXES:::> ', labelBoxes)\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXy5oYXModGhpcy5wcm9wcywgJ3NlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMnKSAmJiBfLmhhcyh0aGlzLnByb3BzLCAnYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAociwgbCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSByICsgJ1NlbGVjdGlvbic7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQm94ZXNbcl0gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRGaWVsZDo6JywgciwgbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSwgKHMsIHQpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VhY2ggc2VsZWN0ZWQ6ICcsIHMsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F2YWlsYWJsZTogJywgdGhpcy5wcm9wcy5hdmFpbGFibGVbcl1bc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tyXS5wdXNoKHtuYW1lOiByLCB2YWx1ZTogdGhpcy5wcm9wcy5hdmFpbGFibGVbcl1bc119KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xhYmVsQm94ZXM6ICcsIGxhYmVsQm94ZXMpO1xuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICB7Lyo8TGFiZWwgZmllbGRzPXtsYWJlbEJveGVzfS8+Ki99XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdMQUJFTEJPWEVTOjo6PiAnLCBsYWJlbEJveGVzKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUtBO0FBL0JBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})