webpackHotUpdate(1,{

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseRow_jsx__ = __webpack_require__(351);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pgRow_jsx__ = __webpack_require__(355);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vgRow_jsx__ = __webpack_require__(359);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nicRow_jsx__ = __webpack_require__(205);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flavorRows_jsx__ = __webpack_require__(204);\n\n\n\n\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    showOrHide(match) {\n        //eventually filter these out of the obj\n        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(this.props.selections.selectedFields, match) ? 'show' : 'hide';\n    }\n\n    render() {\n        let labelCount = this.props.count || 3,\n            labelBoxes = [];\n\n        for (let i = 1; i <= labelCount; i++) {\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'selections.selectedFields') && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.has(this.props, 'available')) {\n                labelBoxes.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"div\",\n                    { className: \"label-wrapper\", key: i + 'label' },\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-title ' + this.showOrHide('title') },\n                        this.props.available.title,\n                        \" |  \"\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-date ' + this.showOrHide('date') },\n                        this.props.available.date,\n                        \" |  \"\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { className: 'prev-user ' + this.showOrHide('user') },\n                        this.props.available.user,\n                        \" |  \"\n                    ),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__nicRow_jsx__[\"a\" /* default */], { nic: this.props.available.nic, show: this.showOrHide('nic'), selections: this.props.selections.nicSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__baseRow_jsx__[\"a\" /* default */], { base: this.props.available.base, show: this.showOrHide('base'), selections: this.props.selections.baseSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__pgRow_jsx__[\"a\" /* default */], { pg: this.props.available.pg, show: this.showOrHide('pg'), selections: this.props.selections.pgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__vgRow_jsx__[\"a\" /* default */], { vg: this.props.available.vg, show: this.showOrHide('vg'), selections: this.props.selections.vgSelection }),\n                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__flavorRows_jsx__[\"a\" /* default */], { key: i + 'flavors', flavors: this.props.available.flavors, show: this.showOrHide('flavors'), selections: this.props.selections.flavorSelection })\n                ));\n            };\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            labelBoxes\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBCYXNlUm93IGZyb20gXCIuLi9iYXNlUm93LmpzeFwiO1xuaW1wb3J0IFBHUm93IGZyb20gXCIuLi9wZ1Jvdy5qc3hcIjtcbmltcG9ydCBWR1JvdyBmcm9tIFwiLi4vdmdSb3cuanN4XCI7XG5pbXBvcnQgTmljUm93IGZyb20gXCIuLi9uaWNSb3cuanN4XCI7XG5pbXBvcnQgRmxhdm9yUm93cyBmcm9tIFwiLi4vZmxhdm9yUm93cy5qc3hcIjtcblxuXG4vL0BUT0RPOiBidWlsZCB1cCBhIGNhcnQgYW5kIHJlbmRlciBsYWJlbHMgZm9yIG11bHRpcGxlIGxhYmVsc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc2hvd09ySGlkZShtYXRjaCkge1xuICAgICAgICAvL2V2ZW50dWFsbHkgZmlsdGVyIHRoZXNlIG91dCBvZiB0aGUgb2JqXG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKHRoaXMucHJvcHMuc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcywgbWF0Y2gpID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDMsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW107XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsYWJlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChfLmhhcyh0aGlzLnByb3BzLCAnc2VsZWN0aW9ucy5zZWxlY3RlZEZpZWxkcycpICYmIF8uaGFzKHRoaXMucHJvcHMsICdhdmFpbGFibGUnKSkge1xuICAgICAgICAgICAgICAgIGxhYmVsQm94ZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCIga2V5PXtpICsgJ2xhYmVsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ByZXYtdGl0bGUgJyArIHRoaXMuc2hvd09ySGlkZSgndGl0bGUnKX0+e3RoaXMucHJvcHMuYXZhaWxhYmxlLnRpdGxlfSB8ICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncHJldi1kYXRlICcgKyB0aGlzLnNob3dPckhpZGUoJ2RhdGUnKX0+e3RoaXMucHJvcHMuYXZhaWxhYmxlLmRhdGV9IHwgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwcmV2LXVzZXIgJyArICB0aGlzLnNob3dPckhpZGUoJ3VzZXInKX0+e3RoaXMucHJvcHMuYXZhaWxhYmxlLnVzZXJ9IHwgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5pY1JvdyBuaWM9e3RoaXMucHJvcHMuYXZhaWxhYmxlLm5pY30gc2hvdz17dGhpcy5zaG93T3JIaWRlKCduaWMnKX0gc2VsZWN0aW9ucz17dGhpcy5wcm9wcy5zZWxlY3Rpb25zLm5pY1NlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhc2VSb3cgYmFzZT17dGhpcy5wcm9wcy5hdmFpbGFibGUuYmFzZX0gc2hvdz17dGhpcy5zaG93T3JIaWRlKCdiYXNlJyl9IHNlbGVjdGlvbnM9e3RoaXMucHJvcHMuc2VsZWN0aW9ucy5iYXNlU2VsZWN0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UEdSb3cgcGc9e3RoaXMucHJvcHMuYXZhaWxhYmxlLnBnfSBzaG93PXt0aGlzLnNob3dPckhpZGUoJ3BnJyl9IHNlbGVjdGlvbnM9e3RoaXMucHJvcHMuc2VsZWN0aW9ucy5wZ1NlbGVjdGlvbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZHUm93IHZnPXt0aGlzLnByb3BzLmF2YWlsYWJsZS52Z30gc2hvdz17dGhpcy5zaG93T3JIaWRlKCd2ZycpfSBzZWxlY3Rpb25zPXt0aGlzLnByb3BzLnNlbGVjdGlvbnMudmdTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGF2b3JSb3dzIGtleT17aSArICdmbGF2b3JzJ30gZmxhdm9ycz17dGhpcy5wcm9wcy5hdmFpbGFibGUuZmxhdm9yc30gc2hvdz17dGhpcy5zaG93T3JIaWRlKCdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMucHJvcHMuc2VsZWN0aW9ucy5mbGF2b3JTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJlbHJfbGFiZWxzXCIgY2xhc3NOYW1lPXsnc2VsZWN0ZWQtdGVtcGxhdGUnfT5cbiAgICAgICAgICAgICAgICB7bGFiZWxCb3hlc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQWpDQTs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})