webpackHotUpdate(1,{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(356);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nicRow_jsx__ = __webpack_require__(205);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__ = __webpack_require__(204);\n\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    showOrHide(match) {\n        //eventually filter these out of the obj\n        console.log('show r hide? ', this.props.selections.selectedFields);\n        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(this.props.selections.selectedFields, match) ? 'show' : 'hide';\n    }\n\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                console.log(this.props.selections.selectedFields);\n                console.log('has: ', __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields.flavor'));\n\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"label-wrapper\", key: i + 'label' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-title ' + this.showOrHide('title') },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            null,\n                            \"Title\"\n                        ),\n                        \" \",\n                        this.props.available.title\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__flavorRows_jsx__[\"a\" /* default */], { key: i + 'flavors', flavors: this.props.available.flavors, show: this.showOrHide('flavors'), selections: this.props.selections.flavorSelection })\n                ));\n\n                // console.log('props.selections.selectedFs: ', this.props.selections.selectedFields);\n                // _.each(this.props.selections.selectedFields, (field, idx)=> {\n                //     const selName = field + 'Selection';\n                //     labelBoxes[i][field] = [];\n                //\n                //     // if (_.isObject(this.props.selections[selName])) {\n                //     //     _.each(this.props.selections[selName], (item, idx)=> {\n                //     //         // console.log('field selected: ', r);\n                //     //         // console.log('each selected: ', dpName);\n                //     //         // console.log('value from available: ',dpName,  this.props.available[r][dpName]);\n                //     //         labelBoxes[i][field].push(\n                //     //             {field, item, values: this.props.available[field][item]}\n                //     //         );\n                //     //     });\n                //     // } else {\n                //     //     labelBoxes[i][field].push(\n                //     //         {field, item: field, values: this.props.available[field]}\n                //     //     );\n                //     // }\n                // });\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            console.log('sending this to Label', labelBoxes),\n            labelBoxes\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuaW1wb3J0IE5pY1JvdyBmcm9tIFwiLi4vbmljUm93LmpzeFwiO1xuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHNob3dPckhpZGUobWF0Y2gpIHtcbiAgICAgICAgLy9ldmVudHVhbGx5IGZpbHRlciB0aGVzZSBvdXQgb2YgdGhlIG9ialxuICAgICAgICBjb25zb2xlLmxvZygnc2hvdyByIGhpZGU/ICcsIHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcyk7XG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcywgbWF0Y2gpID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDEsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfLmhhcyh0aGlzLnByb3BzLCAnc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcycpICYmIF8uaGFzKHRoaXMucHJvcHMsICdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhczogJywgXy5oYXModGhpcy5wcm9wcywgJ3NlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMuZmxhdm9yJykpO1xuXG4gICAgICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBwZXJcIiBrZXk9e2kgKyAnbGFiZWwnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncHJldi10aXRsZSAnICsgdGhpcy5zaG93T3JIaWRlKCd0aXRsZScpfT48c3Bhbj5UaXRsZTwvc3Bhbj4ge3RoaXMucHJvcHMuYXZhaWxhYmxlLnRpdGxlfTwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rmxhdm9yUm93cyBrZXk9e2kgKyAnZmxhdm9ycyd9IGZsYXZvcnM9e3RoaXMucHJvcHMuYXZhaWxhYmxlLmZsYXZvcnN9IHNob3c9e3RoaXMuc2hvd09ySGlkZSgnZmxhdm9ycycpfSBzZWxlY3Rpb25zPXt0aGlzLnByb3BzLnNlbGVjdGlvbnMuZmxhdm9yU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZzOiAnLCB0aGlzLnByb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMpO1xuICAgICAgICAgICAgICAgIC8vIF8uZWFjaCh0aGlzLnByb3BzLnNlbGVjdGlvbnMuc2VsZWN0ZWRGaWVsZHMsIChmaWVsZCwgaWR4KT0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgc2VsTmFtZSA9IGZpZWxkICsgJ1NlbGVjdGlvbic7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxhYmVsQm94ZXNbaV1bZmllbGRdID0gW107XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gaWYgKF8uaXNPYmplY3QodGhpcy5wcm9wcy5zZWxlY3Rpb25zW3NlbE5hbWVdKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgXy5lYWNoKHRoaXMucHJvcHMuc2VsZWN0aW9uc1tzZWxOYW1lXSwgKGl0ZW0sIGlkeCk9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpZWxkIHNlbGVjdGVkOiAnLCByKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnZWFjaCBzZWxlY3RlZDogJywgZHBOYW1lKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsdWUgZnJvbSBhdmFpbGFibGU6ICcsZHBOYW1lLCAgdGhpcy5wcm9wcy5hdmFpbGFibGVbcl1bZHBOYW1lXSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICAgICAgbGFiZWxCb3hlc1tpXVtmaWVsZF0ucHVzaChcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICAgICAge2ZpZWxkLCBpdGVtLCB2YWx1ZXM6IHRoaXMucHJvcHMuYXZhaWxhYmxlW2ZpZWxkXVtpdGVtXX1cbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICAgICBsYWJlbEJveGVzW2ldW2ZpZWxkXS5wdXNoKFxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgICAgIHtmaWVsZCwgaXRlbTogZmllbGQsIHZhbHVlczogdGhpcy5wcm9wcy5hdmFpbGFibGVbZmllbGRdfVxuICAgICAgICAgICAgICAgIC8vICAgICAvLyAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVscl9sYWJlbHNcIiBjbGFzc05hbWU9eydzZWxlY3RlZC10ZW1wbGF0ZSd9PlxuICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZygnc2VuZGluZyB0aGlzIHRvIExhYmVsJywgbGFiZWxCb3hlcyl9XG4gICAgICAgICAgICAgICAge2xhYmVsQm94ZXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBdERBOzs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})