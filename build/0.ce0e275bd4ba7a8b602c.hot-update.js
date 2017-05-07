webpackHotUpdate(0,{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(47);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);\n\n\n\nclass checkBoxOrRadioGroup extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor() {\n        super();\n        checkBoxOrRadioGroup.propTypes = {\n            title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,\n            type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['checkbox', 'radio']).isRequired,\n            setName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,\n            options: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,\n            selectedOptions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,\n            controlFunc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired\n        };\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            'div',\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'label',\n                { className: 'form-label' },\n                this.props.title\n            ),\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                'div',\n                { className: 'checkbox-group' },\n                this.props.options.map(opt => {\n                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        'label',\n                        { key: opt, className: 'form-label' },\n                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {\n                            className: 'form-checkbox',\n                            name: this.props.setName,\n                            onChange: this.props.controlFunc,\n                            value: opt,\n                            checked: this.props.selectedOptions.indexOf(opt) > -1,\n                            type: this.props.type }),\n                        ' ',\n                        opt\n                    );\n                })\n            )\n        );\n    }\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = checkBoxOrRadioGroup;\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2Zvcm0vY2hlY2tCb3hPclJhZGlvR3JvdXAuanN4Pzg1N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrQm94T3JSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY2hlY2tCb3hPclJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xuICAgICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydjaGVja2JveCcsICdyYWRpbyddKS5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgc2V0TmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICAgICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICAgICAgICAgIGNvbnRyb2xGdW5jOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5vcHRpb25zLm1hcChvcHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwga2V5PXtvcHR9IGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoaXMucHJvcHMuc2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNvbnRyb2xGdW5jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyB0aGlzLnByb3BzLnNlbGVjdGVkT3B0aW9ucy5pbmRleE9mKG9wdCkgPiAtMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGV9IC8+IHtvcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9mb3JtL2NoZWNrQm94T3JSYWRpb0dyb3VwLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFPQTtBQVBBO0FBVUE7QUFiQTtBQUZBO0FBbUJBO0FBQ0E7QUFuQ0E7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 477:
false,

/***/ 478:
false,

/***/ 479:
false,

/***/ 480:
false,

/***/ 481:
false,

/***/ 482:
false,

/***/ 483:
false,

/***/ 484:
false,

/***/ 485:
false,

/***/ 486:
false,

/***/ 487:
false,

/***/ 488:
false,

/***/ 489:
false,

/***/ 490:
false,

/***/ 491:
false,

/***/ 492:
false,

/***/ 493:
false,

/***/ 494:
false,

/***/ 495:
false

})