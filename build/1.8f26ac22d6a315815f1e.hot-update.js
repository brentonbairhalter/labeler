webpackHotUpdate(1,{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(356);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(205);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__ = __webpack_require__(204);\n\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                console.log(this.props.available);\n\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__[\"a\" /* default */], { key: i + 'flavors', flavors: this.props.available.flavors, show: true, selections: this.props.selections }));\n\n                // console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                // _.each(this.props.selections.selectedFields, (field, idx)=> {\n                //     const selName = field + 'Selection';\n                //     labelBoxes[i][field] = [];\n                //\n                //     // if (_.isObject(this.props.selections[selName])) {\n                //     //     _.each(this.props.selections[selName], (item, idx)=> {\n                //     //         // console.log('field selected: ', r);\n                //     //         // console.log('each selected: ', dpName);\n                //     //         // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                //     //         labelBoxes[i][field].push(\n                //     //             {field, item, values: this.props.available[field][item]}\n                //     //         );\n                //     //     });\n                //     // } else {\n                //     //     labelBoxes[i][field].push(\n                //     //         {field, item: field, values: this.props.available[field]}\n                //     //     );\n                //     // }\n                // });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes),\n            labelBoxes\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfLmhhcyh0aGlzLnByb3BzLCAnc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcycpICYmIF8uaGFzKHRoaXMucHJvcHMsICdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYXZhaWxhYmxlKTtcblxuICAgICAgICAgICAgICAgIGxhYmVsQm94ZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPEZsYXZvclJvd3Mga2V5PXtpICsgJ2ZsYXZvcnMnfSBmbGF2b3JzPXt0aGlzLnByb3BzLmF2YWlsYWJsZS5mbGF2b3JzfSBzaG93PXt0cnVlfSBzZWxlY3Rpb25zPXt0aGlzLnByb3BzLnNlbGVjdGlvbnN9Lz5cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Byb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGczogJywgdGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzKTtcbiAgICAgICAgICAgICAgICAvLyBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRmllbGRzLCAoZmllbGQsIGlkeCk9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNlbE5hbWUgPSBmaWVsZCArICdTZWxlY3Rpb24nO1xuICAgICAgICAgICAgICAgIC8vICAgICBsYWJlbEJveGVzW2ldW2ZpZWxkXSA9IFtdO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIGlmIChfLmlzT2JqZWN0KHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIF8uZWFjaCh0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0sIChpdGVtLCBpZHgpPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWVsZCBzZWxlY3RlZDogJywgcik7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VhY2ggc2VsZWN0ZWQ6ICcsIGRwTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbHVlIGZyb20gYXZhaWxhYmxlOiAnLGRwTmFtZSwgIHRoaXMucHJvcHMuYXZhaWxhYmxlW3JdW2RwTmFtZV0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIGxhYmVsQm94ZXNbaV1bZmllbGRdLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgICAgIHtmaWVsZCwgaXRlbSwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF1baXRlbV19XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgbGFiZWxCb3hlc1tpXVtmaWVsZF0ucHVzaChcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICB7ZmllbGQsIGl0ZW06IGZpZWxkLCB2YWx1ZXM6IHRoaXMucHJvcHMuYXZhaWxhYmxlW2ZpZWxkXX1cbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coJ3NlbmRpbmcgdGhpcyB0byBMYWJlbCcsIGxhYmVsQm94ZXMpfVxuICAgICAgICAgICAgICAgIHtsYWJlbEJveGVzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUEzQ0E7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})