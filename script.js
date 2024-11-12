        // Arrays mit Headlines und Beschreibungen
        const headlines = [
            "Persona definieren mit AIlon",
            "Mit AIlon Personas erstellen",
            "Präzise Buyer Personas mit KI",
            "KI-gestützte Persona-Analyse",
            "Für Marketing und Kreation",
            "DSGVO-Konform erstellen",
            "Buyer Personas für smarte Ads",
            "Buyer Persona erstellen mit KI",
            "Präzise Analysen mit AIlon",
            "Zielgruppen modellieren",
            "Zielgruppen & Marktpotenziale",
            "Persona erstellen & aktivieren",
            "Persona mit KI definieren",
            "Die Lösung für Buyer Personas",
            "Effektivere Werbung dank AIlon"
        ];

        const descriptions = [
            "Mit AIlon datenschutzkonforme Personas erstellen und Zielgruppen modellieren. Jetzt testen",
            "Präzise Buyer Persona für zielgerichtete Social Media Ads. AIlon Demo starten.",
            "AIlon modelliert mit KI & Daten genaue Buyer Personas, die direkt aktiviert werden können.",
            "Buyer Persona erstellen war gestern. Zielgruppen modellieren mit AIlon für präzise Ads.",
            ];

        // Funktion, die zufällige Kombinationen der Headlines und Beschreibungen anzeigt
        function generateAdPreview() {
            const headline1 = getRandomItem(headlines);
            const headline2 = getRandomItem(headlines.filter(item => item !== headline1));  // Verhindert doppelte Headlines
            const description1 = getRandomItem(descriptions);
            const description2 = getRandomItem(descriptions.filter(item => item !== description1));  // Verhindert doppelte Beschreibungen

            // Anzeigeninhalte aktualisieren
            document.getElementById("adTitle1").innerText = headline1;
            document.getElementById("adTitle2").innerText = headline2;
            document.getElementById("adDescription1").innerText = description1;
            document.getElementById("adDescription2").innerText = description2;
        }

        // Hilfsfunktion für zufällige Auswahl
        function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
