webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let sels = this.props.selections,\n            labels = [];\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            labels.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: 'col ' + i + ' ' + show },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"heading\" },\n                    i\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"br\", null),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlavorItem, { item: n })\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\"div\", { className: this.state.templateSelection });\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucyxcbiAgICAgICAgICAgIGxhYmVscyA9IFtdO1xuXG4gICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgbGFiZWxzLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17J2NvbCAnICsgaSArICcgJyArIHNob3d9PjxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57aX08L3NwYW4+PGJyLz48Rmxhdm9ySXRlbSBpdGVtPXtufS8+PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS50ZW1wbGF0ZVNlbGVjdGlvbn0+XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eyctdGl0bGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3RpdGxlJyl9PjxzcGFuPlRpdGxlPC9zcGFuPiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtZGF0ZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZGF0ZScpfT48c3Bhbj5EYXRlPC9zcGFuPiB7dGhpcy5nZXREYXRlKCl9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eydwcmV2LXVzZXIgJyArICB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd1c2VyJyl9PjxzcGFuPlVzZXI8L3NwYW4+IHt0aGlzLnByb3BzLnVzZXJ9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPE5pY1JvdyBuaWM9e3RoaXMucHJvcHMubmljfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCduaWMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8QmFzZVJvdyBiYXNlPXt0aGlzLnByb3BzLmJhc2V9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2Jhc2UnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFBHUm93IHBnPXt0aGlzLnByb3BzLnBnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdwZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnBnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFZHUm93IHZnPXt0aGlzLnByb3BzLnZnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd2ZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnZnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPEZsYXZvclJvd3MgZmxhdm9ycz17dGhpcy5wcm9wcy5mbGF2b3JzfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBdkJBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 3,\n            labelBoxes = [],\n            sels = this.props.selections;\n\n        for (let i = 0; i <= labelCount; i++) {\n            // const e = sels[i];\n            console.log('looping num of label boxes: ', i);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.recipe, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels.selectedFields, l);\n\n                console.log('looping over recipe (n): ', n);\n                console.log('looping over recipe (l): ', l);\n                if (show) {\n                    labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: i + l },\n                        n\n                    ));\n                } else {\n                    console.log('dont show: ', sels.selectedFields, l);\n                }\n            });\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            labelBoxes\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDMsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW10sXG4gICAgICAgICAgICBzZWxzID0gdGhpcy5wcm9wcy5zZWxlY3Rpb25zO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy8gY29uc3QgZSA9IHNlbHNbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9vcGluZyBudW0gb2YgbGFiZWwgYm94ZXM6ICcsIGkpO1xuXG4gICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5yZWNpcGUsIGZ1bmN0aW9uKG4sIGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93ID0gXy5pbmNsdWRlcyhzZWxzLnNlbGVjdGVkRmllbGRzLCBsKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb29waW5nIG92ZXIgcmVjaXBlIChuKTogJywgbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb3Bpbmcgb3ZlciByZWNpcGUgKGwpOiAnLCBsKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aSArIGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxMYWJlbCBmaWVsZHM9e259Lz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbnQgc2hvdzogJywgc2Vscy5zZWxlY3RlZEZpZWxkcywgbCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVscl9sYWJlbHNcIiBjbGFzc05hbWU9eydzZWxlY3RlZC10ZW1wbGF0ZSd9PlxuICAgICAgICAgICAgICAgIHtsYWJlbEJveGVzfVxuICAgICAgICAgICAgICAgIHsvKntjb25zb2xlLmxvZygnc2VsZWN0aW9uczogJywgdGhpcy5wcm9wcy5zZWxlY3Rpb25zKX0qL31cbiAgICAgICAgICAgICAgICB7Lyp7Y29uc29sZS5sb2coJ2F2YWlsYWJsZTogJywgdGhpcy5wcm9wcy5yZWNpcGUpfSovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQXBDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})