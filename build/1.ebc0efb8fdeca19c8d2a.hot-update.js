webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (r, l) => {\n                    let labelBox = [];\n\n                    console.log('selectedField::', r);\n\n                    console.log('available:: ', this.props.available[r]);\n                    console.log('selections', this.props.selections);\n\n                    const selName = r + 'Selection';\n\n                    console.log('sn: ', selName);\n\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (s, t) => {\n                        console.log('each selected: ', s, t);\n                        labelBox[r] = {\n                            field: s,\n                            values: t\n                        };\n                    });\n\n                    console.log('the label BOX: ', labelBox);\n                });\n            };\n\n            // labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"div\", { id: \"elr_labels\", className: 'selected-template' });\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoXy5oYXModGhpcy5wcm9wcywgJ3NlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMnKSAmJiBfLmhhcyh0aGlzLnByb3BzLCAnYXZhaWxhYmxlJykpIHtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAociwgbCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEJveCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZEZpZWxkOjonLCByKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXZhaWxhYmxlOjogJywgdGhpcy5wcm9wcy5hdmFpbGFibGVbcl0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0aW9ucycsIHRoaXMucHJvcHMuc2VsZWN0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsTmFtZSA9IHIgKyAnU2VsZWN0aW9uJztcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc246ICcsIHNlbE5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0sIChzLCB0KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlYWNoIHNlbGVjdGVkOiAnLCBzLCB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQm94W3JdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlczogdFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBsYWJlbCBCT1g6ICcsIGxhYmVsQm94KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBsYWJlbEJveGVzLnB1c2gobGFiZWxCb3gpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICAgICAgey8qPExhYmVsIGZpZWxkcz17bGFiZWxCb3hlc30vPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQXpDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})