console.log("background.js here");

//sample contextMenus
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Search for NAME",
    contexts: ["all"],
  });
});

//creates contextPopup
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "sampleContextMenu") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 500,
      height: 600,
    });
  }
});

let popupPort;

//listens for port connections
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    popupPort = port;
    port.onDisconnect.addListener(() => {
      popupPort = null;
    });
  }
});

//listener for content.js and sends to popupPort if exists
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('message.text: ', message.text);
  chrome.storage.local.set({ key: message.text }, function () {
    //console.log("Storage set:", message.text);

    // Check if popupPort is available and message is set
    if (popupPort) {
      // Since storage operations are async, retrieve inside the callback
      chrome.storage.local.get(["key"], function (result) {
        if (result.key) {
          console.log(result.key);
          popupPort.postMessage({ text: result.key });
        }
      });
    }
  });

  //console.log("Message received:", message);
});
