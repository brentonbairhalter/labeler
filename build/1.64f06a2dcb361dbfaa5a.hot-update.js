webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        if (this.props.fields) {\n            console.log('labelsss: ', this.props.fields.length);\n\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, (n, i) => {\n                let labelRows = [];\n                console.log('making label', n);\n\n                // _.each(n, function(k, v) {\n                //     let labelVals = [];\n                //\n                //\n                //     if (_.isObject(k.values)) {\n                //         _.each(k.values, function(d, p) {\n                //             labelVals.push(\n                //                 <span key={d + p} className={p === 'label' ? 'heading' : 'value'}>{d}</span>\n                //             );\n                //         });\n                //         labelRows.push(\n                //             <div key={k.heading + i} className={'label-row ' + k.heading}>{labelVals}</div>\n                //         );\n                //     } else {\n                //         labelRows.push(\n                //             <span key={k.heading + i} className={k.heading}>{k.values}</span>\n                //         );\n                //     }\n                // });\n\n                // label.push(\n                //     <div key={i} className=\"label-wrapper\">\n                //         {labelRows}\n                //         {/*<FlavorRows flavors={{}} show=\"true\" selections={}/>*/}\n                //     </div>\n                // )\n            });\n        }\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGFiZWxzc3M6ICcsIHRoaXMucHJvcHMuZmllbGRzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLmZpZWxkcywgKG4sIGkpPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFJvd3MgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWFraW5nIGxhYmVsJywgbik7XG5cbiAgICAgICAgICAgICAgICAvLyBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgbGFiZWxWYWxzID0gW107XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoXy5pc09iamVjdChrLnZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIF8uZWFjaChrLnZhbHVlcywgZnVuY3Rpb24oZCwgcCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxhYmVsVmFscy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2QgKyBwfSBjbGFzc05hbWU9e3AgPT09ICdsYWJlbCcgPyAnaGVhZGluZycgOiAndmFsdWUnfT57ZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGFiZWxSb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBrZXk9e2suaGVhZGluZyArIGl9IGNsYXNzTmFtZT17J2xhYmVsLXJvdyAnICsgay5oZWFkaW5nfT57bGFiZWxWYWxzfTwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxhYmVsUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxzcGFuIGtleT17ay5oZWFkaW5nICsgaX0gY2xhc3NOYW1lPXtrLmhlYWRpbmd9PntrLnZhbHVlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBsYWJlbC5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibGFiZWwtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIC8vICAgICAgICAge2xhYmVsUm93c31cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHsvKjxGbGF2b3JSb3dzIGZsYXZvcnM9e3t9fSBzaG93PVwidHJ1ZVwiIHNlbGVjdGlvbnM9e30vPiovfVxuICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAvLyApXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWwuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUE3Q0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})