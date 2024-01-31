console.log("CONTENT SCRIPT HERE");

// document.addEventListener("mouseup", function (event) {
//   let selection = window.getSelection();
//   let selectionText = selection.toString().trim();
//   //assume worse intent and validate better

//   if (selectionText === "") {
//     selectionText = "NO HIGHLIGHTED TEXT";
//   }

//   const response = chrome.runtime.sendMessage({
//     type: "sentHighlight",
//     text: selectionText,
//   });
// });

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

// document.onmouseup = function () {
//   window.alert(window.getSelection().toString());
// };
