webpackHotUpdate(1,{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(356);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(205);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__ = __webpack_require__(204);\n\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = {};\n\n        for (let i = 1; i <= labelCount; i++) {\n            labelBoxes[i] = {};\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                // console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (field, idx) => {\n                    const selName = field + 'Selection';\n                    labelBoxes[i][field] = [];\n\n                    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(this.props.selections[selName])) {\n                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (item, idx) => {\n                            // console.log('field selected: ', r);\n                            // console.log('each selected: ', dpName);\n                            // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                            labelBoxes[i][field].push({ field, item, values: this.props.available[field][item] });\n                        });\n                    } else {\n                        labelBoxes[i][field].push({ field, item: field, values: this.props.available[field] });\n                    }\n                });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__[\"a\" /* default */], { flavors: this.props.available.flavors, show: true, selections: this.state.flavorSelection })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0ge307XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFiZWxDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tpXSA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uaGFzKHRoaXMucHJvcHMsICdzZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzJykgJiYgXy5oYXModGhpcy5wcm9wcywgJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Byb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGczogJywgdGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzKTtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAoZmllbGQsIGlkeCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSBmaWVsZCArICdTZWxlY3Rpb24nO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzW2ldW2ZpZWxkXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZWFjaCh0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0sIChpdGVtLCBpZHgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWVsZCBzZWxlY3RlZDogJywgcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VhY2ggc2VsZWN0ZWQ6ICcsIGRwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbHVlIGZyb20gYXZhaWxhYmxlOiAnLGRwTmFtZSwgIHRoaXMucHJvcHMuYXZhaWxhYmxlW3JdW2RwTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQm94ZXNbaV1bZmllbGRdLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZCwgaXRlbSwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF1baXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tpXVtmaWVsZF0ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQsIGl0ZW06IGZpZWxkLCB2YWx1ZXM6IHRoaXMucHJvcHMuYXZhaWxhYmxlW2ZpZWxkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ3NlbmRpbmcgdGhpcyB0byBMYWJlbCcsIGxhYmVsQm94ZXMpfVxuICAgICAgICAgICAgICAgIDxGbGF2b3JSb3dzIGZsYXZvcnM9e3RoaXMucHJvcHMuYXZhaWxhYmxlLmZsYXZvcnN9IHNob3c9e3RydWV9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFyQ0E7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})