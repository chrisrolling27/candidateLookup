console.log("CONTENT SCRIPT HERE");

// let selection = window.getSelection();
// let selectionText = selection.toString().trim();

// if (selectionText === "") {
//   selectionText = "NO HIGHLIGHTED TEXT";
// }

// if (selectionText) {
//   chrome.runtime.sendMessage({
//     type: "sentHighlight",
//     text: selectionText,
//   });
// }

// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getSelectedText") {
    const selectedText = window.getSelection().toString();
    sendResponse({text: selectedText});
  }
});
