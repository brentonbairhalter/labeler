webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n\n        // console.log('making label box: ', this.props.fields);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            const labelVals = [];\n\n            console.log('making label content: ', n);\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(k.values)) {\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k.values, function (d, p) {\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: d + p, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n                } else {\n                    labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k.heading + i, className: k.heading },\n                        k.values\n                    ));\n                }\n            });\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: \"label-wrapper\" },\n                labelVals\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFtdO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYWtpbmcgbGFiZWwgYm94OiAnLCB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuZmllbGRzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFZhbHMgPSBbXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21ha2luZyBsYWJlbCBjb250ZW50OiAnLCBuKTtcbiAgICAgICAgICAgIF8uZWFjaChuLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uaXNPYmplY3Qoay52YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZWFjaChrLnZhbHVlcywgZnVuY3Rpb24oZCwgcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxWYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtkICsgcH0gY2xhc3NOYW1lPXtwID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2R9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxWYWxzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2suaGVhZGluZyArIGl9IGNsYXNzTmFtZT17ay5oZWFkaW5nfT57ay52YWx1ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsYWJlbC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbFZhbHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17Jy10aXRsZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndGl0bGUnKX0+PHNwYW4+VGl0bGU8L3NwYW4+IHt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXsncHJldi1kYXRlICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdkYXRlJyl9PjxzcGFuPkRhdGU8L3NwYW4+IHt0aGlzLmdldERhdGUoKX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdXNlciAnICsgIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3VzZXInKX0+PHNwYW4+VXNlcjwvc3Bhbj4ge3RoaXMucHJvcHMudXNlcn08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TmljUm93IG5pYz17dGhpcy5wcm9wcy5uaWN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ25pYycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxCYXNlUm93IGJhc2U9e3RoaXMucHJvcHMuYmFzZX0gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnYmFzZScpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8UEdSb3cgcGc9e3RoaXMucHJvcHMucGd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3BnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUucGdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8VkdSb3cgdmc9e3RoaXMucHJvcHMudmd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3ZnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUudmdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8Rmxhdm9yUm93cyBmbGF2b3JzPXt0aGlzLnByb3BzLmZsYXZvcnN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2ZsYXZvcnMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWwuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUE3Q0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})