webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let label = [];\n\n        console.log('making label box: ', this.props.fields);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"heading\" },\n                    n.heading\n                ),\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"values\" },\n                    n.values\n                )\n            ));\n        });\n\n        // if (_.isObject(this.props.values)) {\n        //\n        // } else {\n        //     //@TODO: helper for template\n        //     label.push(\n        //         <div key={this.props.field}>\n        //             <span className=\"heading\">{this.props.field}</span>\n        //             <span className=\"values\">{this.props.values}</span>\n        //         </div>\n        //     )\n        // }\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsIGJveDogJywgdGhpcy5wcm9wcy5maWVsZHMpO1xuXG4gICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgbGFiZWwucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmdcIj57bi5oZWFkaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVzXCI+e24udmFsdWVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaWYgKF8uaXNPYmplY3QodGhpcy5wcm9wcy52YWx1ZXMpKSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAvL0BUT0RPOiBoZWxwZXIgZm9yIHRlbXBsYXRlXG4gICAgICAgIC8vICAgICBsYWJlbC5wdXNoKFxuICAgICAgICAvLyAgICAgICAgIDxkaXYga2V5PXt0aGlzLnByb3BzLmZpZWxkfT5cbiAgICAgICAgLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZ1wiPnt0aGlzLnByb3BzLmZpZWxkfTwvc3Bhbj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVzXCI+e3RoaXMucHJvcHMudmFsdWVzfTwvc3Bhbj5cbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17Jy10aXRsZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndGl0bGUnKX0+PHNwYW4+VGl0bGU8L3NwYW4+IHt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXsncHJldi1kYXRlICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdkYXRlJyl9PjxzcGFuPkRhdGU8L3NwYW4+IHt0aGlzLmdldERhdGUoKX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdXNlciAnICsgIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3VzZXInKX0+PHNwYW4+VXNlcjwvc3Bhbj4ge3RoaXMucHJvcHMudXNlcn08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8TmljUm93IG5pYz17dGhpcy5wcm9wcy5uaWN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ25pYycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLm5pY1NlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxCYXNlUm93IGJhc2U9e3RoaXMucHJvcHMuYmFzZX0gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnYmFzZScpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmJhc2VTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8UEdSb3cgcGc9e3RoaXMucHJvcHMucGd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3BnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUucGdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8VkdSb3cgdmc9e3RoaXMucHJvcHMudmd9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3ZnJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUudmdTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8Rmxhdm9yUm93cyBmbGF2b3JzPXt0aGlzLnByb3BzLmZsYXZvcnN9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2ZsYXZvcnMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5mbGF2b3JTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWwuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBeENBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})