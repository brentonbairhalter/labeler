webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            sels: [],\n            available: []\n        };\n    }\n\n    componentDidMount() {\n        //@TODO: grab these from options prefs to default\n        this.setState({\n            sels: this.props.selections,\n            available: this.props.available\n        });\n    }\n\n    render() {\n        let labelCount = this.props.count || 1,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            let labelBox = [];\n\n            console.log('selections: ', this.state);\n            // let selectedFields = _.map(sels, 'selectedFields', (a)=> {\n            //     return a;\n            // });\n\n            // console.log('selections: ', selectedFields);\n\n\n            // _.each(selectedFields, function(n, l) {\n            //     // const show = _.includes(sels.selectedFields, l);\n            //     const fields = available[l];\n            //\n            //     console.log('looping selected: ', available.user, l);\n            //\n            //     // if (show) {\n            //         labelBox.push(\n            //             {heading: l, values: n}\n            //         )\n            //     // }\n            // });\n            labelBoxes.push(labelBox);\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbHM6IFtdLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvL0BUT0RPOiBncmFiIHRoZXNlIGZyb20gb3B0aW9ucyBwcmVmcyB0byBkZWZhdWx0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsczogdGhpcy5wcm9wcy5zZWxlY3Rpb25zLFxuICAgICAgICAgICAgYXZhaWxhYmxlOiB0aGlzLnByb3BzLmF2YWlsYWJsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbENvdW50ID0gdGhpcy5wcm9wcy5jb3VudCB8fCAxLFxuICAgICAgICAgICAgbGFiZWxCb3hlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxhYmVsQm94ID0gW107XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3Rpb25zOiAnLCB0aGlzLnN0YXRlKTtcbiAgICAgICAgICAgIC8vIGxldCBzZWxlY3RlZEZpZWxkcyA9IF8ubWFwKHNlbHMsICdzZWxlY3RlZEZpZWxkcycsIChhKT0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gYTtcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0aW9uczogJywgc2VsZWN0ZWRGaWVsZHMpO1xuXG5cbiAgICAgICAgICAgIC8vIF8uZWFjaChzZWxlY3RlZEZpZWxkcywgZnVuY3Rpb24obiwgbCkge1xuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnN0IHNob3cgPSBfLmluY2x1ZGVzKHNlbHMuc2VsZWN0ZWRGaWVsZHMsIGwpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGZpZWxkcyA9IGF2YWlsYWJsZVtsXTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2xvb3Bpbmcgc2VsZWN0ZWQ6ICcsIGF2YWlsYWJsZS51c2VyLCBsKTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgLy8gaWYgKHNob3cpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbGFiZWxCb3gucHVzaChcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtoZWFkaW5nOiBsLCB2YWx1ZXM6IG59XG4gICAgICAgICAgICAvLyAgICAgICAgIClcbiAgICAgICAgICAgIC8vICAgICAvLyB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIGxhYmVsQm94ZXMucHVzaChsYWJlbEJveCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgZmllbGRzPXtsYWJlbEJveGVzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQXBEQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})