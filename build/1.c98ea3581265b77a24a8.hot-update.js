webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 10,\n            labelBoxes = [],\n            sels = this.props.selections;\n\n        for (let i = 0; i <= labelCount; i++) {\n            // const e = sels[i];\n            console.log('looping num of label boxes: ', i);\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.recipe, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels, l) ? 'show' : 'hide';\n\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: l, className: 'col ' + l + ' ' + show },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { className: \"heading\" },\n                        l\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { item: n })\n                ));\n            });\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: '-title ' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Title\"\n                )\n            ),\n            labelBoxes,\n            console.log('selections: ', this.props.selections),\n            console.log('available: ', this.props.recipe)\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEwLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdLFxuICAgICAgICAgICAgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGUgPSBzZWxzW2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3BpbmcgbnVtIG9mIGxhYmVsIGJveGVzOiAnLCBpKTtcbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLnJlY2lwZSwgZnVuY3Rpb24obiwgbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3cgPSBfLmluY2x1ZGVzKHNlbHMsIGwpID8gJ3Nob3cnIDogJ2hpZGUnO1xuXG4gICAgICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bH0gY2xhc3NOYW1lPXsnY29sICcgKyBsICsgJyAnICsgc2hvd30+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntsfTwvc3Bhbj48YnIvPjxMYWJlbCBpdGVtPXtufS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jy10aXRsZSAnfT48c3Bhbj5UaXRsZTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7bGFiZWxCb3hlc31cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ3NlbGVjdGlvbnM6ICcsIHRoaXMucHJvcHMuc2VsZWN0aW9ucyl9XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdhdmFpbGFibGU6ICcsIHRoaXMucHJvcHMucmVjaXBlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQTFCQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})