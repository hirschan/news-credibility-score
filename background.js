let mediaData = [];

// Load JSON at extension startup
fetch(browser.runtime.getURL("media_data.json"))
  .then(response => response.json())
  .then(data => {
    mediaData = data;
    console.log("Data loaded in background:", mediaData);
  })
  .catch(err => console.error("Failed to load data:", err));

// Listen for messages from content scripts
browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_MEDIA_DATA") {
    // Wait until mediaData is loaded
    if (mediaData.length > 0) {
      sendResponse(mediaData);
    } else {
      // If JSON not yet loaded, wait a bit
      fetch(browser.runtime.getURL("media_data.json"))
        .then(r => r.json())
        .then(data => {
          mediaData = data;
          sendResponse(mediaData);
        })
        .catch(err => console.error(err));
    }
    return true;
  }
});

browser.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "OPEN_SOURCE_URL") {
    browser.tabs.create({ url: msg.url });
  }
});
