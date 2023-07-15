console.log('hello');
(async () => await chrome.runtime.sendMessage({greeting: 'hey friend'}))();
