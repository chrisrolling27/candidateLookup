chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "ContextMenu",
    title: "Click here to open search window",
    contexts: ["all"]  
  });
});
//
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "sampleContextMenu") {
    // Logic for handling the context menu click
  }
});
