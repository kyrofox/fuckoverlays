
chrome.contextMenus.create({
	"title": "Fuck it",
	"id": "fuckoverlays",
	"contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "fuckit");
    });
});

