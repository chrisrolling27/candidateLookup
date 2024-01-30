console.log('popup.js here');

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






const port = chrome.runtime.connect({ name: 'popup' });

port.onMessage.addListener((message) => {
  console.log('port.onMessage popup.js message detected');
  if (message.highlightedText) {
    console.log('popup.js got text');
    document.getElementById('someElement').textContent = message.highlightedText;
  }
});
