console.log("content script here");

document.addEventListener("mouseup", async function (event) {
  let selection = window.getSelection();
  let selectionText = selection.toString().trim();
  //assume worse intent and validate better

  const response = await chrome.runtime.sendMessage({
    type: "sentHighlight",
    text: selectionText
  });
  // if (selectionText && selectionText !== "") {
  // }
  //
});
