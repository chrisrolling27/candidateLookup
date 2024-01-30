console.log("CONTENT SCRIPT HERE");

document.addEventListener("mouseup", async function (event) {
  let selection = window.getSelection();
  let selectionText = selection.toString().trim();
  //assume worse intent and validate better

  if (selectionText === "") {
    selectionText = "NO HIGHLIGHTED TEXT";
  }

  const response = await chrome.runtime.sendMessage({
    type: "sentHighlight",
    text: selectionText,
  });
  // if (selectionText && selectionText !== "") {
  // }
  //
});
