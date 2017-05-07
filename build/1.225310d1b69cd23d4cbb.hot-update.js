webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(281);\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (field, idx) => {\n                    const selName = field + 'Selection';\n                    labelBoxes[field] = [];\n\n                    // console.log('scrubbing data: ', field);\n                    // console.log('selections data: ', this.props.selections);\n\n                    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(this.props.selections[selName])) {\n                        // console.log('sel is obj: ', this.props.selections[selName]);\n\n                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (item, idx) => {\n                            // console.log('field selected: ', r);\n                            // console.log('each selected: ', dpName);\n                            // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                            labelBoxes[field].push({ name: item, values: this.props.available[field][item] });\n                        });\n                    } else {\n                        labelBoxes[field].push({ name: field, values: this.props.available[field] });\n                    }\n                });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuXG5cbi8vQFRPRE86IGJ1aWxkIHVwIGEgY2FydCBhbmQgcmVuZGVyIGxhYmVscyBmb3IgbXVsdGlwbGUgbGFiZWxzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbENvdW50ID0gdGhpcy5wcm9wcy5jb3VudCB8fCAxLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKF8uaGFzKHRoaXMucHJvcHMsICdzZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzJykgJiYgXy5oYXModGhpcy5wcm9wcywgJ2F2YWlsYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGczogJywgdGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzKTtcbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAoZmllbGQsIGlkeCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbE5hbWUgPSBmaWVsZCArICdTZWxlY3Rpb24nO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzW2ZpZWxkXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzY3J1YmJpbmcgZGF0YTogJywgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0aW9ucyBkYXRhOiAnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWwgaXMgb2JqOiAnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdLCAoaXRlbSwgaWR4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmllbGQgc2VsZWN0ZWQ6ICcsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlYWNoIHNlbGVjdGVkOiAnLCBkcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZSBmcm9tIGF2YWlsYWJsZTogJyxkcE5hbWUsICB0aGlzLnByb3BzLmF2YWlsYWJsZVtyXVtkcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzW2ZpZWxkXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogaXRlbSwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF1baXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tmaWVsZF0ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogZmllbGQsIHZhbHVlczogdGhpcy5wcm9wcy5hdmFpbGFibGVbZmllbGRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdzZW5kaW5nIHRoaXMgdG8gTGFiZWwnLCBsYWJlbEJveGVzKX1cbiAgICAgICAgICAgICAgICA8TGFiZWwgZmllbGRzPXtsYWJlbEJveGVzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUE3Q0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})