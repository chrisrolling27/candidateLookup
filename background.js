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


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  sendResponse({ response: "Message received" });
});


//seems like background.js is only really doing a weird popup for the context menu? hm
//background.js is not supposed to intercept page content for security reasons

//does content.js need to send to background.js or can it go to popup.js?
