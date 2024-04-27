var menuItem1 = {
  id: "Wikipedia",
  title: "Wikipedia",
  contexts: ["selection"],
};
var menuItem2 = {
  id: "Youtube",
  title: "Youtube",
  contexts: ["selection"],
};
var menuItem3 = {
  id: "X",
  title: "Twitter / X",
  contexts: ["selection"],
};
var menuItem4 = {
  id: "Pinterest",
  title: "Pictures",
  contexts: ["selection"],
};
var menuItem5 = {
  id: "AI",
  title: "AI Results",
  contexts: ["selection"],
};

chrome.contextMenus.create(menuItem1);
chrome.contextMenus.create(menuItem2);
chrome.contextMenus.create(menuItem3);
chrome.contextMenus.create(menuItem4);
chrome.contextMenus.create(menuItem5);

function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/g, "[").replace(/%5D/g, "]");
}

function addPlus(str) {
  return encodeURI(str).replace(/ /g, "+");
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "Wikipedia" && clickData.selectionText) {
    var wikiUrl =
      "https://en.wikipedia.org/wiki/" +
      fixedEncodeURI(clickData.selectionText);

    //    chrome.windows.create({
    //     url: wikiUrl,
    //     type: "popup"
    //   });
    chrome.tabs.create({
      url: wikiUrl,
    });
  }

  if (clickData.menuItemId == "Youtube" && clickData.selectionText) {
    var youtubeUrl =
      "https://www.youtube.com/results?search_query=" +
      addPlus(clickData.selectionText);

    //    chrome.windows.create({
    //     url: youtubeUrl,
    //     type: "popup"
    //   });
    chrome.tabs.create({
      url: youtubeUrl,
    });
  }

  if (clickData.menuItemId == "X" && clickData.selectionText) {
    var xSearchUrl =
      "https://www.google.com/search?q=" +
      addPlus(clickData.selectionText) +
      "+twitter";

    //    chrome.windows.create({
    //     url: xSearchUrl,
    //     type: "popup"
    //   });
    chrome.tabs.create({
      url: xSearchUrl,
    });
  }

  if (clickData.menuItemId == "Pinterest" && clickData.selectionText) {
    var pinterestUrl =
      "https://in.pinterest.com/search/pins/?q=" +
      fixedEncodeURI(clickData.selectionText);

    chrome.windows.create({
      url: pinterestUrl,
      type: "popup",
    });
  }

  if (clickData.menuItemId == "AI" && clickData.selectionText) {
    var aiUrl =
      "https://perplexity.ai/search?q=" +
      fixedEncodeURI(clickData.selectionText);

    chrome.windows.create({
      url: aiUrl,
      type: "popup",
    });
  }
});
