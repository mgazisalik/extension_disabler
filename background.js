chrome.management.onEnabled.addListener(function(extensionInfo) {
  // If the extension is enabled, update the button text
  chrome.management.getAll(function(extensions) {
    let enabledExtensions = extensions.filter(function(extension) {
      return extension.enabled;
    });
    if (enabledExtensions.length > 0) {
      chrome.browserAction.setPopup({
        popup: "popup.html"
      });
    }
  });
});

chrome.management.onDisabled.addListener(function(extensionInfo) {
  // If the extension is disabled, update the button text
  chrome.management.getAll(function(extensions) {
    let enabledExtensions = extensions.filter(function(extension) {
      return extension.enabled;
    });
    if (enabledExtensions.length == 0) {
      chrome.browserAction.setPopup({
        popup: "popup.html"
      });
    }
  });
});
