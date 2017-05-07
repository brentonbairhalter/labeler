webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__ = __webpack_require__(277);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            let labelRows = [];\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n, function (k, v) {\n                let labelVals = [];\n\n                if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(k.values)) {\n                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(k.values, function (d, p) {\n                        labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                            \"span\",\n                            { key: d + p, className: p === 'label' ? 'heading' : 'value' },\n                            d\n                        ));\n                    });\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"div\",\n                        { key: k.heading + i, className: 'label-row ' + k.heading },\n                        labelVals\n                    ));\n                } else {\n                    labelRows.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k.heading + i, className: k.heading },\n                        k.values\n                    ));\n                }\n            });\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i, className: \"label-wrapper\" },\n                labelRows\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__flavorRows_jsx__[\"a\" /* default */], { flavors: this.props.fields.flavors })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IEZsYXZvclJvd3MgZnJvbSBcIi4uL2ZsYXZvclJvd3MuanN4XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGFiZWwgPSBbXTtcbiAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuZmllbGRzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWxSb3dzID0gW107XG4gICAgICAgICAgICBfLmVhY2gobiwgZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFZhbHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KGsudmFsdWVzKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2goay52YWx1ZXMsIGZ1bmN0aW9uKGQsIHApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVmFscy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17ZCArIHB9IGNsYXNzTmFtZT17cCA9PT0gJ2xhYmVsJyA/ICdoZWFkaW5nJyA6ICd2YWx1ZSd9PntkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrLmhlYWRpbmcgKyBpfSBjbGFzc05hbWU9eydsYWJlbC1yb3cgJyArIGsuaGVhZGluZ30+e2xhYmVsVmFsc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFJvd3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17ay5oZWFkaW5nICsgaX0gY2xhc3NOYW1lPXtrLmhlYWRpbmd9PntrLnZhbHVlc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxhYmVsLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImxhYmVsLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2xhYmVsUm93c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgIDxGbGF2b3JSb3dzIGZsYXZvcnM9e3RoaXMucHJvcHMuZmllbGRzLmZsYXZvcnN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWwuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBdENBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labels_jsx__ = __webpack_require__(284);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor() {\n        super();\n        this.state = { data: {\n                user: 'Hello',\n                title: 'E-L-L',\n                date: '',\n                data: '',\n                nic: {},\n                base: {},\n                pg: {},\n                vg: {},\n                flavors: {}\n            } };\n    }\n\n    componentDidMount() {\n        let that = this;\n        chrome.tabs.getSelected(null, function (tab) {\n            let port = chrome.runtime.connect({\n                name: \"Print Labels\"\n            });\n            port.postMessage(\"printLabels\");\n            port.onMessage.addListener(function (data) {\n                console.log('all data: ', data.data);\n                that.setState({ data: data.data });\n            });\n        });\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__labels_jsx__[\"a\" /* default */], { selections: this.state.data.selections, available: this.state.data.available })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L3ByaW50X3BhZ2UuanN4P2FkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTGFiZWxzIGZyb20gJy4vbGFiZWxzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2RhdGE6IHtcbiAgICAgICAgICAgIHVzZXI6ICdIZWxsbycsXG4gICAgICAgICAgICB0aXRsZTogJ0UtTC1MJyxcbiAgICAgICAgICAgIGRhdGU6ICcnLFxuICAgICAgICAgICAgZGF0YTogJycsXG4gICAgICAgICAgICBuaWM6IHt9LFxuICAgICAgICAgICAgYmFzZToge30sXG4gICAgICAgICAgICBwZzoge30sXG4gICAgICAgICAgICB2Zzoge30sXG4gICAgICAgICAgICBmbGF2b3JzOiB7fVxuICAgICAgICB9fVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNocm9tZS50YWJzLmdldFNlbGVjdGVkKG51bGwsIGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgICAgIGxldCBwb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJQcmludCBMYWJlbHNcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKFwicHJpbnRMYWJlbHNcIik7XG4gICAgICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbGwgZGF0YTogJywgZGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtkYXRhOiBkYXRhLmRhdGF9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExhYmVscyBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLmRhdGEuc2VsZWN0aW9uc30gYXZhaWxhYmxlPXt0aGlzLnN0YXRlLmRhdGEuYXZhaWxhYmxlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L3ByaW50X3BhZ2UuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFwQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})