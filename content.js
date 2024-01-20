async function sendHighlightedText() {
    // Get the highlighted text
    const highlightedText = window.getSelection().toString();
  
    // Send the highlighted text to the background script
    const response = await chrome.runtime.sendMessage({ text: highlightedText });
  
    // Handle the response here
    console.log(response);
  }
  
  sendHighlightedText();
  

//listens for mouseup highlighted text 
  document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      // Handle the highlighted text
    }
  });
  