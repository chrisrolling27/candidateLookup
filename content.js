async function sendHighlightedText() {
  const highlightedText = "tryversion1";
  //=window.getSelection().toString();

  // Send the highlighted text to the background script
  const response = await chrome.runtime.sendMessage({ text: highlightedText });
  console.log(response);
}

sendHighlightedText();

//listens for mouseup highlighted text
document.addEventListener("mouseup", () => {
  const selectedText = "tryversion2";
  //=window.getSelection().toString();
  if (selectedText) {
    // Handle the highlighted text
  }
});
