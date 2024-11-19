        // Arrays mit Headlines und Beschreibungen
        const headlines = [
                "AIlon - KI Marktforschung",
                "Präzise Buyer Personas mit KI",
                "Persona definieren mit AIlon",
                "Die Lösung für Buyer Personas",
                "Präzise Analysen mit AIlon",
                "Für effiziente Werbung",
                "Buyer Persona Präzisierung",
                "Überprüfe deine Buyer Personas",
                "Mit der AIlon KI & smart Data",
                "Zielgruppen-Daten",
                "Persona definieren mit KI",
                "Für Marketing und Kreation",
                "Präzise Persona-Beschreibung",
                "Operationalisierbare Personas",
                "KI-Zielgruppen-Analyse",
        ];

        const descriptions = [
                "AIlon: KI Marktforschung & Zielgruppenanalysen. Fundierte Erkenntnisse in kürzester Zeit.",
                "Verstehe Bedürfnisse, Motivation und Verhalten deiner Zielgruppe. ",
                "Echte Daten statt Bauchgefühl. Verhaltensbasierte Consumer Insights für Marketing.",
                "Präzise Insights für deine Buyer Personas in 5 Minuten. Jetzt AIlon Demo starten.",
                "Nutze das volle Potenzial deiner Buyer Personas. Erhalte Consumer Insights mit AIlon.",
                "Operationalisierbare Persona-Insights für Marketing, Kommunikation und Media.",
                "Für relevante Produkte, effektive und effiziente Kampagnen. Jetzt AIlon kennenlernen.",
                "Soziodemografie, Geografie, Psychografie, Werte, Affinitäten, Mediennutzung und mehr.",
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
