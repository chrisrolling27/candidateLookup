document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: getSelectedText
      });
  });
});

function getSelectedText() {
  chrome.tabs.sendMessage(tabs[0].id, {method: "getSelection"}, function(response) {
      document.getElementById("text").innerHTML = response.data;
  });
}




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
