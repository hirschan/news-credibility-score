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
// Request media data from background.js
// ===============================
browser.runtime.sendMessage({ type: "GET_MEDIA_DATA" })
  .then(data => {
    if (!Array.isArray(data)) return;

    const match = data.find(item => {
      const itemURL = item["URL"].replace(/^www\./, "").toLowerCase();
      return hostname === itemURL || hostname.endsWith("." + itemURL);
    });

    if (!match) return;

    // ===============================
    // Extract values
    // ===============================
    const reportingValue = match["Objective Reporting"];
    const accuracyValue = match["Accuracy"];
    const angleValue = match["Angle"];

    const flag = countryToFlag(match["Country"]);

    // ===============================
    // Badge container
    // ===============================
    const badge = document.createElement("div");
    Object.assign(badge.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "280px",
      backgroundColor: "#111",
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
      backgroundColor: "#18181b",
      borderBottom: "1px solid #2a2a2a",
    });

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
    Object.assign(headerLeft.style, {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    });

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
    Object.assign(closeBtn.style, {
      background: "none",
      border: "none",
      color: "#fff",
      fontSize: "18px",
      cursor: "pointer",
      lineHeight: "1",
    });

    closeBtn.addEventListener("click", () => badge.remove());

    header.appendChild(headerLeft);
    header.appendChild(closeBtn);

    // ===============================
    // Body
    // ===============================
    const body = document.createElement("div");
    Object.assign(body.style, {
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    });

    const reportingEl = document.createElement("div");

    const reportingLabel = document.createElement("span");
    reportingLabel.textContent = "Factual Reporting: ";
    reportingLabel.style.color = "#fff";

    const reportingValueEl = document.createElement("span");
    reportingValueEl.textContent = reportingValue === "N/A" ? "N/A" : `${reportingValue} / 6`;
    reportingValueEl.style.color = reportingColors[reportingValue] || "#fff";
    reportingValueEl.style.fontWeight = "600";

    reportingEl.appendChild(reportingLabel);
    reportingEl.appendChild(reportingValueEl);

    const accuracyEl = document.createElement("div");

    const accuracyLabel = document.createElement("span");
    accuracyLabel.textContent = "Credibility: ";
    accuracyLabel.style.color = "#fff";

    const accuracyValueEl = document.createElement("span");
    accuracyValueEl.textContent = accuracyValue === "N/A" ? "N/A" : `${accuracyValue} / 3`;
    accuracyValueEl.style.color = accuracyColors[accuracyValue] || "#fff";
    accuracyValueEl.style.fontWeight = "600";

    accuracyEl.appendChild(accuracyLabel);
    accuracyEl.appendChild(accuracyValueEl);;

    const angleEl = document.createElement("div");

    const angleLabel = document.createElement("span");
    angleLabel.textContent = "Angle: ";
    angleLabel.style.color = "#fff";

    const angleValueEl = document.createElement("span");
    angleValueEl.textContent = angleValue;
    angleValueEl.style.color = angleColors[angleValue] || "#fff";
    angleValueEl.style.fontWeight = "600";

    angleEl.appendChild(angleLabel);
    angleEl.appendChild(angleValueEl);

    const sourceLink = document.createElement("a");
    sourceLink.textContent = "View source";
    sourceLink.href = "#";
    Object.assign(sourceLink.style, {
      marginTop: "6px",
      color: "#4ea3ff",
      textDecoration: "underline",
      cursor: "pointer",
      fontSize: "13px",
    });

    sourceLink.addEventListener("click", e => {
      e.preventDefault();
      browser.runtime.sendMessage({
        type: "OPEN_SOURCE_URL",
        url: match["Rating URL"],
      });
    });

    body.appendChild(reportingEl);
    body.appendChild(accuracyEl);
    body.appendChild(angleEl);
    body.appendChild(sourceLink);

    // ===============================
    // Assemble badge
    // ===============================
    badge.appendChild(header);
    badge.appendChild(body);
    shadow.appendChild(header);
    shadow.appendChild(body);
    document.body.appendChild(badge);
  })
  .catch(err => console.error("Failed to get media data:", err));
