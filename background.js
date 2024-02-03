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
      // Inject content.js into the current tab. i tihnk this works but you cant .then it
      chrome.scripting
        .executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        })
        .then(() => {
          console.log('you got this far');
          // Once the script is injected, send a message to it to get the selected text
          return chrome.tabs.sendMessage(tab.id, { action: "getSelectedText" });
        })
        .then((response) => {
          if (response && response.text) {
            console.log("Selected text: ", response.text);
            // Proceed with your logic here
          }
        })
        .catch((error) => {
          // Handle any errors that might occur during script injection or message sending
          console.error("Error occurred: ", error);
        });


      // Then open popup.html in a new popup window
      chrome.windows.create({
        url: chrome.runtime.getURL("popup2.html"),
        type: "popup",
        width: 500,
        height: 600,
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }
});

//why doesnt context menu get popup without highlighted text?
//background needs highlight name for menu
//
