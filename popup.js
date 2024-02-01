console.log("popup.js here");

// popup.js
window.onload = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getSelectedText"}, function(response) {
      if (response && response.text) {
        // Handle the received text, e.g., display it in the popup
        console.log('Selected text:', response.text);
        document.getElementById("someElement").textContent = response.text;
      }
    });
  });
};




//stuff for html search
function search(baseURL, inputId) {
  var input = document.getElementById(inputId);
  var query = encodeURIComponent(input.value);
  var searchUrl = baseURL + query;
  if (query) {
    chrome.tabs.create({ url: searchUrl });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var linkedinBtn = document.getElementById("linkedinSearch");
  var facebookBtn = document.getElementById("facebookSearch");
  var githubBtn = document.getElementById("githubSearch");

  linkedinBtn.addEventListener("click", function () {
    search(
      "https://www.linkedin.com/search/results/all/?keywords=",
      "searchBox"
    );
  });

  facebookBtn.addEventListener("click", function () {
    search("https://www.facebook.com/search/top/?q=", "searchBox");
  });

  githubBtn.addEventListener("click", function () {
    search("https://github.com/search?q=", "searchBox");
  });
});




chrome.runtime.connect({ name: "popup" });

chrome.runtime.onMessage.addListener(function (message) {
  console.log("popup onMessage Listener");

  if (message.text) {
    console.log("popup.js got text!");
    document.getElementById("someElement").textContent = message.text;
  }

});




//LISTENS FOR BACKGROUND.JS
// const port = chrome.runtime.connect({ name: 'popup' });

// port.onMessage.addListener((message) => {
//   //console.log('port.onMessage popup.js message detected');
// if (message.text) {
//   console.log("popup.js got text!");
//   document.getElementById("someElement").textContent = message.text;
// }
// });


