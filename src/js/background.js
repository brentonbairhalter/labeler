let recipe;
let printData;

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        if (message.action === 'gotDOM') {
            recipe = message.page;
        }
    }
);

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(message) {
        if (message == "getRecipe") {
            port.postMessage(recipe);
        }
    });
});


chrome.runtime.onMessage.addListener( function(msg, sender, sendResponse){
    if(msg.action === 'print') {
        printData = msg;
        chrome.tabs.create(
            { url: chrome.runtime.getURL("print.html") }
        );
    }
});

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(message) {
        if (message == "printLabels") {
            port.postMessage(printData);
        }
    });
});
