webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let sels = this.props.selections,\n            label = [];\n\n        console.log('making label box: ', this.props.field);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.values, function (n, i) {\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: 'col ' + i },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { className: \"heading\" },\n                    \": \",\n                    n\n                )\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            this.props.field,\n            \": \",\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgc2VscyA9IHRoaXMucHJvcHMuc2VsZWN0aW9ucyxcbiAgICAgICAgICAgIGxhYmVsID0gW107XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21ha2luZyBsYWJlbCBib3g6ICcsIHRoaXMucHJvcHMuZmllbGQpO1xuXG4gICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLnZhbHVlcywgZnVuY3Rpb24obiwgaSkge1xuICAgICAgICAgICAgbGFiZWwucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXsnY29sICcgKyBpfT48c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+OiB7bn08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZpZWxkfToge2xhYmVsfVxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXsnLXRpdGxlICcgKyB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd0aXRsZScpfT48c3Bhbj5UaXRsZTwvc3Bhbj4ge3RoaXMucHJvcHMudGl0bGV9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eydwcmV2LWRhdGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2RhdGUnKX0+PHNwYW4+RGF0ZTwvc3Bhbj4ge3RoaXMuZ2V0RGF0ZSgpfTwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXsncHJldi11c2VyICcgKyAgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndXNlcicpfT48c3Bhbj5Vc2VyPC9zcGFuPiB7dGhpcy5wcm9wcy51c2VyfTwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjxOaWNSb3cgbmljPXt0aGlzLnByb3BzLm5pY30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnbmljJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUubmljU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPEJhc2VSb3cgYmFzZT17dGhpcy5wcm9wcy5iYXNlfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdiYXNlJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuYmFzZVNlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxQR1JvdyBwZz17dGhpcy5wcm9wcy5wZ30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgncGcnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5wZ1NlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxWR1JvdyB2Zz17dGhpcy5wcm9wcy52Z30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgndmcnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS52Z1NlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgICAgIHsvKjxGbGF2b3JSb3dzIGZsYXZvcnM9e3RoaXMucHJvcHMuZmxhdm9yc30gc2hvdz17dGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZmxhdm9ycycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmZsYXZvclNlbGVjdGlvbn0vPiovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbC5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVlBO0FBMUJBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})