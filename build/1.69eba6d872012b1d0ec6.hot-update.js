webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(281);\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = {};\n\n        for (let i = 1; i <= labelCount; i++) {\n            labelBoxes[i] = {};\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections.selectedFields, (field, idx) => {\n                    const selName = field + 'Selection';\n                    labelBoxes[i][field] = [];\n\n                    if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(this.props.selections[selName])) {\n                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.selections[selName], (item, idx) => {\n                            // console.log('field selected: ', r);\n                            // console.log('each selected: ', dpName);\n                            // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                            labelBoxes[i][field].push({ item, values: this.props.available[field][item] });\n                        });\n                    } else {\n                        labelBoxes[i][field].push({ field, values: this.props.available[field] });\n                    }\n                });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes.user)\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuXG5cbi8vQFRPRE86IGJ1aWxkIHVwIGEgY2FydCBhbmQgcmVuZGVyIGxhYmVscyBmb3IgbXVsdGlwbGUgbGFiZWxzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbENvdW50ID0gdGhpcy5wcm9wcy5jb3VudCB8fCAxLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxhYmVsQm94ZXNbaV0gPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmhhcyh0aGlzLnByb3BzLCAnc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcycpICYmIF8uaGFzKHRoaXMucHJvcHMsICdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRnM6ICcsIHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcyk7XG4gICAgICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcywgKGZpZWxkLCBpZHgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxOYW1lID0gZmllbGQgKyAnU2VsZWN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tpXVtmaWVsZF0gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc09iamVjdCh0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdLCAoaXRlbSwgaWR4KT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmllbGQgc2VsZWN0ZWQ6ICcsIHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlYWNoIHNlbGVjdGVkOiAnLCBkcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZSBmcm9tIGF2YWlsYWJsZTogJyxkcE5hbWUsICB0aGlzLnByb3BzLmF2YWlsYWJsZVtyXVtkcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzW2ldW2ZpZWxkXS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbSwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF1baXRlbV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlc1tpXVtmaWVsZF0ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGQsIHZhbHVlczogdGhpcy5wcm9wcy5hdmFpbGFibGVbZmllbGRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVscl9sYWJlbHNcIiBjbGFzc05hbWU9eydzZWxlY3RlZC10ZW1wbGF0ZSd9PlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnc2VuZGluZyB0aGlzIHRvIExhYmVsJywgbGFiZWxCb3hlcy51c2VyKX1cbiAgICAgICAgICAgICAgICB7Lyo8TGFiZWwgZmllbGRzPXtsYWJlbEJveGVzfS8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFLQTtBQXJDQTs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})