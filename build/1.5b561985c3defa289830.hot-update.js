webpackHotUpdate(1,{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(356);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(205);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__ = __webpack_require__(204);\n\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                console.log(this.props.available);\n\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"label-wrapper\", key: i + 'label' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-title ' + this.showSelectedField('title') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Title\"\n                        ),\n                        \" \",\n                        this.props.title\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__[\"a\" /* default */], { key: i + 'flavors', flavors: this.props.available.flavors, show: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props.selections.selectedFields, 'flavors'), selections: this.props.selections.flavorSelection })\n                ));\n\n                // console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                // _.each(this.props.selections.selectedFields, (field, idx)=> {\n                //     const selName = field + 'Selection';\n                //     labelBoxes[i][field] = [];\n                //\n                //     // if (_.isObject(this.props.selections[selName])) {\n                //     //     _.each(this.props.selections[selName], (item, idx)=> {\n                //     //         // console.log('field selected: ', r);\n                //     //         // console.log('each selected: ', dpName);\n                //     //         // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                //     //         labelBoxes[i][field].push(\n                //     //             {field, item, values: this.props.available[field][item]}\n                //     //         );\n                //     //     });\n                //     // } else {\n                //     //     labelBoxes[i][field].push(\n                //     //         {field, item: field, values: this.props.available[field]}\n                //     //     );\n                //     // }\n                // });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes),\n            labelBoxes\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfLmhhcyh0aGlzLnByb3BzLCAnc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcycpICYmIF8uaGFzKHRoaXMucHJvcHMsICdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYXZhaWxhYmxlKTtcblxuICAgICAgICAgICAgICAgIGxhYmVsQm94ZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCIga2V5PXtpICsgJ2xhYmVsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdGl0bGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3RpdGxlJyl9PjxzcGFuPlRpdGxlPC9zcGFuPiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsYXZvclJvd3Mga2V5PXtpICsgJ2ZsYXZvcnMnfSBmbGF2b3JzPXt0aGlzLnByb3BzLmF2YWlsYWJsZS5mbGF2b3JzfSBzaG93PXtfLmhhcyh0aGlzLnByb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMsICdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMucHJvcHMuc2VsZWN0aW9ucy5mbGF2b3JTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwcm9wcy5zZWxlY3Rpb25zLnNlbGVjdGVkRnM6ICcsIHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcyk7XG4gICAgICAgICAgICAgICAgLy8gXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcywgKGZpZWxkLCBpZHgpPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBzZWxOYW1lID0gZmllbGQgKyAnU2VsZWN0aW9uJztcbiAgICAgICAgICAgICAgICAvLyAgICAgbGFiZWxCb3hlc1tpXVtmaWVsZF0gPSBbXTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyBpZiAoXy5pc09iamVjdCh0aGlzLnByb3BzLnNlbGVjdGlvbnNbc2VsTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICBfLmVhY2godGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdLCAoaXRlbSwgaWR4KT0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnZmllbGQgc2VsZWN0ZWQ6ICcsIHIpO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlYWNoIHNlbGVjdGVkOiAnLCBkcE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZSBmcm9tIGF2YWlsYWJsZTogJyxkcE5hbWUsICB0aGlzLnByb3BzLmF2YWlsYWJsZVtyXVtkcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICBsYWJlbEJveGVzW2ldW2ZpZWxkXS5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICAgICB7ZmllbGQsIGl0ZW0sIHZhbHVlczogdGhpcy5wcm9wcy5hdmFpbGFibGVbZmllbGRdW2l0ZW1dfVxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgIGxhYmVsQm94ZXNbaV1bZmllbGRdLnB1c2goXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAge2ZpZWxkLCBpdGVtOiBmaWVsZCwgdmFsdWVzOiB0aGlzLnByb3BzLmF2YWlsYWJsZVtmaWVsZF19XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKCdzZW5kaW5nIHRoaXMgdG8gTGFiZWwnLCBsYWJlbEJveGVzKX1cbiAgICAgICAgICAgICAgICB7bGFiZWxCb3hlc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBL0NBOzs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})