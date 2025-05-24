# Copenhagen Parking Visual Essay

En interaktiv visuel artikel om private parkeringspladser i København, bygget med Mapbox Storytelling framework og baseret på forskning af Michael Szell om byrumsfordeling og Mikael Colville-Andersen's arbejde med "the arrogance of space".

## 🚀 Live Demo

**[Se den live visual essay her](https://YOUR_USERNAME.github.io/cph-parkering-2025/)**

_Erstatt YOUR_USERNAME med dit GitHub brugernavn efter upload_

## Funktioner

- **Scrollytelling**: Interaktiv fortælling der kombinerer tekst, billeder og kort
- **Interaktivt kort**: Viser private parkeringspladser med belægningsgrad baseret på rigtige OpenStreetMap data
- **Impact analyse**: Viser hvad tomme parkeringspladser koster samfundet økonomisk og miljømæssigt
- **Rumalternativer**: Visualiserer hvad parkeringspladserne kunne blive til i stedet (cykelstier, grønne områder, etc.)
- **Danmarks globale lederskab**: Fremhæver dansk urbanism og kontrasten til nuværende parkeringsineffektivitet
- **"The Arrogance of Space"**: Illustrerer hvordan biler dominerer byrum på bekostning af mennesker
- **Bidrag-funktion**: Brugere kan tilføje nye parkeringspladser
- **Responsive design**: Fungerer på desktop og mobile enheder

## Baseret på forskning

Projektet bygger på:

- **Michael Szell's forskning** om byrumsfordeling og hvad parkering tager fra byer
- **Mikael Colville-Andersen's arbejde** med "the arrogance of space" og Copenhagenize Design Co.
- **Jan Gehl's principper** om menneskecentrerede byer og livable cities
- **Danmarks globale indflydelse** på cykelkultur og bæredygtig byplanlægning
- **Københavns Kommune's 2018 parkeringsredegørelse** om lav belægning i private anlæg
- **Rigtige OpenStreetMap data** fra Overpass API om private parkeringspladser i København
- **Aktuelle tal** om kommunens leje af private parkeringspladser (14% belægning)

## Teknologier

- Mapbox GL JS for kortfunktionalitet
- Scrollama.js for scroll-triggered animationer
- OpenStreetMap/Overpass API for rigtige parkeringsdata
- Vanilla JavaScript og HTML/CSS
- GeoJSON data for parkeringspladser

## Installation og brug

### Forudsætninger

- En moderne webbrowser
- En lokal webserver (f.eks. Python's http.server eller Node.js http-server)

### Trin 1: Klon eller download projektet

```bash
git clone [repository-url]
cd cph-parkering-2025
```

### Trin 2: Få en Mapbox Access Token

1. Gå til [mapbox.com](https://mapbox.com) og opret en gratis konto
2. Kopier din access token
3. Erstat token'et i `config.js` filen:

```javascript
accessToken: "din-mapbox-token-her";
```

### Trin 3: Start en lokal server

Med Python 3:

```bash
python -m http.server 8000
```

Med Node.js (hvis du har http-server installeret):

```bash
npx http-server
```

### Trin 4: Åbn i browser

Gå til `http://localhost:8000` i din browser.

## Projektstruktur

```
cph-parkering-2025/
├── index.html                      # Hovedfil med HTML struktur
├── config.js                       # Konfiguration for artiklen og kapitler
├── parking-data.js                 # Sample data for parkeringspladser
├── overpass-query.js               # Integration med OpenStreetMap data
├── overpass-cph-parking.geojson    # Rigtige parkeringsdata fra Overpass
├── space-comparison.js             # Visualisering af rumalternativer
├── impact-stats.js                 # Beregning af samfundsøkonomiske omkostninger
├── contribution.js                 # Håndtering af bruger-bidrag
├── README.md                       # Denne fil
├── DEMO.md                         # Demo instruktioner
└── package.json                    # Node.js dependencies (valgfri)
```

## Vigtige funktioner

### Impact Analyse

- **Økonomisk spild**: Beregner spildte skattekroner på tomme parkeringspladser
- **Miljøpåvirkning**: CO₂ omkostninger ved unødvendige parkeringspladser
- **Tabt værdi**: Hvad grunden kunne være værd til andre formål

### Rumalternativer

Baseret på Michael Szell's forskning viser projektet hvad parkeringspladser kunne blive til:

- Cykelstier (20m per parkeringsplads)
- Træer og grønne områder (2-3 træer per plads)
- Udendørs spisepladser (8-12 pladser per parkeringsplads)
- Legepladser og rekreative områder

### Rigtige Data

- Bruger OpenStreetMap data via Overpass API
- Viser faktiske private parkeringspladser i København
- Realistiske belægningsgrader baseret på kommunens egne rapporter

## Tilpasning

### Tilføj nye kapitler

Rediger `config.js` og tilføj nye objekter til `chapters` arrayet:

```javascript
{
    id: 'nyt-kapitel',
    alignment: 'center',
    title: 'Kapitel titel',
    description: 'Kapitel beskrivelse...',
    location: {
        center: [longitude, latitude],
        zoom: 15,
        pitch: 0,
        bearing: 0
    },
    callback: 'funktionNavn' // Valgfri callback funktion
}
```

### Opdater parkeringsdata

Projektet bruger `overpass-cph-parking.geojson` filen. For at opdatere data:

1. Kør Overpass query (se `overpass-query.js` for eksempel)
2. Gem resultatet som GeoJSON
3. Erstat den eksisterende fil

## Kilder og referencer

- [Michael Szell - Urban Space Distribution (2019)](http://michael.szell.net/downloads/talk_szell2019rwu.pdf)
- [Københavns Kommune Parkeringsredegørelse 2018](https://www.kk.dk/sites/default/files/agenda/4c2ace22-b3ad-4eae-8a00-7fea405ffd51/4d51992b-c2d0-4888-b780-ce0a37b99763-bilag-4_0.pdf)
- [Orienteringsnotat om benyttelsen af lejede parkeringspladser](https://www.kk.dk/sites/default/files/2025-05/07.05.25%20-%20Orienteringsnotat%20om%20Benyttelsen%20af%20de%20lejede%20parkeringspladser%20i%20private%20anl%C3%A6g.pdf)
- [OpenStreetMap](https://www.openstreetmap.org/) og [Overpass API](https://overpass-api.de/)

## Fremtidige forbedringer

- [ ] Flere visualiseringer af byrumsfordeling

## Licens

MIT License - se LICENSE fil for detaljer.
