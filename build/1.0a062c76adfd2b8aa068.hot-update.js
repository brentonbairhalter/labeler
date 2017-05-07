webpackHotUpdate(1,{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_jsx__ = __webpack_require__(283);\n\n\n\n\n\n//@TODO: build up a cart and render labels for multiple labels\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    render() {\n        let labelCount = this.props.count || 3,\n            labelBoxes = [],\n            sels = this.props.selections;\n\n        for (let i = 0; i <= labelCount; i++) {\n            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.props.available, function (n, l) {\n                const show = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(sels.selectedFields, l);\n\n                if (show) {\n                    if (n) {}\n                    labelBoxes.push({ heading: l, values: n });\n                } else {\n                    console.log('handle dont show?: ', sels.selectedFields, l);\n                }\n            });\n        };\n\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            { id: \"elr_labels\", className: 'selected-template' },\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__label_jsx__[\"a\" /* default */], { fields: labelBoxes })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L2xhYmVscy5qc3g/MmNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL2xhYmVsLmpzeCdcblxuLy9AVE9ETzogYnVpbGQgdXAgYSBjYXJ0IGFuZCByZW5kZXIgbGFiZWxzIGZvciBtdWx0aXBsZSBsYWJlbHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGxhYmVsQ291bnQgPSB0aGlzLnByb3BzLmNvdW50IHx8IDMsXG4gICAgICAgICAgICBsYWJlbEJveGVzID0gW10sXG4gICAgICAgICAgICBzZWxzID0gdGhpcy5wcm9wcy5zZWxlY3Rpb25zO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGxhYmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgXy5lYWNoKHRoaXMucHJvcHMuYXZhaWxhYmxlLCBmdW5jdGlvbihuLCBsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9IF8uaW5jbHVkZXMoc2Vscy5zZWxlY3RlZEZpZWxkcywgbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobikge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxCb3hlcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRpbmc6IGwsIHZhbHVlczogbn1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgZG9udCBzaG93PzogJywgc2Vscy5zZWxlY3RlZEZpZWxkcywgbCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImVscl9sYWJlbHNcIiBjbGFzc05hbWU9eydzZWxlY3RlZC10ZW1wbGF0ZSd9PlxuICAgICAgICAgICAgICAgIDxMYWJlbCBmaWVsZHM9e2xhYmVsQm94ZXN9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJpbnQvbGFiZWxzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQTdCQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labels_jsx__ = __webpack_require__(284);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor() {\n        super();\n        this.state = { data: {\n                user: 'Hello',\n                title: 'E-L-L',\n                nic: {},\n                base: {},\n                pg: {},\n                vg: {},\n                flavors: {}\n            } };\n    }\n\n    componentDidMount() {\n        let that = this;\n        chrome.tabs.getSelected(null, function (tab) {\n            let port = chrome.runtime.connect({\n                name: \"Print Labels\"\n            });\n            port.postMessage(\"printLabels\");\n            port.onMessage.addListener(function (data) {\n                console.log('print page: ', data.data);\n                that.setState({ data: data.data });\n            });\n        });\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__labels_jsx__[\"a\" /* default */], { selections: this.state.data.selections, available: this.state.data.available })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L3ByaW50X3BhZ2UuanN4P2FkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTGFiZWxzIGZyb20gJy4vbGFiZWxzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2RhdGE6IHtcbiAgICAgICAgICAgIHVzZXI6ICdIZWxsbycsXG4gICAgICAgICAgICB0aXRsZTogJ0UtTC1MJyxcbiAgICAgICAgICAgIG5pYzoge30sXG4gICAgICAgICAgICBiYXNlOiB7fSxcbiAgICAgICAgICAgIHBnOiB7fSxcbiAgICAgICAgICAgIHZnOiB7fSxcbiAgICAgICAgICAgIGZsYXZvcnM6IHt9XG4gICAgICAgIH19XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgY2hyb21lLnRhYnMuZ2V0U2VsZWN0ZWQobnVsbCwgZnVuY3Rpb24gKHRhYikge1xuICAgICAgICAgICAgbGV0IHBvcnQgPSBjaHJvbWUucnVudGltZS5jb25uZWN0KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByaW50IExhYmVsc1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoXCJwcmludExhYmVsc1wiKTtcbiAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ByaW50IHBhZ2U6ICcsIGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7ZGF0YTogZGF0YS5kYXRhfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYWJlbHMgc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLnNlbGVjdGlvbnN9IGF2YWlsYWJsZT17dGhpcy5zdGF0ZS5kYXRhLmF2YWlsYWJsZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9wcmludF9wYWdlLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFsQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})