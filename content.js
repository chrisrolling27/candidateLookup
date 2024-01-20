console.log("content script here");

document.addEventListener("mouseup", async function (event) {
  var selection = window.getSelection();
  var selectionText = selection.toString().trim();

  if (selectionText && selectionText !== "") {
    const response = await chrome.runtime.sendMessage({ text: selectionText });
  }
});
