// --------- RIGHT-CLICK CONTEXT MENU ----------
//Set Up the Context Menu
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search Takoboto for \"%s\"";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "context" + context});  
});

function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "http://takoboto.jp/?q=" + encodeURIComponent(sText);  
  window.open(url, '_blank');
};

//Add the Click Event to the Content Menu
chrome.contextMenus.onClicked.addListener(onClickHandler);

