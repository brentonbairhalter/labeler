webpackHotUpdate(3,{

/***/ 272:
/***/ (function(module, exports) {

eval("let recipe;\nlet printData;\n\nchrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {\n    if (message.action === 'gotDOM') {\n        recipe = message.page;\n    }\n});\n\nchrome.runtime.onConnect.addListener(function (port) {\n    port.onMessage.addListener(function (message) {\n        if (message == \"getRecipe\") {\n            port.postMessage(recipe);\n        }\n    });\n});\n\nchrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {\n    if (msg.action === 'print') {\n        printData = msg;\n        console.log(document, msg.data);\n        chrome.tabs.create({ url: chrome.runtime.getURL(\"print.html\") });\n    }\n});\n\nchrome.runtime.onConnect.addListener(function (port) {\n    port.onMessage.addListener(function (message) {\n        if (message == \"printLabels\") {\n            port.postMessage(printData);\n        }\n    });\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9iYWNrZ3JvdW5kLmpzP2JjM2IiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHJlY2lwZTtcbmxldCBwcmludERhdGE7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICBmdW5jdGlvbihtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdnb3RET00nKSB7XG4gICAgICAgICAgICByZWNpcGUgPSBtZXNzYWdlLnBhZ2U7XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocG9ydCkge1xuICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKG1lc3NhZ2UgPT0gXCJnZXRSZWNpcGVcIikge1xuICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZShyZWNpcGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoIGZ1bmN0aW9uKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2Upe1xuICAgIGlmKG1zZy5hY3Rpb24gPT09ICdwcmludCcpIHtcbiAgICAgICAgcHJpbnREYXRhID0gbXNnO1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudCwgbXNnLmRhdGEpO1xuICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoXG4gICAgICAgICAgICB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwicHJpbnQuaHRtbFwiKSB9XG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihwb3J0KSB7XG4gICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBpZiAobWVzc2FnZSA9PSBcInByaW50TGFiZWxzXCIpIHtcbiAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UocHJpbnREYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2JhY2tncm91bmQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})