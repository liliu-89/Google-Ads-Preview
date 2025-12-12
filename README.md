# Google Ads Preview Tool

Dieses Tool ermöglicht es, **Google Ads Responsive Search Ads (RSA)** realitätsnah darzustellen, **ohne direkt im Google Ads Interface zu arbeiten**.
Die Anzeigen werden dynamisch aus einem **Google Ads Editor-kompatiblen Google Sheet** generiert und visuell so aufbereitet, dass sie einer echten Google-Suchanzeige sehr nahekommen.

Das Tool eignet sich ideal für:

* Kundenpräsentationen
* Messaging- und Wording-Reviews
* Vorbereitung von Kampagnen
* Schnelle visuelle Checks von RSA-Kombinationen

---

## Zentrale Datenquelle (Google Sheet)

Alle Inhalte werden aus folgendem Google Sheet bezogen:

👉 **Google Ads Daten & Brand Config**
[https://docs.google.com/spreadsheets/d/1wOCfa1Q17OPz5Ss_JK84MuYn4OOvEZOYnzfvctbH100/edit?gid=1062222186#gid=1062222186](https://docs.google.com/spreadsheets/d/1wOCfa1Q17OPz5Ss_JK84MuYn4OOvEZOYnzfvctbH100/edit?gid=1062222186#gid=1062222186)

Das Sheet enthält mehrere Reiter, u. a.:

* **brand_config**

  * Projekt-Auswahl (Dropdown)
  * Brandname
  * Display-URL
  * Favicon-URL

* **Ads / Google Ads Editor Export**

  * Headlines 1–15
  * Descriptions 1–4
  * Path 1 & Path 2
  
Die `brand_config` ist mit dem Reiter **„Projekte“** verknüpft, sodass beim Wechsel des Projekts automatisch die korrekten Brand-Daten gezogen werden.

---

## Funktionsweise

### Anzeigen-Assets

* Headlines und Descriptions werden zufällig kombiniert
* Doppelte Headlines oder Descriptions werden vermieden
* Path 1 & Path 2 werden korrekt an die Display-URL angehängt

### Brand Header

* Favicon, Brandname und Display-URL werden aus `brand_config` geladen
* Anzeige und Brand-Metadaten sind bewusst getrennt
* Das Layout orientiert sich visuell an echten Google Search Ads (Desktop)

### CSV-Verarbeitung

* Die Google Sheets werden als **öffentliche CSVs** geladen
* Das Parsing erfolgt **RFC-konform mit Papa Parse**
* Kommas, Sonderzeichen und Anführungszeichen in Anzeigentexten sind vollständig unterstützt

---

## Technischer Stack

* **HTML** – Struktur der Anzeige
* **CSS** – Google-Ads-nahes Styling (Farben, Typografie, Abstände)
* **JavaScript** – Logik & Rendering
* **Papa Parse** – stabiles CSV-Parsing
* **Google Sheets** – Single Source of Truth für Inhalte

---

## Projektstruktur

```text
/
├── index.html      # Anzeige & UI
├── style.css       # Google-Ads-nahes Styling
├── script.js       # Logik (CSV-Parsing, Rendering)
├── README.md       # Dokumentation
```

---

## Hinweise & Einschränkungen

* Das Tool ist eine **Preview**, keine exakte 1:1-Kopie der Google SERP
* Google ändert das Anzeigen-Layout regelmäßig
* Ziel ist **realistische Darstellung**, nicht Pixel-Forensik
* Das Tool ist **nicht öffentlich indexiert** (noindex, nofollow)

---

## Fazit

Dieses Tool bildet die **realistische Arbeitsweise mit Google Ads Responsive Search Ads** ab, trennt sauber zwischen Brand- und Anzeigen-Daten und eignet sich hervorragend für **Beratung, Präsentation und Qualitätssicherung** im SEA-Alltag.