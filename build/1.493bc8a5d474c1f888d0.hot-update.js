webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let sels = this.props.selections;\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.flavors, function (n, i) {\n            labels.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: 'col ' + i + ' ' + show },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"heading\" },\n                    i\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlavorItem, { item: n })\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: this.state.templateSelection },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: '-title ' + this.showSelectedField('title') },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Title\"\n                ),\n                \" \",\n                this.props.title\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucztcblxuICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5mbGF2b3JzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBsYWJlbHMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXsnY29sICcgKyBpICsgJyAnICsgc2hvd30+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntpfTwvc3Bhbj48YnIvPjxGbGF2b3JJdGVtIGl0ZW09e259Lz48L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRlbXBsYXRlU2VsZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jy10aXRsZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndGl0bGUnKX0+PHNwYW4+VGl0bGU8L3NwYW4+IHt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXsncHJldi1kYXRlICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdkYXRlJyl9PjxzcGFuPkRhdGU8L3NwYW4+IHt0aGlzLmdldERhdGUoKX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdXNlciAnICsgIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3VzZXInKX0+PHNwYW4+VXNlcjwvc3Bhbj4ge3RoaXMucHJvcHMudXNlcn08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TmljUm93IG5pYz17dGhpcy5wcm9wcy5uaWN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ25pYycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxCYXNlUm93IGJhc2U9e3RoaXMucHJvcHMuYmFzZX0gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnYmFzZScpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8UEdSb3cgcGc9e3RoaXMucHJvcHMucGd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3BnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUucGdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8VkdSb3cgdmc9e3RoaXMucHJvcHMudmd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3ZnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUudmdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8Rmxhdm9yUm93cyBmbGF2b3JzPXt0aGlzLnByb3BzLmZsYXZvcnN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2ZsYXZvcnMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVUE7QUFyQkE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 10,\n            labelBoxes = [],\n            sels = this.props.selections;\n\n        for (let i = 0; i <= labelCount; i++) {\n            // const e = sels[i];\n            console.log('looping num of label boxes: ', i);\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.recipe, function (n, i) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels, i) ? 'show' : 'hide';\n\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { key: i, className: 'col ' + i + ' ' + show },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { className: \"heading\" },\n                        i\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { item: n })\n                ));\n            });\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: '-title ' },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Title\"\n                )\n            ),\n            labelBoxes,\n            console.log('selections: ', this.props.selections),\n            console.log('available: ', this.props.recipe)\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEwLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdLFxuICAgICAgICAgICAgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGUgPSBzZWxzW2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3BpbmcgbnVtIG9mIGxhYmVsIGJveGVzOiAnLCBpKTtcbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLnJlY2lwZSwgZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNob3cgPSBfLmluY2x1ZGVzKHNlbHMsIGkpID8gJ3Nob3cnIDogJ2hpZGUnO1xuXG4gICAgICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXsnY29sICcgKyBpICsgJyAnICsgc2hvd30+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntpfTwvc3Bhbj48YnIvPjxMYWJlbCBpdGVtPXtufS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jy10aXRsZSAnfT48c3Bhbj5UaXRsZTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7bGFiZWxCb3hlc31cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ3NlbGVjdGlvbnM6ICcsIHRoaXMucHJvcHMuc2VsZWN0aW9ucyl9XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdhdmFpbGFibGU6ICcsIHRoaXMucHJvcHMucmVjaXBlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQTFCQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})