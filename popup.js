const toggleContainer = document.getElementById('toggle-container');
// Write extension Id's
const extensionIds = ["xxx", "yyy", "zzz"];

// Set the initial state of the toggle button
chrome.management.getAll(function (extensions) {
  let enabledExtensions = extensions.filter(function (extension) {
    return extension.enabled && extensionIds.includes(extension.id);
  });
  if (enabledExtensions.length > 0) {
    toggleContainer.innerHTML = `
      <label class="switch">
        <input type="checkbox" checked>
        <span class="slider round"></span>
      </label>
    `;
  } else {
    toggleContainer.innerHTML = `
      <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
  `;
  }
});

// Add a change event listener to the toggle button
toggleContainer.addEventListener('change', function (event) {
  if (event.target.checked) {
    // Enable the specified extensions
    extensionIds.forEach(function (id) {
      chrome.management.setEnabled(id, true);
    });
  } else {
    // Disable the specified extensions
    extensionIds.forEach(function (id) {
      chrome.management.setEnabled(id, false);
    });
  }
});
