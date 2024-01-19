chrome.runtime.onInstalled.addListener(function() {
  console.log("Extension installed");
  chrome.contextMenus.create({
      id: "sampleContextMenu",
      title: "Search for candidate",
      contexts: ["all"]
  });
});






// Handling context menu click events
// chrome.contextMenus.onClicked.addListener((info, tab) => {
//   if (info.menuItemId === "sampleContextMenu" && info.selectionText) {
//       console.log("Context menu item clicked. Selected text:", info.selectionText);
//       // Add functionality here, e.g., sending the selected text to the popup
//   }
// });

// Example of a background event listener for messages from popup.js
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//       if (request.action == "performSearch") {
//           console.log("Performing search for:", request.searchText);
//           // Add code here to perform the search
//       }
//   }
// );
