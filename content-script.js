// Convert country name to emoji flag
function countryToFlag(country) {
  if (!country) return "";

  const countryToEmojiFlag = {
    "Afghanistan": "🇦🇫",
    "Albania": "🇦🇱",
    "Algeria": "🇩🇿",
    "Andorra": "🇦🇩",
    "Angola": "🇦🇴",
    "Antigua and Barbuda": "🇦🇬",
    "Argentina": "🇦🇷",
    "Armenia": "🇦🇲",
    "Australia": "🇦🇺",
    "Austria": "🇦🇹",
    "Azerbaijan": "🇦🇿",
    "Bahamas": "🇧🇸",
    "Bahrain": "🇧🇭",
    "Bangladesh": "🇧🇩",
    "Barbados": "🇧🇧",
    "Belarus": "🇧🇾",
    "Belgium": "🇧🇪",
    "Belize": "🇧🇿",
    "Benin": "🇧🇯",
    "Bhutan": "🇧🇹",
    "Bolivia": "🇧🇴",
    "Bosnia and Herzegovina": "🇧🇦",
    "Botswana": "🇧🇼",
    "Brazil": "🇧🇷",
    "Brunei": "🇧🇳",
    "Bulgaria": "🇧🇬",
    "Burkina Faso": "🇧🇫",
    "Burundi": "🇧🇮",
    "Cabo Verde": "🇨🇻",
    "Cambodia": "🇰🇭",
    "Cameroon": "🇨🇲",
    "Canada": "🇨🇦",
    "Central African Republic": "🇨🇫",
    "Chad": "🇹🇩",
    "Chile": "🇨🇱",
    "China": "🇨🇳",
    "Colombia": "🇨🇴",
    "Comoros": "🇰🇲",
    "Congo": "🇨🇬",
    "Costa Rica": "🇨🇷",
    "Croatia": "🇭🇷",
    "Cuba": "🇨🇺",
    "Cyprus": "🇨🇾",
    "Czech Republic": "🇨🇿",
    "Democratic Republic of Congo": "🇨🇩",
    "Denmark": "🇩🇰",
    "Djibouti": "🇩🇯",
    "Dominica": "🇩🇲",
    "Dominican Republic": "🇩🇴",
    "Ecuador": "🇪🇨",
    "Egypt": "🇪🇬",
    "El Salvador": "🇸🇻",
    "Equatorial Guinea": "🇬🇶",
    "Eritrea": "🇪🇷",
    "Estonia": "🇪🇪",
    "Eswatini": "🇸🇿",
    "Ethiopia": "🇪🇹",
    "Fiji": "🇫🇯",
    "Finland": "🇫🇮",
    "France": "🇫🇷",
    "Gabon": "🇬🇦",
    "Gambia": "🇬🇲",
    "Georgia": "🇬🇪",
    "Germany": "🇩🇪",
    "Ghana": "🇬🇭",
    "Greece": "🇬🇷",
    "Grenada": "🇬🇩",
    "Guatemala": "🇬🇹",
    "Guinea": "🇬🇳",
    "Guinea-Bissau": "🇬🇼",
    "Guyana": "🇬🇾",
    "Haiti": "🇭🇹",
    "Honduras": "🇭🇳",
    "Hungary": "🇭🇺",
    "Iceland": "🇮🇸",
    "India": "🇮🇳",
    "Indonesia": "🇮🇩",
    "Iran": "🇮🇷",
    "Iraq": "🇮🇶",
    "Ireland": "🇮🇪",
    "Israel": "🇮🇱",
    "Italy": "🇮🇹",
    "Jamaica": "🇯🇲",
    "Japan": "🇯🇵",
    "Jordan": "🇯🇴",
    "Kazakhstan": "🇰🇿",
    "Kenya": "🇰🇪",
    "Kiribati": "🇰🇮",
    "Kuwait": "🇰🇼",
    "Kyrgyzstan": "🇰🇬",
    "Laos": "🇱🇦",
    "Latvia": "🇱🇻",
    "Lebanon": "🇱🇧",
    "Lesotho": "🇱🇸",
    "Liberia": "🇱🇷",
    "Libya": "🇱🇾",
    "Liechtenstein": "🇱🇮",
    "Lithuania": "🇱🇹",
    "Luxembourg": "🇱🇺",
    "Madagascar": "🇲🇬",
    "Malawi": "🇲🇼",
    "Malaysia": "🇲🇾",
    "Maldives": "🇲🇻",
    "Mali": "🇲🇱",
    "Malta": "🇲🇹",
    "Marshall Islands": "🇲🇭",
    "Mauritania": "🇲🇷",
    "Mauritius": "🇲🇺",
    "Mexico": "🇲🇽",
    "Micronesia": "🇫🇲",
    "Moldova": "🇲🇩",
    "Monaco": "🇲🇨",
    "Mongolia": "🇲🇳",
    "Montenegro": "🇲🇪",
    "Morocco": "🇲🇦",
    "Mozambique": "🇲🇿",
    "Myanmar": "🇲🇲",
    "Namibia": "🇳🇦",
    "Nauru": "🇳🇷",
    "Nepal": "🇳🇵",
    "Netherlands": "🇳🇱",
    "New Zealand": "🇳🇿",
    "Nicaragua": "🇳🇮",
    "Niger": "🇳🇪",
    "Nigeria": "🇳🇬",
    "North Korea": "🇰🇵",
    "Macedonia": "🇲🇰",
    "Norway": "🇳🇴",
    "Oman": "🇴🇲",
    "Pakistan": "🇵🇰",
    "Palau": "🇵🇼",
    "Panama": "🇵🇦",
    "Papua New Guinea": "🇵🇬",
    "Paraguay": "🇵🇾",
    "Peru": "🇵🇪",
    "Philippines": "🇵🇭",
    "Poland": "🇵🇱",
    "Portugal": "🇵🇹",
    "Qatar": "🇶🇦",
    "Romania": "🇷🇴",
    "Russia": "🇷🇺",
    "Rwanda": "🇷🇼",
    "Saint Kitts and Nevis": "🇰🇳",
    "Saint Lucia": "🇱🇨",
    "Saint Vincent and the Grenadines": "🇻🇨",
    "Samoa": "🇼🇸",
    "San Marino": "🇸🇲",
    "Sao Tome and Principe": "🇸🇹",
    "Saudi Arabia": "🇸🇦",
    "Senegal": "🇸🇳",
    "Serbia": "🇷🇸",
    "Seychelles": "🇸🇨",
    "Sierra Leone": "🇸🇱",
    "Singapore": "🇸🇬",
    "Slovakia": "🇸🇰",
    "Slovenia": "🇸🇮",
    "Solomon Islands": "🇸🇧",
    "Somalia": "🇸🇴",
    "South Africa": "🇿🇦",
    "South Korea": "🇰🇷",
    "South Sudan": "🇸🇸",
    "Spain": "🇪🇸",
    "Sri Lanka": "🇱🇰",
    "Sudan": "🇸🇩",
    "Suriname": "🇸🇷",
    "Sweden": "🇸🇪",
    "Switzerland": "🇨🇭",
    "Syria": "🇸🇾",
    "Tajikistan": "🇹🇯",
    "Tanzania": "🇹🇿",
    "Thailand": "🇹🇭",
    "Timor-Leste": "🇹🇱",
    "Togo": "🇹🇬",
    "Tonga": "🇹🇴",
    "Trinidad and Tobago": "🇹🇹",
    "Tunisia": "🇹🇳",
    "Turkey": "🇹🇷",
    "Turkmenistan": "🇹🇲",
    "Tuvalu": "🇹🇻",
    "Uganda": "🇺🇬",
    "Ukraine": "🇺🇦",
    "United Arab Emirates": "🇦🇪",
    "USA": "🇺🇸",
    "United Kingdom": "🇬🇧",
    "Uruguay": "🇺🇾",
    "Uzbekistan": "🇺🇿",
    "Vanuatu": "🇻🇺",
    "Venezuela": "🇻🇪",
    "Vietnam": "🇻🇳",
    "Yemen": "🇾🇪",
    "Zambia": "🇿🇲",
    "Zimbabwe": "🇿🇼"
  };

  return countryToEmojiFlag[country] || "";
}

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
  1: "#f44336",
  2: "#ffeb3b",
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

      // Remove "/ 6" or "/ 3" if value is N/A
      const reportingDisplay = reportingValue === "N/A"
        ? "Factual Reporting: N/A"
        : `Factual Reporting: ${reportingValue} / 6`;

      const accuracyDisplay = accuracyValue === "N/A"
        ? "Credibility: N/A"
        : `Credibility: ${accuracyValue} / 3`;

      const reportingColor = reportingColors[reportingValue] || "#fff";
      const accuracyColor = accuracyColors[accuracyValue] || "#fff";

      const flag = countryToFlag(match["Country"]);

      // Set badge content
      // Create the wrapper
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.justifyContent = "space-between";
      wrapper.style.alignItems = "center";

      // Left section
      const left = document.createElement("div");

      // Flag element
      // Flag container (left column)
      const flagWrapper = document.createElement("div");
      flagWrapper.style.display = "flex";
      flagWrapper.style.alignItems = "center";
      flagWrapper.style.marginRight = "8px";

      const flagEl = document.createElement("span");
      flagEl.style.fontSize = "18px";
      flagEl.textContent = flag;

      flagWrapper.appendChild(flagEl);
      wrapper.appendChild(flagWrapper);

      // Reporting line
      const reportingEl = document.createElement("span");
      reportingEl.style.color = reportingColor;
      reportingEl.style.fontWeight = "bold";
      reportingEl.textContent = reportingDisplay;
      left.appendChild(reportingEl);

      left.appendChild(document.createElement("br"));

      // Accuracy line
      const accuracyEl = document.createElement("span");
      accuracyEl.style.color = accuracyColor;
      accuracyEl.style.fontWeight = "bold";
      accuracyEl.textContent = accuracyDisplay;
      left.appendChild(accuracyEl);

      left.appendChild(document.createElement("br"));

      // Source link
      const sourceLink = document.createElement("a");
      sourceLink.href = "#";
      sourceLink.textContent = "Source";
      sourceLink.className = "go-to-source";
      sourceLink.style.color = "#4ea3ff";
      sourceLink.style.textDecoration = "underline";
      sourceLink.style.cursor = "pointer";
      left.appendChild(sourceLink);

      // Add left side
      wrapper.appendChild(left);

      // Close button
      const closeBtn = document.createElement("button");
      closeBtn.className = "media-close-btn";
      closeBtn.title = "Close";
      closeBtn.textContent = "×";
      closeBtn.style.background = "none";
      closeBtn.style.border = "none";
      closeBtn.style.color = "white";
      closeBtn.style.fontWeight = "bold";
      closeBtn.style.cursor = "pointer";
      closeBtn.style.marginLeft = "10px";
      wrapper.appendChild(closeBtn);

      // Insert wrapper
      badge.appendChild(wrapper);



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