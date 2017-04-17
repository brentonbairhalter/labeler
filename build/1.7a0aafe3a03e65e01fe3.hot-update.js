webpackHotUpdate(1,{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(39);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(295);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let sels = this.props.selections;\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.flavors, function (n, i) {\n            labels.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: 'col ' + i + ' ' + show },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"heading\" },\n                    i\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlavorItem, { item: n })\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: this.state.templateSelection },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: '-title ' + this.showSelectedField('title') },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Title\"\n                ),\n                \" \",\n                this.props.title\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHNlbHMgPSB0aGlzLnByb3BzLnNlbGVjdGlvbnM7XG5cbiAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuZmxhdm9ycywgZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgbGFiZWxzLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17J2NvbCAnICsgaSArICcgJyArIHNob3d9PjxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57aX08L3NwYW4+PGJyLz48Rmxhdm9ySXRlbSBpdGVtPXtufS8+PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyctdGl0bGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3RpdGxlJyl9PjxzcGFuPlRpdGxlPC9zcGFuPiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtZGF0ZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZGF0ZScpfT48c3Bhbj5EYXRlPC9zcGFuPiB7dGhpcy5nZXREYXRlKCl9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eydwcmV2LXVzZXIgJyArICB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd1c2VyJyl9PjxzcGFuPlVzZXI8L3NwYW4+IHt0aGlzLnByb3BzLnVzZXJ9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPE5pY1JvdyBuaWM9e3RoaXMucHJvcHMubmljfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCduaWMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8QmFzZVJvdyBiYXNlPXt0aGlzLnByb3BzLmJhc2V9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2Jhc2UnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFBHUm93IHBnPXt0aGlzLnByb3BzLnBnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdwZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnBnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFZHUm93IHZnPXt0aGlzLnByb3BzLnZnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd2ZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnZnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPEZsYXZvclJvd3MgZmxhdm9ycz17dGhpcy5wcm9wcy5mbGF2b3JzfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVUE7QUFyQkE7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(39);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(63);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let sels = this.props.selections;\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.flavors, function (n, i) {\n            labels.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: 'col ' + i + ' ' + show },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"heading\" },\n                    i\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlavorItem, { item: n })\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: this.state.templateSelection },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: '-title ' + this.showSelectedField('title') },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    null,\n                    \"Title\"\n                ),\n                \" \",\n                this.props.title\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucztcblxuICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5mbGF2b3JzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBsYWJlbHMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXsnY29sICcgKyBpICsgJyAnICsgc2hvd30+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZ1wiPntpfTwvc3Bhbj48YnIvPjxGbGF2b3JJdGVtIGl0ZW09e259Lz48L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnRlbXBsYXRlU2VsZWN0aW9ufT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jy10aXRsZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndGl0bGUnKX0+PHNwYW4+VGl0bGU8L3NwYW4+IHt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXsncHJldi1kYXRlICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdkYXRlJyl9PjxzcGFuPkRhdGU8L3NwYW4+IHt0aGlzLmdldERhdGUoKX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdXNlciAnICsgIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3VzZXInKX0+PHNwYW4+VXNlcjwvc3Bhbj4ge3RoaXMucHJvcHMudXNlcn08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TmljUm93IG5pYz17dGhpcy5wcm9wcy5uaWN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ25pYycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxCYXNlUm93IGJhc2U9e3RoaXMucHJvcHMuYmFzZX0gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnYmFzZScpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8UEdSb3cgcGc9e3RoaXMucHJvcHMucGd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3BnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUucGdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8VkdSb3cgdmc9e3RoaXMucHJvcHMudmd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3ZnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUudmdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8Rmxhdm9yUm93cyBmbGF2b3JzPXt0aGlzLnByb3BzLmZsYXZvcnN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2ZsYXZvcnMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVUE7QUFyQkE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})