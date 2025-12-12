// =====================================
// Statische Basis-URLs (ohne Cache-Busting)
// =====================================

const ADS_CSV_BASE_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMERWNBhXcssdIDUzC6eiUCk6etxr2gEFaRVqfcv1-SJGXzvy6L-7NEYZL-0QSoaRqibrzg_DS0chK/pub?gid=0&single=true&output=csv";

const BRAND_CSV_BASE_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMERWNBhXcssdIDUzC6eiUCk6etxr2gEFaRVqfcv1-SJGXzvy6L-7NEYZL-0QSoaRqibrzg_DS0chK/pub?gid=1062222186&single=true&output=csv";

// =====================================
// Google Ads Editor Spalten-Indizes (0-basiert)
// =====================================

const ADS_INDEX = {
    HEADLINE_START: 10,     // Headline 1
    HEADLINE_END: 25,       // Headline 15 (exklusiv)
    DESCRIPTION_START: 25,  // Description 1
    DESCRIPTION_END: 29,    // Description 4 (exklusiv)
    PATH_1: 48,
    PATH_2: 49
};

// =====================================
// State
// =====================================

let headlines = [];
let descriptions = [];
let path1 = "";
let path2 = "";

// =====================================
// Initialisierung
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    reloadFromSheet(); // Initial immer frisch aus dem Sheet laden
});

// =====================================
// Cache-Busting URLs
// =====================================

function getAdsCsvUrl() {
    return ADS_CSV_BASE_URL + "&t=" + Date.now();
}

function getBrandCsvUrl() {
    return BRAND_CSV_BASE_URL + "&t=" + Date.now();
}

// =====================================
// Öffentliche Aktionen (Buttons)
// =====================================

// Neue Kombination aus bereits geladenen Assets
function generateAdPreview() {
    if (!headlines.length || !descriptions.length) return;

    const headline1 = getRandomItem(headlines);
    const headline2 = getRandomItem(
        headlines.filter(h => h !== headline1)
    );

    const description1 = getRandomItem(descriptions);
    const description2 = getRandomItem(
        descriptions.filter(d => d !== description1)
    );

    setText("adTitle1", headline1);
    setText("adTitle2", headline2);
    setText("adDescription1", description1);
    setText("adDescription2", description2);

    setText(
        "adPath",
        [path1, path2].filter(Boolean).join("/")
    );
}

// Frisch aus Google Sheet laden (für Live-Präsentationen)
function reloadFromSheet() {
    loadBrandConfig();
    loadAdAssets();
}

// =====================================
// Brand-Config laden
// =====================================

function loadBrandConfig() {
    Papa.parse(getBrandCsvUrl(), {
        download: true,
        skipEmptyLines: true,
        complete: function (result) {
            if (!result.data || result.data.length < 2) return;

            // Zeile 2
            const row = result.data[1];

            setText("brandName", cleanValue(row[1]));
            setText("displayUrl", cleanValue(row[2]));
            setAttr("brandFavicon", "src", cleanValue(row[3]));
        },
        error: function (err) {
            console.error("Brand CSV Error:", err);
        }
    });
}

// =====================================
// Ads CSV laden
// =====================================

function loadAdAssets() {
    Papa.parse(getAdsCsvUrl(), {
        download: true,
        skipEmptyLines: true,
        complete: function (result) {
            if (!result.data || result.data.length < 2) {
                console.error("Ads CSV enthält keine zweite Zeile.");
                return;
            }

            // Zeile 2
            const row = result.data[1];

            headlines = row
                .slice(ADS_INDEX.HEADLINE_START, ADS_INDEX.HEADLINE_END)
                .map(cleanValue)
                .filter(Boolean);

            descriptions = row
                .slice(ADS_INDEX.DESCRIPTION_START, ADS_INDEX.DESCRIPTION_END)
                .map(cleanValue)
                .filter(Boolean);

            path1 = cleanValue(row[ADS_INDEX.PATH_1] || "");
            path2 = cleanValue(row[ADS_INDEX.PATH_2] || "");

            generateAdPreview();
        },
        error: function (err) {
            console.error("Ads CSV Error:", err);
        }
    });
}

// =====================================
// Hilfsfunktionen
// =====================================

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerText = value || "";
}

function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el && value) el.setAttribute(attr, value);
}

function cleanValue(value) {
    return String(value || "").trim();
}