function injectScript() {
  const monkeyPatchSrc = chrome.runtime.getURL('scripts/monkey_patch.js');
  var s = document.createElement('script');
  s.src = monkeyPatchSrc;
  s.onload = function() {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const tabId = sender.tab.id;

    chrome.scripting.executeScript({
      target: {tabId,},
      func: injectScript
    });
  }
);

