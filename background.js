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
  
  chrome.storage.local.set({ key: message }).then(console.log("this work?"));

  console.log("Message received:", message);

  if (popupPort) {
    popupPort.postMessage({ text: message });
  }
});
