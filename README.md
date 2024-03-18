# candidateLookup

todo:
put candidate name in context menu 

https://recruitingdaily.com/easy-candidate-lookup-with-this-vital-chrome-extension/

//seems like background.js is only really doing a weird popup for the context menu? hm
//background.js is not supposed to intercept page content for security reasons

//does content.js need to send to background.js or can it go to popup.js?

//https://medium.com/@jgleeee/quicklygpt-a-chrome-extension-to-save-your-time-a041805ebe77


go forward: why condition content.js to listen for mouse? it should liberally send highlighted text 



from content.js:
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
};


thoughts:
try to get a more permenant store?
when does popup.js work


todo:
