webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 10,\n            labelBoxes = [],\n            sels = this.props.selections;\n\n        for (let i = 0; i <= labelCount; i++) {\n            // const e = sels[i];\n            console.log('looping num of label boxes: ', i);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.recipe, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels, l) ? 'show' : 'hide';\n\n                console.log('looping over recipe (n): ', n);\n                console.log('looping over recipe (l): ', l);\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: i + l, className: 'col ' + l + ' ' + show },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { className: \"heading\" },\n                        l\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { item: n })\n                ));\n            });\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: '-title ' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Title\"\n                )\n            ),\n            labelBoxes,\n            console.log('selections: ', this.props.selections),\n            console.log('available: ', this.props.recipe)\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEwLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdLFxuICAgICAgICAgICAgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGUgPSBzZWxzW2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3BpbmcgbnVtIG9mIGxhYmVsIGJveGVzOiAnLCBpKTtcblxuICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMucmVjaXBlLCBmdW5jdGlvbihuLCBsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9IF8uaW5jbHVkZXMoc2VscywgbCkgPyAnc2hvdycgOiAnaGlkZSc7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9vcGluZyBvdmVyIHJlY2lwZSAobik6ICcsIG4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb29waW5nIG92ZXIgcmVjaXBlIChsKTogJywgbCk7XG4gICAgICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIGx9IGNsYXNzTmFtZT17J2NvbCAnICsgbCArICcgJyArIHNob3d9PjxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bH08L3NwYW4+PGJyLz48TGFiZWwgaXRlbT17bn0vPjwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyctdGl0bGUgJ30+PHNwYW4+VGl0bGU8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAge2xhYmVsQm94ZXN9XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdzZWxlY3Rpb25zOiAnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnMpfVxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnYXZhaWxhYmxlOiAnLCB0aGlzLnByb3BzLnJlY2lwZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUE3QkE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})