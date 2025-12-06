const reportingColors = {
  "N/A": "#999",
  1: "#f44336",
  2: "#ff9800",
  3: "#ffeb3b",
  4: "#8bc34a",
  5: "#4caf50",
  6: "#2e7d32"
};

const accuracyColors = {
  "N/A": "#999",
  1: "#ff9800",
  2: "#8bc34a",
  3: "#2e7d32"
};

// Get the current page hostname (web URL address)
const hostname = window.location.hostname.replace(/^www\./, "").toLowerCase();

// Request media data from background.js
browser.runtime.sendMessage({ type: "GET_MEDIA_DATA" })
  .then(data => {
    if (!data || !Array.isArray(data)) return;

    // Finds matching object in json data
    const match = data.find(item => {
      // Normalize JSON URL field
      const itemURL = item["URL"].replace(/^www\./, "").toLowerCase();
      return hostname.endsWith(itemURL);
    });

    if (match) {

      // Create the badge
      const badge = document.createElement("div");
      badge.className = "media-badge";

      // Extract values
      const reportingValue = match["Objective Reporting"];
      const accuracyValue = match["Accuracy"];

      const reportingColor = reportingColors[reportingValue] || "#fff";
      const accuracyColor = accuracyColors[accuracyValue] || "#fff";

      // Set badge content
      badge.innerHTML = `
<div style="display: flex; justify-content: space-between; align-items: center;">
  <span>
    <span style="color: ${reportingColor}; font-weight: bold;">
      Factual Reporting: ${reportingValue} / 6
    </span><br>
    <span style="color: ${accuracyColor}; font-weight: bold;">
      Credibility: ${accuracyValue} / 3
    </span><br>
    <a href="#" class="go-to-source" style="color: #4ea3ff; text-decoration: underline; cursor: pointer;">
      Source
    </a>
  </span>
  <button class="media-close-btn" title="Close" 
          style="background:none;border:none;color:white;font-weight:bold;cursor:pointer;margin-left:10px;">
    &times;
  </button>
</div>
`;


      // Styling badge
      Object.assign(badge.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#222",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: "14px",
        fontFamily: "sans-serif",
        zIndex: "999999",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        boxSizing: "border-box",
        lineHeight: "1.2",
      });

      // Append to the page and add event listener for the close button
      badge.querySelector(".media-close-btn").addEventListener("click", () => {
        badge.remove();
      });

      // Open source link functionality
      badge.querySelector(".go-to-source").addEventListener("click", (e) => {
        e.preventDefault();
        browser.runtime.sendMessage({
          type: "OPEN_SOURCE_URL",
          url: match["Rating URL"]
        });
      });

      // Append badge to the page
      document.body.appendChild(badge);
      return badge;
    } else {
      console.log("No media data found for this site.");
    }
  })
  .catch(err => console.error("Failed to get media data:", err));