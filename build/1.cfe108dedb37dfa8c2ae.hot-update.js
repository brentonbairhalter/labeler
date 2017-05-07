webpackHotUpdate(1,{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(40);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labels_jsx__ = __webpack_require__(284);\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = class extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {\n    constructor() {\n        super();\n        this.state = { data: {\n                user: 'Hello',\n                title: 'E-L-L',\n                data: '',\n                nic: {},\n                base: {},\n                pg: {},\n                vg: {},\n                flavors: {}\n            } };\n    }\n\n    componentDidMount() {\n        let that = this;\n        chrome.tabs.getSelected(null, function (tab) {\n            let port = chrome.runtime.connect({\n                name: \"Print Labels\"\n            });\n            port.postMessage(\"printLabels\");\n            port.onMessage.addListener(function (data) {\n                console.log('all data: ', data.data);\n                that.setState({ data: data.data });\n            });\n        });\n    }\n\n    render() {\n        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n            \"div\",\n            null,\n            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__labels_jsx__[\"a\" /* default */], { selections: this.state.data.selections, available: this.state.data.available })\n        );\n    }\n};;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3ByaW50L3ByaW50X3BhZ2UuanN4P2FkNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTGFiZWxzIGZyb20gJy4vbGFiZWxzLmpzeCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2RhdGE6IHtcbiAgICAgICAgICAgIHVzZXI6ICdIZWxsbycsXG4gICAgICAgICAgICB0aXRsZTogJ0UtTC1MJyxcbiAgICAgICAgICAgIGRhdGE6ICcnLFxuICAgICAgICAgICAgbmljOiB7fSxcbiAgICAgICAgICAgIGJhc2U6IHt9LFxuICAgICAgICAgICAgcGc6IHt9LFxuICAgICAgICAgICAgdmc6IHt9LFxuICAgICAgICAgICAgZmxhdm9yczoge31cbiAgICAgICAgfX1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZChudWxsLCBmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICBsZXQgcG9ydCA9IGNocm9tZS5ydW50aW1lLmNvbm5lY3Qoe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUHJpbnQgTGFiZWxzXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZShcInByaW50TGFiZWxzXCIpO1xuICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWxsIGRhdGE6ICcsIGRhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhhdC5zZXRTdGF0ZSh7ZGF0YTogZGF0YS5kYXRhfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYWJlbHMgc2VsZWN0aW9ucz17dGhpcy5zdGF0ZS5kYXRhLnNlbGVjdGlvbnN9IGF2YWlsYWJsZT17dGhpcy5zdGF0ZS5kYXRhLmF2YWlsYWJsZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9wcmludC9wcmludF9wYWdlLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQW5DQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})