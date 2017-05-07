webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(281);\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (field, idx) => {\n                    const selName = field + 'Selection';\n                    // labelBoxes.push({field: field});\n\n                    // console.log('scrubbing data: ', field);\n                    // console.log('selections data: ', this.props.selections);\n\n                    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(this.props.selections[selName])) {\n                        // console.log('sel is obj: ', this.props.selections[selName]);\n\n                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (item, idx) => {\n                            // console.log('field selected: ', r);\n                            // console.log('each selected: ', dpName);\n                            // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                            labelBoxes.push({ field, item, values: this.props.available[field][item] });\n                        });\n                    } else {\n                        labelBoxes.push({ field, values: this.props.available[field] });\n                    }\n                });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuXG5cbi8vQFRPRE86IGJ1aWxkIHVwIGEgY2FydCBhbmQgcmVuZGVyIGxhYmVscyBmb3IgbXVsdGlwbGUgbGFiZWxzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbENvdW50ID0gdGhpcy5wcm9wcy5jb3VudCB8fCAxLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKF8uaGFzKHRoaXMucHJvcHMsICdzZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzJykgJiYgXy5oYXModGhpcy5wcm9wcywgJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGczogJywgdGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzKTtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAoZmllbGQsIGlkeCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSBmaWVsZCArICdTZWxlY3Rpb24nO1xuICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbEJveGVzLnB1c2goe2ZpZWxkOiBmaWVsZH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzY3J1YmJpbmcgZGF0YTogJywgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0aW9ucyBkYXRhOiAnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWwgaXMgb2JqOiAnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdLCAoaXRlbSwgaWR4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmllbGQgc2VsZWN0ZWQ6ICcsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlYWNoIHNlbGVjdGVkOiAnLCBkcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZSBmcm9tIGF2YWlsYWJsZTogJyxkcE5hbWUsICB0aGlzLnByb3BzLmF2YWlsYWJsZVtyXVtkcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZCwgaXRlbSwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF1baXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZCwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF19XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ3NlbmRpbmcgdGhpcyB0byBMYWJlbCcsIGxhYmVsQm94ZXMpfVxuICAgICAgICAgICAgICAgIDxMYWJlbCBmaWVsZHM9e2xhYmVsQm94ZXN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQTdDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})