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
    "Zimbabwe": "🇿🇼",
  };

  return countryToEmojiFlag[country] || "";
}

// ===============================
// Color maps
// ===============================
const reportingColors = {
  "N/A": "#999",
  1: "#f44336",
  2: "#ff9800",
  3: "#ffeb3b",
  4: "#8bc34a",
  5: "#4caf50",
  6: "#2e7d32",
};

const accuracyColors = {
  "N/A": "#999",
  1: "#f44336",
  2: "#ffeb3b",
  3: "#2e7d32",
};

const angleColors = {
  "Least Biased": "#2e7d32",
  "Pro-Science": "#2e7d32",
  "Left-Center": "#64b5f6",
  "Center": "#9e9e9e", // Specific for Allsides
  "Allsides": "#9e9e9e", // Specific for Allsides
  "Right-Center": "#ff9800",
  "Left": "#1976d2",
  "Right": "#f44336",
  "Questionable": "#ffeb3b",
  "Conspiracy-Pseudoscience": "#b71c1c",
  "Satire": "#7b1fa2",
};

// ===============================
// Hostname normalization
// ===============================
const hostname = window.location.hostname.replace(/^www\./, "").toLowerCase();

// ===============================
// Request MBFC and AllSides data from background.js
// ===============================
Promise.all([
  chrome.runtime.sendMessage({ type: "GET_MBFC_DATA" }),
  chrome.runtime.sendMessage({ type: "GET_ALLSIDES_DATA" })
])
  .then(([mbfcData, allsidesData]) => {
    if (!Array.isArray(mbfcData) || !Array.isArray(allsidesData)) return;

    const hostnameNormalized = window.location.hostname.replace(/^www\./, "").toLowerCase();

    // Find MBFC data for news site
    const mbfcMatch = mbfcData.find(item => {
      const itemURL = item["URL"].replace(/^www\./, "").toLowerCase();
      return hostnameNormalized === itemURL || hostnameNormalized.endsWith("." + itemURL);
    });

    if (!mbfcMatch) return;

    // Find AllSides data for news site
    const allsidesMatch = allsidesData.find(item => {
      const itemURL = item["URL"].replace(/^www\./, "").toLowerCase()
      return hostnameNormalized === itemURL || hostnameNormalized.endsWith("." + itemURL);
    });

    const reportingValue = mbfcMatch["Objective Reporting"];
    const accuracyValue = mbfcMatch["Accuracy"];
    const angleMBFC = mbfcMatch["Angle"];
    const angleAllSides = allsidesMatch ? allsidesMatch["Angle"] : null;
    const flag = countryToFlag(mbfcMatch["Country"]);

    // ===============================
    // Badge container
    // ===============================
    const badge = document.createElement("div");
    Object.assign(badge.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "250px",
      backgroundColor: "#18181b",
      color: "#fff",
      borderRadius: "10px",
      fontFamily: "system-ui, sans-serif",
      fontSize: "14px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
      zIndex: "999999",
      overflow: "hidden",
      lineHeight: "1.2",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #fff",
    });

    const shadow = badge.attachShadow({ mode: 'open' }); // Prevent CSS bleed

    // ===============================
    // Header
    // ===============================
    const header = document.createElement("div");
    Object.assign(header.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 12px",
      backgroundColor: "#2a2a2a",
      borderBottom: "1px solid #2a2a2a",
      cursor: "move",
    });

    // ===============================
    // Drag n drop functionality
    // ===============================
    let isDragging = false;
    let startX, startY, startLeft, startTop;

    header.style.cursor = "move";

    header.addEventListener("mousedown", e => {
      isDragging = true;

      const rect = badge.getBoundingClientRect();
      startX = e.clientX;
      startY = e.clientY;
      startLeft = rect.left;
      startTop = rect.top;

      badge.style.left = `${startLeft}px`;
      badge.style.top = `${startTop}px`;
      badge.style.right = "auto";
      badge.style.bottom = "auto";

      e.preventDefault();
    });

    document.addEventListener("mousemove", e => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      badge.style.left = `${startLeft + dx}px`;
      badge.style.top = `${startTop + dy}px`;
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    const headerLeft = document.createElement("div");
    Object.assign(headerLeft.style, { display: "flex", alignItems: "center", gap: "8px" });
    const flagEl = document.createElement("span");
    flagEl.textContent = flag;
    flagEl.style.fontSize = "18px";
    const titleEl = document.createElement("span");
    titleEl.textContent = "News Source Analysis";
    titleEl.style.fontWeight = "600";
    titleEl.style.color = "#fff";
    headerLeft.appendChild(flagEl);
    headerLeft.appendChild(titleEl);
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    Object.assign(closeBtn.style, { background: "none", border: "none", color: "#fff", fontSize: "18px", cursor: "pointer" });
    closeBtn.addEventListener("click", () => badge.remove());
    header.appendChild(headerLeft);
    header.appendChild(closeBtn);

    // ===============================
    // Body
    // ===============================
    const body = document.createElement("div");
    Object.assign(body.style, { padding: "12px", display: "flex", flexDirection: "column", gap: "6px" });

    function createRow(labelText, value, colors, max) {
      const row = document.createElement("div");
      const label = document.createElement("span");
      label.textContent = labelText;
      label.style.color = "#fff";
      const valueEl = document.createElement("span");
      valueEl.textContent = value === "N/A" ? "N/A" : (max ? `${value} / ${max}` : value);
      valueEl.style.color = colors[value] || "#fff";
      valueEl.style.fontWeight = "600";
      row.appendChild(label);
      row.appendChild(valueEl);
      return row;
    }

    body.appendChild(createRow("Factual Reporting (MBFC): ", reportingValue, reportingColors, 6));
    body.appendChild(createRow("Credibility (MBFC): ", accuracyValue, accuracyColors, 3));
    body.appendChild(createRow("Angle (MBFC): ", angleMBFC, angleColors));

    // Only show AllSides angle if it exists
    if (angleAllSides) {
      body.appendChild(createRow("Angle (AllSides): ", angleAllSides, angleColors));
    }

    // ===============================
    // Source links (same line)
    // ===============================
    const linksContainer = document.createElement("div");
    Object.assign(linksContainer.style, {
      marginTop: "6px",
      fontSize: "13px",
    });

    const sourceLinkMBFC = document.createElement("a");
    sourceLinkMBFC.textContent = "MBFC";
    sourceLinkMBFC.href = "#";
    Object.assign(sourceLinkMBFC.style, {
      color: "#4ea3ff",
      textDecoration: "underline",
      cursor: "pointer",
    });
    sourceLinkMBFC.addEventListener("click", e => {
      e.preventDefault();
      chrome.runtime.sendMessage({
        type: "OPEN_SOURCE_URL",
        url: mbfcMatch["Rating URL"],
      });
    });

    linksContainer.appendChild(sourceLinkMBFC);

    // Only show AllSides link if it exists
    if (allsidesMatch && allsidesMatch["Rating URL"]) {
      const separator = document.createTextNode(", ");
      linksContainer.appendChild(separator);

      const sourceLinkAllsides = document.createElement("a");
      sourceLinkAllsides.textContent = "AllSides";
      sourceLinkAllsides.href = "#";
      Object.assign(sourceLinkAllsides.style, {
        color: "#4ea3ff",
        textDecoration: "underline",
        cursor: "pointer",
      });
      sourceLinkAllsides.addEventListener("click", e => {
        e.preventDefault();
        chrome.runtime.sendMessage({
          type: "OPEN_SOURCE_URL",
          url: allsidesMatch["Rating URL"],
        });
      });

      linksContainer.appendChild(sourceLinkAllsides);
    }

    body.appendChild(linksContainer);

    const donateBtn = document.createElement("a");
    donateBtn.textContent = "☕ Buy me a coffee";
    donateBtn.href = "https://www.buymeacoffee.com/hirschan";
    donateBtn.target = "_blank";
    Object.assign(donateBtn.style, { display: "block", marginTop: "6px", textDecoration: "none", color: "#fff", fontSize: "13px", textAlign: "center", cursor: "pointer" });
    body.appendChild(donateBtn);

    // ===============================
    // Assemble badge
    // ===============================
    shadow.appendChild(header);
    shadow.appendChild(body);
    document.body.appendChild(badge);

  })
  .catch(err => console.error("Failed to get media data:", err));
