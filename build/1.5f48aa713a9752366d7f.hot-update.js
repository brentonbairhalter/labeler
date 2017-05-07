webpackHotUpdate(1,{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n\n    render() {\n        let label = [];\n\n        console.log('making label box: ', this.props.fields);\n\n        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.fields, function (n, i) {\n            const labelVals = [];\n\n            if (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(n.values)) {\n                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(n.values, function (k, v) {\n                    labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                        \"span\",\n                        { key: k + v, className: v === 'label' ? 'heading' : 'value' },\n                        k\n                    ));\n                });\n            } else {\n                labelVals.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                    \"span\",\n                    { key: n.heading, className: n.heading },\n                    n.values\n                ));\n            }\n\n            label.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { key: i },\n                labelVals\n            ));\n        });\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            label\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeD8wNWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFtdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYWtpbmcgbGFiZWwgYm94OiAnLCB0aGlzLnByb3BzLmZpZWxkcyk7XG5cbiAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuZmllbGRzLCBmdW5jdGlvbihuLCBpKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFZhbHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKF8uaXNPYmplY3Qobi52YWx1ZXMpKSB7XG4gICAgICAgICAgICAgICAgXy5lYWNoKG4udmFsdWVzLCBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVmFscy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrICsgdn0gY2xhc3NOYW1lPXt2ID09PSAnbGFiZWwnID8gJ2hlYWRpbmcnIDogJ3ZhbHVlJ30+e2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbFZhbHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtuLmhlYWRpbmd9IGNsYXNzTmFtZT17bi5oZWFkaW5nfT57bi52YWx1ZXN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhYmVsLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWxWYWxzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eyctdGl0bGUgJyArIHRoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ3RpdGxlJyl9PjxzcGFuPlRpdGxlPC9zcGFuPiB7dGhpcy5wcm9wcy50aXRsZX08L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17J3ByZXYtZGF0ZSAnICsgdGhpcy5zaG93U2VsZWN0ZWRGaWVsZCgnZGF0ZScpfT48c3Bhbj5EYXRlPC9zcGFuPiB7dGhpcy5nZXREYXRlKCl9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9eydwcmV2LXVzZXIgJyArICB0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd1c2VyJyl9PjxzcGFuPlVzZXI8L3NwYW4+IHt0aGlzLnByb3BzLnVzZXJ9PC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPE5pY1JvdyBuaWM9e3RoaXMucHJvcHMubmljfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCduaWMnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5uaWNTZWxlY3Rpb259Lz4qL31cbiAgICAgICAgICAgICAgICB7Lyo8QmFzZVJvdyBiYXNlPXt0aGlzLnByb3BzLmJhc2V9IHNob3c9e3RoaXMuc2hvd1NlbGVjdGVkRmllbGQoJ2Jhc2UnKX0gc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5iYXNlU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFBHUm93IHBnPXt0aGlzLnByb3BzLnBnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdwZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnBnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPFZHUm93IHZnPXt0aGlzLnByb3BzLnZnfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCd2ZycpfSBzZWxlY3Rpb25zPXt0aGlzLnN0YXRlLnZnU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICAgICAgey8qPEZsYXZvclJvd3MgZmxhdm9ycz17dGhpcy5wcm9wcy5mbGF2b3JzfSBzaG93PXt0aGlzLnNob3dTZWxlY3RlZEZpZWxkKCdmbGF2b3JzJyl9IHNlbGVjdGlvbnM9e3RoaXMuc3RhdGUuZmxhdm9yU2VsZWN0aW9ufS8+Ki99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVsLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBMUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 3,\n            labelBoxes = [],\n            sels = this.props.selections;\n\n        for (let i = 0; i <= labelCount; i++) {\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.available, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels.selectedFields, l);\n\n                if (show) {\n                    labelBoxes.push({ heading: l, values: n });\n                } else {\n                    console.log('handle dont show?: ', sels.selectedFields, l);\n                }\n            });\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n                \"div\",\n                { className: \"label-wrapper\" },\n                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n            )\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDMsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW10sXG4gICAgICAgICAgICBzZWxzID0gdGhpcy5wcm9wcy5zZWxlY3Rpb25zO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuYXZhaWxhYmxlLCBmdW5jdGlvbihuLCBsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9IF8uaW5jbHVkZXMoc2Vscy5zZWxlY3RlZEZpZWxkcywgbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbEJveGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGluZzogbCwgdmFsdWVzOiBufVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBkb250IHNob3c/OiAnLCBzZWxzLnNlbGVjdGVkRmllbGRzLCBsKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWxyX2xhYmVsc1wiIGNsYXNzTmFtZT17J3NlbGVjdGVkLXRlbXBsYXRlJ30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbC13cmFwcGVyXCI+PExhYmVsIGZpZWxkcz17bGFiZWxCb3hlc30vPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9sYWJlbHMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBMUJBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labels_jsx__ = __webpack_require__(284);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor() {\n        super();\n        this.state = { data: {\n                user: 'Hello',\n                title: 'E-L-L',\n                nic: {},\n                base: {},\n                pg: {},\n                vg: {},\n                flavors: {}\n            } };\n    }\n\n    componentDidMount() {\n        let that = this;\n        chrome.tabs.getSelected(null, function (tab) {\n            let port = chrome.runtime.connect({\n                name: \"Print Labels\"\n            });\n            port.postMessage(\"printLabels\");\n            port.onMessage.addListener(function (data) {\n                console.log('print page: ', data.data);\n                that.setState({ data: data.data });\n            });\n        });\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__labels_jsx__[\"a\" /* default */], { selections: this.state.data.selections, available: this.state.data.available })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L3ByaW50X3BhZ2UuanN4P2FkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTGFiZWxzIGZyb20gJy4vbGFiZWxzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2RhdGE6IHtcbiAgICAgICAgICAgIHVzZXI6ICdIZWxsbycsXG4gICAgICAgICAgICB0aXRsZTogJ0UtTC1MJyxcbiAgICAgICAgICAgIG5pYzoge30sXG4gICAgICAgICAgICBiYXNlOiB7fSxcbiAgICAgICAgICAgIHBnOiB7fSxcbiAgICAgICAgICAgIHZnOiB7fSxcbiAgICAgICAgICAgIGZsYXZvcnM6IHt9XG4gICAgICAgIH19XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQobnVsbCwgZnVuY3Rpb24gKHRhYikge1xuICAgICAgICAgICAgbGV0IHBvcnQgPSBjaHJvbWUucnVudGltZS5jb25uZWN0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByaW50IExhYmVsc1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoXCJwcmludExhYmVsc1wiKTtcbiAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByaW50IHBhZ2U6ICcsIGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7ZGF0YTogZGF0YS5kYXRhfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYWJlbHMgc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLnNlbGVjdGlvbnN9IGF2YWlsYWJsZT17dGhpcy5zdGF0ZS5kYXRhLmF2YWlsYWJsZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9wcmludF9wYWdlLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFsQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})