console.log("content script here");

document.addEventListener("mouseup", async function (event) {
  let selection = window.getSelection();
  let selectionText = selection.toString().trim();
  //assume worse intent and validate better

  const response = await chrome.runtime.sendMessage({
    type: "sentHighlight",
    text: "from content.js test!"
  });
  // if (selectionText && selectionText !== "") {
  // }
});
