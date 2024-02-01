console.log("CONTENT SCRIPT HERE");

let selection = window.getSelection();
let selectionText = selection.toString().trim();

if (selectionText === "") {
  selectionText = "NO HIGHLIGHTED TEXT";
}

if (selectionText) {
  chrome.runtime.sendMessage({
    type: "sentHighlight",
    text: selectionText,
  });
}
