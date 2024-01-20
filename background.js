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

//listener for content.js and sends to popupPort if exists
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received:", message);
  if (popupPort) {
    popupPort.postMessage({ highlightedText: message.text });
  }
});


//listens for popup.js port, highly suspect 
chrome.runtime.onConnect.addListener((port) => {
  if (port.name === "popup") {
    popupPort = port;
    port.onDisconnect.addListener(() => {
      popupPort = null;
    });
  }
});
