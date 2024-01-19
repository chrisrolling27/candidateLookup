chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed");
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Search for candidate",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "sampleContextMenu") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"), // Replace with the path to your HTML file
      type: "popup"
    });
  }
});
