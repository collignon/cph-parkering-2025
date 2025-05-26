var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoibmNjb2wxMiIsImEiOiJjbTd4bW9obHIwMHBqMmpzNTU5aHRlMmF2In0.DXVoG9Kbp3bCMCoyp3KpKA', // You'll need to replace this with your own token
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false,
    title: 'Private Parkering i København',
    subtitle: 'En visuel undersøgelse af tomme parkeringspladser og offentlige udgifter',
    byline: 'Af Nico - 2025',
    footer: 'Kilder: <a href="https://www.kk.dk/sites/default/files/agenda/4c2ace22-b3ad-4eae-8a00-7fea405ffd51/4d51992b-c2d0-4888-b780-ce0a37b99763-bilag-4_0.pdf">Københavns Kommune</a> | <a href="https://www.kk.dk/borger/parkering-trafik-og-veje/parkering/her-maa-du-parkere-med-din-beboerlicens/find-prisen-paa-din-beboerlicens">Beboerlicens priser</a>',
    chapters: [
        {
            id: 'intro-text-on-white',
            alignment: 'center',
            hidden: false,
            title: 'Problemet med parkering i København',
            description: '<div style="height: 2vh;"></div>Alle der kører bil i København kender frustrationen: At køre rundt i 15 minutter for at finde en parkeringsplads. At stresse over at komme for sent. At betale dyrt for parkering, når man endelig finder det.<br><br>Det er forståeligt at folk er sure. Men hvad nu hvis problemet ikke er mangel på pladser, men at vi ikke bruger dem vi har?<br><br>Socialdemokratiets overborgmesterkandidat Pernille Rosenkrantz-Theil vil løse problemet ved at skaffe <em>"flere parkeringspladser - ikke færre"</em> til københavnere. Hun mener at elektriske biler løser miljøproblemerne, så vi kan fokusere på at gøre det nemmere at have bil i byen.<br><br>Men inden vi bruger flere skattemidler på parkering, lad os se på hvad der faktisk sker med de parkeringspladser, vi allerede har.<div style="height: 35vh;"></div>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            solidBackground: '#FFFFFF',
            callback: '',
            onChapterEnter: ['hideAnimatedParkingLayer'],
            onChapterExit: []
        },
        {
            id: 'intro-question-on-map',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '</div>Mens byens politikere diskuterer nye parkeringsløsninger, lad os tage en tur rundt i byen og se, hvad der egentlig sker med parkering i København - og hvad det koster os alle sammen.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['hideAnimatedParkingLayer'],
            onChapterExit: []
        },

        {
            id: 'map-animation-caption',
            alignment: 'left',
            hidden: false,
            title: 'Parkeringspladserne i København',
            description: 'Her er et overblik over de private parkeringsanlæg, som data er tilgængelig for. Mange står tomme store dele af tiden.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['ensureAllParkingSpotsVisible'],
            onChapterExit: ['hideAnimatedParkingLayer']
        },
        {
            id: 'belægningsgrad',
            alignment: 'left',
            hidden: false,
            title: 'Lav belægningsgrad i private anlæg',
            description: 'Man kunne jo tro, at Rosenkrantz-Theil havde læst hvad kommunen har skrevet tidligere om parkeringsforholdene. Fx stod der i parkeringsredegørelsen fra 2018:<br><br><em>"Således ligger belægningsgraderne i de private anlæg med offentlig adgang på mellem 60-70 % om dagen og er sjældent over 20 % om natten."</em><br><br>Kilde: <a href="https://www.kk.dk/sites/default/files/agenda/4c2ace22-b3ad-4eae-8a00-7fea405ffd51/4d51992b-c2d0-4888-b780-ce0a37b99763-bilag-4_0.pdf">Parkeringsredegørelse 2018</a>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vesterport-slide',
            alignment: 'center',
            hidden: false,
            title: 'Vesterport Mobility Hub',
            description: 'Et eksempel på moderne parkeringsløsninger i København. Vesterport kombinerer parkering med offentlig transport og cykelinfrastruktur.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            isImageSlide: true,
            backgroundImage: './assets/Vesterport Mobility Hub.jpg'
        },
        {
            id: 'kommunale-lejeaftaler',
            alignment: 'left',
            hidden: false,
            title: 'Skatteyderne betaler regningen',
            description: 'Kommunen lejer over 2.100 parkeringspladser fra private anlæg og betaler <strong>19.000 kr årligt per plads</strong> - med skatteydernes penge.<br><br>Til sammenligning betaler en beboer kun 2.375 kr om året for en parkeringslicens.<br><br><strong>Resultatet:</strong> Skatteyderne subsidierer dyr parkering med 8x prisen, mens de få der faktisk bruger pladserne betaler næsten intet.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['showCostChart'],
            onChapterExit: ['hideCostChart'],
            solidBackground: '#34495e'
        },
        {
            id: 'vesterbro-parking',
            alignment: 'left',
            hidden: false,
            title: 'Vesterbro: Tomme pladser overalt',
            description: 'I Vesterbro finder vi flere store private parkeringsanlæg med lav belægning. Mange af disse pladser står tomme hele dagen.',
            location: {
                center: [12.5434, 55.6736],
                zoom: 15,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['prepareDarkBackground'],
            onChapterExit: []
        },
        {
            id: 'vp-indenfor-slide',
            alignment: 'center',
            hidden: false,
            title: 'Parkeringsanlæg indendørs',
            description: 'Mange private parkeringsanlæg i København har moderne faciliteter, men lav udnyttelse. Dette billede viser et typisk indendørs parkeringsanlæg.',
            location: {
                center: [12.5515, 55.6938],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            isImageSlide: true,
            backgroundImage: './assets/VP Indenfor.jpg'
        },
        {
            id: 'nørrebro-parking',
            alignment: 'right',
            hidden: false,
            title: 'Nørrebro: Samme historie',
            description: 'På Nørrebro ser vi det samme mønster - private parkeringshuse med masser af ledige pladser, mens folk kører rundt og leder efter parkering på gaden.',
            location: {
                center: [12.5515, 55.6938],
                zoom: 15,
                pitch: 45,
                bearing: 90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'østerbro-parking',
            alignment: 'left',
            hidden: false,
            title: 'Østerbro: Endnu flere tomme pladser',
            description: 'Østerbro har også flere store parkeringsanlæg med lav udnyttelse. Disse pladser kunne løse mange parkeringsproblemer, hvis prisen var konkurrencedygtig.',
            location: {
                center: [12.5886, 55.7058],
                zoom: 15,
                pitch: 45,
                bearing: -90
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aktuel-belægning',
            alignment: 'center',
            hidden: false,
            title: 'Skatteyderne betaler for tomme pladser',
            description: 'Kommunen lejer 2.100 parkeringspladser fra private anlæg for <strong>19.000 kr per plads</strong> om året.<br><br>En opgørelse fra maj 2025 viser: <strong>Kun 14% af de første 1.000 lejede pladser bliver brugt.</strong><br><br><strong>86% står tomme</strong> - mens kommunen samtidig vil leje endnu flere.<br><br><strong>Hvad koster denne ineffektivitet?</strong><br>• 40 millioner kr årligt på lejede pladser<br>• 19.000 kr per plads vs. 2.375 kr for beboerlicens<br>• 8x højere pris betalt af skatteyderne<br><br>Kilde: <a href="https://www.kk.dk/sites/default/files/2025-05/07.05.25%20-%20Orienteringsnotat%20om%20Benyttelsen%20af%20de%20lejede%20parkeringspladser%20i%20private%20anl%C3%A6g.pdf">Orienteringsnotat om benyttelsen</a>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['completeDarkBackground', 'showParkingVisualization'],
            onChapterExit: ['hideParkingVisualization'],
            solidBackground: '#2c3e50'
        },
        {
            id: 'hvad-tager-parkering',
            alignment: 'center',
            hidden: false,
            title: 'Hvad tager parkering fra os?',
            description: 'Forskning viser at biler optager 60-70% af byens offentlige rum, men bruges kun 5% af tiden. I København kunne tomme private parkeringspladser blive til cykelstier, grønne områder, legepladser og caféliv.<br><br>Som byplanlægger Michael Szell påpeger: "Vi har givet bilen alt for meget plads i vores byer."<br><br>Kilder: <a href="http://michael.szell.net/downloads/talk_szell2019rwu.pdf">Szell (2019) - Urban Space Distribution</a><br><br>Lad os se på, hvad hver enkelt P-plads konkret kan omdannes til:',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['clearDarkBackground', 'initializeSpaceAlternativesDisplay', 'hvad-tager-parkering'],
            onChapterExit: []
        },
        {
            id: 'space-alternative-bike_lanes',
            alignment: 'left',
            title: '🚴‍♀️ Mere plads til cykler',
            description: 'En enkelt parkeringsplads (ca. 12.5m²) kan omdannes til <strong>20 meter sikker cykelsti</strong>. Med tusindvis af tomme pladser kunne vi bygge et endnu tættere og mere attraktivt cykelnetværk, der forbinder hele København og gør hverdagen lettere for byens mange cyklister.',
            location: { center: [12.5683, 55.6761], zoom: 12.5, pitch: 10, bearing: 0 },
            mapAnimation: 'easeTo',
            onChapterEnter: ['highlightSpaceAlternative', 'bike_lanes'],
            onChapterExit: []
        },
        {
            id: 'space-alternative-trees',
            alignment: 'right',
            title: '🌳 Flere træer og grønt',
            description: 'For hver P-plads kan vi plante <strong>2-3 store bytræer</strong>. Træer forbedrer luftkvaliteten, reducerer støj, skaber skygge og øger biodiversiteten. Flere grønne lommer ville gøre byen smukkere og mere behagelig at opholde sig i, samtidig med at de hjælper med at håndtere regnvand.',
            location: { center: [12.5650, 55.6750], zoom: 12.5, pitch: 10, bearing: 0 },
            mapAnimation: 'easeTo',
            onChapterEnter: ['highlightSpaceAlternative', 'trees'],
            onChapterExit: []
        },
        {
            id: 'space-alternative-outdoor_seating',
            alignment: 'left',
            title: '☕ Hyggelige udeserveringer',
            description: 'En P-plads giver plads til <strong>8-12 ekstra cafépladser</strong>. Forestil dig flere levende gadehjørner med summende udeserveringer, hvor folk kan mødes, nyde en kop kaffe og bidrage til bylivet. Dette skaber også nye muligheder for lokale erhvervsdrivende.',
            location: { center: [12.5700, 55.6780], zoom: 12.5, pitch: 10, bearing: 0 },
            mapAnimation: 'easeTo',
            onChapterEnter: ['highlightSpaceAlternative', 'outdoor_seating'],
            onChapterExit: []
        },
        {
            id: 'space-alternative-playground',
            alignment: 'right',
            title: '🛝 Legepladser for børnene',
            description: 'En P-plads svarer til <strong>ca. 15m² ny legeplads</strong>. I en tæt by som København er der altid brug for flere sikre og inspirerende legemuligheder for børn. Små, velplacerede legepladser kan gøre en stor forskel for byens børnefamilier.',
            location: { center: [12.5620, 55.6790], zoom: 12.5, pitch: 10, bearing: 0 },
            mapAnimation: 'easeTo',
            onChapterEnter: ['highlightSpaceAlternative', 'playground'],
            onChapterExit: []
        },
        {
            id: 'space-alternative-green_space',
            alignment: 'left',
            title: '🌱 Små grønne oaser',
            description: 'Hver P-plads kan blive til _15m² ny park_ eller et lille grønt byrum. Disse små oaser kan være steder for afslapning, fællesskabshaver eller blot et pusterum i byens travlhed, og bidrager til en sundere og mere bæredygtig by.',
            location: { center: [12.5683, 55.6761], zoom: 12, pitch: 0, bearing: 0 },
            mapAnimation: 'easeTo',
            onChapterEnter: ['highlightSpaceAlternative', 'green_space'],
            onChapterExit: ['clearSpaceAlternativesDisplay']
        },
        {
            id: 'arrogance-intro',
            alignment: 'center',
            hidden: false,
            title: 'The Arrogance of Space',
            description: 'Bilens dominans af byrum kaldes "The Arrogance of Space" - et begreb skabt af Mikael Colville-Andersen fra Copenhagenize Design Co.<br><br>For at visualisere dette problem bruger Copenhagenize en simpel metode: De tager luftfotos af kryds og gader og farver rummene efter hvem de er beregnet til.<br><br>Dette billede viser et typisk fransk kryds - lad os analysere det sammen.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            backgroundImage: './assets/Paris 1 by Mikael Colville Andersen.jpg',
            stickyGraphic: true
        },
        {
            id: 'arrogance-colors',
            alignment: 'center',
            hidden: false,
            title: 'Farvekodning afslører sandheden',
            description: '<strong>🔴 Rødt:</strong> Plads allokeret til biler (kørebaner, parkeringspladser)<br><br><strong>🔵 Blåt:</strong> Plads til fodgængere (fortove, gangfeltder)<br><br><strong>🟢 Grønt:</strong> Plads til cykler (cykelstier, cykelfelter)<br><br>Når man farver byrummet på denne måde, bliver det chokerende tydeligt hvor meget plads biler får - og hvor lidt der er tilbage til mennesker.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            backgroundImage: './assets/Paris 1 by Mikael Colville Andersen.jpg',
            stickyGraphic: true
        },
        {
            id: 'arrogance-reality',
            alignment: 'center',
            hidden: false,
            title: 'Virkeligheden bag tallene',
            description: 'I dette parisiske kryds kan vi se den brutale virkelighed:<br><br>• <strong>70-80% rødt:</strong> Enormt areal til biler<br>• <strong>15-20% blåt:</strong> Minimum plads til fodgængere<br>• <strong>2-5% grønt:</strong> Næsten ingen plads til cykler<br><br>Som Mikael Colville-Andersen siger: "Biler bruger 95% af deres tid på at stå stille, men optager 60-70% af det offentlige byrum."',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['hideParisStickyImage'],
            onChapterExit: ['clearArroganceSequence'],
            backgroundImage: './assets/Paris 1 by Mikael Colville Andersen.jpg',
            stickyGraphic: true
        },
        {
            id: 'transformation-intro',
            alignment: 'lefty',
            hidden: false,
            title: 'Paris: Fra biler til mennesker',
            description: 'Dette billede viser den dramatiske transformation som er mulig når man bekæmper "the arrogance of space".',
            location: {
                center: [2.3522, 48.8566],
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: ['showParisStickyImage'],
            onChapterExit: []
        },
        {
            id: 'transformation-hidalgo',
            alignment: 'lefty',
            hidden: false,
            title: 'Anne Hidalgo\'s vision',
            description: 'Under borgmester Anne Hidalgo er Paris blevet omdannet fra en bilby til en cykelby.<br><br>En transformation der viser hvad politisk vilje kan opnå når man vælger mennesker over maskiner.',
            location: {
                center: [2.3522, 48.8566],
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'transformation-results',
            alignment: 'lefty',
            hidden: false,
            title: 'Konkrete resultater',
            description: '<strong>Konkrete resultater:</strong><br>• 1.000 km cykelstier siden 2014<br>• 75% færre biler i centrum<br>• 200% stigning i cykling<br><br>Danske principper og dansk ekspertise var central i denne transformation.',
            location: {
                center: [2.3522, 48.8566],
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: ['hideParisStickyImage']
        },
        {
            id: 'danish-urban-export',
            alignment: 'left',
            hidden: false,
            title: 'Danmarks urbane eksport',
            description: 'Danske urbane løsninger eksporteres til hele verden. Fra København er principper om menneskecentrerede byer spredt til over 100 byer verden over.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jan-gehl-revolution',
            alignment: 'left',
            hidden: false,
            title: 'Jan Gehl revolutionerede byplanlægning',
            description: 'I 1960\'erne startede Jan Gehl en revolution fra København. Hans forskning i hvordan mennesker bruger byrum ændrede byplanlægning globalt.<br><br>Fra Strøget - verdens første gågade (1962) - til Times Square i New York. Gehls principper om "cities for people" bruges nu i hundredvis af byer verden over.<br><br>Resultatet: Mere liv, mindre biler, bedre byer.<br><br>Kilde: Gehl Architects',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'danish-experts-lead',
            alignment: 'left',
            hidden: false,
            title: 'Danske eksperter viser vejen',
            description: 'Jan Gehl, Mikael Colville-Andersen og andre danske eksperter har hjulpet byer med at bekæmpe "the arrogance of space".<br><br>Lad os se på fire konkrete eksempler:',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'export-nyc',
            alignment: 'center',
            hidden: false,
            title: 'New York: Protected Bike Lanes',
            description: 'New York City implementerede protected bike lanes efter københavnsk model. Janette Sadik-Khan, tidligere transportkommissær, arbejdede tæt sammen med danske eksperter.<br><br>Resultatet: Times Square blev omdannet fra kaotisk trafikknudepunkt til fodgængerzone, og cykling steg med over 200%.<br><br><strong>Dansk DNA:</strong> Principper fra Strøget og Københavns cykelinfrastruktur blev kernen i NYCs transformation.',
            location: {
                center: [-74.0060, 40.7128],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            isImageSlide: true,
            backgroundImage: './assets/NYC bike lane.avif'
        },
        {
            id: 'export-barcelona',
            alignment: 'center',
            hidden: false,
            title: 'Barcelona: Superblocks',
            description: 'Barcelonas superblocks bygger på danske principper om at prioritere mennesker over biler. Salvador Rueda udviklede konceptet baseret på Jan Gehls teorier og Jane Jacobs\' ideer.<br><br><strong>Resultatet:</strong> 21 kvadratkilometer bilbelagt areal omdannet til offentligt rum for mennesker.<br><br>Som beskrevet på <a href="https://www.gabarcelona.com/blog/superblocks/" target="_blank">gabarcelona.com</a>: "Superblocks follow Jacobs\' theoretical framework in most of their guidelines" og implementerer Gehls "soft edges" principper.',
            location: {
                center: [2.1734, 41.3851],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            isImageSlide: true,
            backgroundImage: './assets/Superblock Sant Antoni Seating.jpg'
        },
        {
            id: 'export-bogota',
            alignment: 'center',
            hidden: false,
            title: 'Bogotá: Ciclovía',
            description: 'Bogotás Ciclovía - verdens største bilhegnsdag - er baseret på dansk cykelkultur og filozofi. Hver søndag lukkes 120 km veje for biler.<br><br><strong>50 års succes:</strong> Over 1,5 millioner borgere deltager hver søndag. Konceptet er nu exporteret til 400+ byer verden over.<br><br>Som <a href="https://www.weforum.org/stories/2024/11/50-years-ciclovia-open-streets-cycling-cars/" target="_blank">World Economic Forum</a> beskriver: Ciclovía demonstrerer hvordan byer kan prioritere mennesker over maskiner - en kerneværdi fra dansk byplanlægning.',
            location: {
                center: [-74.0721, 4.7110],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            isImageSlide: true,
            backgroundImage: './assets/Ciclovía at 50 lessons from Bogotá.avif'
        },
        {
            id: 'export-melbourne',
            alignment: 'center',
            hidden: false,
            title: 'Melbourne: Laneways Revival',
            description: 'Jan Gehl designede Melbournes transformation fra bilorienteret by til fodgængervenliges centrum. Hans arbejde med laneways skabte "verdens mest livable city".<br><br><strong>Før Gehl:</strong> Døde gader efter kontortid<br><strong>Efter Gehl:</strong> Pulserende byliv 24/7<br><br>Som beskrevet i <a href="https://thediscourse.ca/scarborough/melbourne-transformed-tiny-laneways-pedestrian-mecca" target="_blank">The Discourse</a>: Melbournes transformation fra "tiny laneways to pedestrian mecca" byggede på danske principper om skala, liv og menneskecentreret design.',
            location: {
                center: [144.9631, -37.8136],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            isImageSlide: true,
            backgroundImage: './assets/Melbourne Degraves Lane.jpg'
        },
        {
            id: 'dansk-paradoks',
            alignment: 'left',
            hidden: false,
            title: 'Det danske paradoks',
            description: 'Vi eksporterer løsninger mod bilernes dominans til hele verden. Men hjemme accepterer vi at:<br><br>• 86% af private parkeringspladser står tomme<br>• Skatteydere betaler 19.000kr årligt per leasede plads<br>• Hver parkeringsplads kunne være 20m cykelsti<br><br><strong>Hvorfor fører vi ikke an med markedsbaserede parkeringsløsninger?</strong><br><br><div style="height: 5vh;"></div>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
                pitch: 15,
                bearing: -45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showDanishUrbanism',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'løsning',
            alignment: 'right',
            hidden: false,
            title: 'Løsningen: ledigparkeringspladsikbh.dk',
            description: '<div style="height: 5vh;"></div>Så jeg har selvfølgelig købt domænet "ledigparkeringspladsikbh.dk" som jeg håber snart kan hjælpe de stakkels curlingkøbenhavnere, der klager over at skulle køre rundt i lang tid for at finde en parkeringsplads.<br><br>Målet er at vise hvor mange ledige private pladser der faktisk findes, så vi kan stoppe med at bruge skatteydernes penge på at konkurrere med private tilbud.<br><br><div style="height: 5vh;"></div>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 30,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
}; 