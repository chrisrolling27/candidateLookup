chrome.runtime.onInstalled.addListener(function() {
  console.log("Extension installed");
  chrome.contextMenus.create({
      id: "sampleContextMenu",
      title: "Search for NAME",
      contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "sampleContextMenu") {
    // Logic to open the HTML search panel
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"), // Replace with the path to your HTML file
      type: "popup",
      width: 500, // Set the desired width
      height: 600 // Set the desired height
    });
  }
});

//seems like background.js is only really doing a weird popup for the context menu? hm 
//background.js is not supposed to intercept page content for security reasons