let mbfcData = [];
let allsidesData = [];

async function loadData() {
  try {
    const [mbfcResponse, allsidesResponse] = await Promise.all([
      fetch(chrome.runtime.getURL("data/mbfc_data_converted.json")),
      fetch(chrome.runtime.getURL("data/allsides_data_converted.json"))
    ]);

    mbfcData = await mbfcResponse.json();
    allsidesData = await allsidesResponse.json();

  } catch (err) {
    console.error("Failed to load data:", err);
  }
}

loadData();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_MBFC_DATA") sendResponse(mbfcData);
  if (msg.type === "GET_ALLSIDES_DATA") sendResponse(allsidesData);

  if (msg.type === "OPEN_SOURCE_URL") {
    chrome.tabs.create({ url: msg.url });
  }
});