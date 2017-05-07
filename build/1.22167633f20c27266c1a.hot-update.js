webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor(props) {\n        super(props);\n    }\n\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [],\n            sels = this.props.selections,\n            available = this.props.available;\n\n        for (let i = 1; i <= labelCount; i++) {\n            let labelBox = [];\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.available, function (n, l) {\n                console.log('populating labels: ', sels.selectedFields);\n                console.log('populating labels: ', this.props.available);\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels.selectedFields, l);\n\n                // console.log(sels);\n\n                if (show) {\n                    labelBox.push({ heading: l, values: n });\n                }\n            });\n            labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"div\", { id: \"elr_labels\", className: 'selected-template' });\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbENvdW50ID0gdGhpcy5wcm9wcy5jb3VudCB8fCAxLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdLFxuICAgICAgICAgICAgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucyxcbiAgICAgICAgICAgIGF2YWlsYWJsZSA9IHRoaXMucHJvcHMuYXZhaWxhYmxlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxhYmVsQm94ID0gW107XG5cbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmF2YWlsYWJsZSwgZnVuY3Rpb24obiwgbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwb3B1bGF0aW5nIGxhYmVsczogJywgc2Vscy5zZWxlY3RlZEZpZWxkcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BvcHVsYXRpbmcgbGFiZWxzOiAnLCB0aGlzLnByb3BzLmF2YWlsYWJsZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9IF8uaW5jbHVkZXMoc2Vscy5zZWxlY3RlZEZpZWxkcywgbCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxzKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQm94LnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGluZzogbCwgdmFsdWVzOiBufVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYWJlbEJveGVzLnB1c2gobGFiZWxCb3gpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBbENBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})