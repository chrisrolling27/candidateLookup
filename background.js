console.log("background.js here");

//adds context menu
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "contextMenu",
    title: "Search for NAME",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "contextMenu") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 500,
      height: 600,
    });
  }
});

//why doesnt context menu get popup without highlighted text? 
//background needs highlight name for menu
//