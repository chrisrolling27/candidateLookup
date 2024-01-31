console.log("CONTENT SCRIPT HERE");



document.addEventListener("mouseup", function (event) {
  let selection = window.getSelection();
  let selectionText = selection.toString().trim();

  if (selectionText === "") {
    selectionText = "NO HIGHLIGHTED TEXT";
  }

  const response = chrome.runtime.sendMessage({
    type: "sentHighlight",
    text: selectionText,
  });
});