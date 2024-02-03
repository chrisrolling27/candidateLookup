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
          if (response && response.text) {
            console.log("Selected text: ", response.text);
            chrome.windows.create({
              url: chrome.runtime.getURL("popup2.html"),
              type: "popup",
              width: 500,
              height: 600,
            });
          }
        })
        .catch((error) => {
          console.error("Error occurred: ", error);
        });
    } catch (error) {
      console.error("Error in try-catch: ", error);
    }
  }
});

//why doesnt context menu get popup without highlighted text?
//background needs highlight name for menu
//
