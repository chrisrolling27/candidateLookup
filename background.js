console.log("background.js here");

//adds the extension to the right click context menu
chrome.runtime.onInstalled.addListener(function () {
  console.log("installed contextMenu");
  chrome.contextMenus.create({
    id: "contextMenu",
    title: "Search Candidate",
    contexts: ["all"],
  });
});

//listens for user selection of the extension in the context menu
chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId === "contextMenu") {
    console.log("extension clicked in contextMenu");
    try {
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        })
        .then(() => {
          console.log("background's content.js returned");
          return chrome.tabs.sendMessage(tab.id, { action: "getSelectedText" });
        })
        .then((response) => {
          console.log("Selected text: ", response.text);
          //todo cleanse response.text 
          chrome.storage.local.set({ highlight: response.text }, function () {
            //creates window after writing highlight to storage
            chrome.windows.create({
              //should there be 2 different popups to match the two retrieval methods? 
              url: chrome.runtime.getURL("popup.html"),
              type: "popup",
              width: 500,
              height: 600,
            });
          });
        });
    } catch (error) {
      console.error("Error in try-catch: ", error);
    }
  }
});

//why doesnt context menu get popup without highlighted text?
//background needs highlight name for menu
//
