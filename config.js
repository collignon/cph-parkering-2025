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
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Problemet med parkering i København',
            description: 'Os, der bor her i København vil ikke betale for parkeringspladser - og Pernille Rosenkrantz-Theil vil gerne bruge endnu flere af dine hårdtjente penge for at konkurrere med de private tilbud, der i dag står tomme.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
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
            id: 'belægningsgrad',
            alignment: 'left',
            hidden: false,
            title: 'Lav belægningsgrad i private anlæg',
            description: 'Man kunne jo tro, at hun havde læst hvad kommunen har skrevet tidligere om parkeringsforholdene. Fx stod der i parkeringsredegørelsen fra 2018:<br><br><em>"Således ligger belægningsgraderne i de private anlæg med offentlig adgang på mellem 60-70 % om dagen og er sjældent over 20 % om natten."</em><br><br>Kilde: <a href="https://www.kk.dk/sites/default/files/agenda/4c2ace22-b3ad-4eae-8a00-7fea405ffd51/4d51992b-c2d0-4888-b780-ce0a37b99763-bilag-4_0.pdf">Parkeringsredegørelse 2018</a>',
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
            alignment: 'right',
            hidden: false,
            title: 'Kommunen lejer allerede pladser',
            description: 'Endnu mere underligt, kommunerne lejer pt. over 2100 pladser fra nogle af disse anlæg.<br><br>Bare rolig, det koster kun gns. 19.000kr om året per plads, hvilket er kun ca. 8x så meget, som den gns. beboerlicensejer betaler til kommunen.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 13,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
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
            onChapterEnter: [],
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
            title: 'Aktuel belægning: Kun 14%',
            description: 'Husker du de 2.100 parkeringspladser som kommunen lejer fra private anlæg for 19.000 kr per plads om året?<br><br>En opgørelse fra d. 7. maj i år viser noget chokerende: <strong>Af de første 1.000 lejede pladser bruger borgerne kun 14% af dem.</strong><br><br>Det betyder at <strong>86% af de pladser vi betaler for står tomme</strong> - mens kommunen samtidig vil bruge endnu flere skattemidler på at leje flere pladser.<br><br>Hvad koster denne ineffektivitet samfundet?<br><br>Kilde: <a href="https://www.kk.dk/sites/default/files/2025-05/07.05.25%20-%20Orienteringsnotat%20om%20Benyttelsen%20af%20de%20lejede%20parkeringspladser%20i%20private%20anl%C3%A6g.pdf">Orienteringsnotat om benyttelsen</a>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showImpactStats',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'space-stats',
            alignment: 'center',
            hidden: false,
            title: 'Hvad kunne vi få i stedet?',
            description: 'Hvis vi omdannede bare de tomme private parkeringspladser i København, kunne vi få betydeligt mere byrum til mennesker.',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showSpaceComparison',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hvad-tager-parkering',
            alignment: 'center',
            hidden: false,
            title: 'Hvad tager parkering fra os?',
            description: 'Forskning viser at biler optager 60-70% af byens offentlige rum, men bruges kun 5% af tiden. I København kunne tomme private parkeringspladser blive til cykelstier, grønne områder, legepladser og caféliv.<br><br>Som byplanlægger Michael Szell påpeger: "Vi har givet bilen alt for meget plads i vores byer."<br><br>Kilder: <a href="http://michael.szell.net/downloads/talk_szell2019rwu.pdf">Szell (2019) - Urban Space Distribution</a>',
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
            id: 'gehl-revolution',
            alignment: 'center',
            hidden: false,
            title: 'Jan Gehl revolutionerede byplanlægning',
            description: 'I 1960\'erne startede Jan Gehl en revolution fra København. Hans forskning i hvordan mennesker bruger byrum ændrede byplanlægning globalt.<br><br>Fra Strøget - verdens første gågade (1962) - til Times Square i New York. Gehls principper om "cities for people" bruges nu i hundredvis af byer verden over.<br><br><strong>Resultatet: Mere liv, mindre biler, bedre byer.</strong><br><br>Kilde: <a href="https://gehlpeople.com/">Gehl Architects</a>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 14,
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
            onChapterEnter: [],
            onChapterExit: [],
            backgroundImage: './assets/Paris 1 by Mikael Colville Andersen.jpg',
            stickyGraphic: true
        },
        {
            id: 'transformation-intro',
            alignment: 'center',
            hidden: false,
            title: 'Paris: Fra biler til mennesker',
            description: 'Dette billede viser den dramatiske transformation som er mulig når man bekæmper "the arrogance of space".',
            location: {
                center: [2.3522, 48.8566], // Paris coordinates
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            backgroundImage: './assets/Paris is Looking Great.webp',
            stickyGraphic: true
        },
        {
            id: 'transformation-hidalgo',
            alignment: 'center',
            hidden: false,
            title: 'Anne Hidalgo\'s vision',
            description: 'Under borgmester Anne Hidalgo er Paris blevet omdannet fra en bilby til en cykelby.<br><br>En transformation der viser hvad politisk vilje kan opnå når man vælger mennesker over maskiner.',
            location: {
                center: [2.3522, 48.8566], // Paris coordinates
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            backgroundImage: './assets/Paris is Looking Great.webp',
            stickyGraphic: true
        },
        {
            id: 'transformation-results',
            alignment: 'center',
            hidden: false,
            title: 'Konkrete resultater',
            description: '<strong>Konkrete resultater:</strong><br>• 1.000 km cykelstier siden 2014<br>• 75% færre biler i centrum<br>• 200% stigning i cykling<br><br>Danske principper og dansk ekspertise var central i denne transformation.',
            location: {
                center: [2.3522, 48.8566], // Paris coordinates
                zoom: 13,
                pitch: 15,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
            backgroundImage: './assets/Paris is Looking Great.webp',
            stickyGraphic: true
        },
        {
            id: 'dansk-export-intro',
            alignment: 'center',
            hidden: false,
            title: 'Danmarks urbane eksport',
            description: 'Danske urbane løsninger eksporteres til hele verden. Fra København er principper om menneskecentrerede byer spredt til over 100 byer verden over.<br><br>Jan Gehl, Mikael Colville-Andersen og andre danske eksperter har hjulpet byer med at bekæmpe "the arrogance of space".<br><br>Lad os se på fire konkrete eksempler:',
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
                center: [-74.0060, 40.7128], // New York coordinates
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
            description: 'Barcelonas superblocks bygger på danske principper om at prioritere mennesker over biler. Salvador Rueda udviklede konceptet baseret på Jan Gehls teorier og Jane Jacobs\' ideer.<br><br><strong>Resultatet:</strong> 21 kvadratkilometer bilbelagt areal omdannet til offentligt rum for mennesker.<br><br>Som beskrevet på [gabarcelona.com](https://www.gabarcelona.com/blog/superblocks/): "Superblocks follow Jacobs\' theoretical framework in most of their guidelines" og implementerer Gehls "soft edges" principper.',
            location: {
                center: [2.1734, 41.3851], // Barcelona coordinates
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
            description: 'Bogotás Ciclovía - verdens største bilhegnsdag - er baseret på dansk cykelkultur og filozofi. Hver søndag lukkes 120 km veje for biler.<br><br><strong>50 års succes:</strong> Over 1,5 millioner borgere deltager hver søndag. Konceptet er nu exporteret til 400+ byer verden over.<br><br>Som [World Economic Forum](https://www.weforum.org/stories/2024/11/50-years-ciclovia-open-streets-cycling-cars/) beskriver: Ciclovía demonstrerer hvordan byer kan prioritere mennesker over maskiner - en kerneværdi fra dansk byplanlægning.',
            location: {
                center: [-74.0721, 4.7110], // Bogotá coordinates
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
            description: 'Jan Gehl designede Melbournes transformation fra bilorienteret by til fodgængervenliges centrum. Hans arbejde med laneways skabte "verdens mest livable city".<br><br><strong>Før Gehl:</strong> Døde gader efter kontortid<br><strong>Efter Gehl:</strong> Pulserende byliv 24/7<br><br>Som beskrevet i [The Discourse](https://thediscourse.ca/scarborough/melbourne-transformed-tiny-laneways-pedestrian-mecca): Melbournes transformation fra "tiny laneways to pedestrian mecca" byggede på danske principper om skala, liv og menneskecentreret design.',
            location: {
                center: [144.9631, -37.8136], // Melbourne coordinates
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
            alignment: 'center',
            hidden: false,
            title: 'Det danske paradoks',
            description: 'Vi eksporterer løsninger mod bilernes dominans til hele verden. Men hjemme accepterer vi at:<br><br>• 86% af private parkeringspladser står tomme<br>• Skatteydere betaler 19.000kr årligt per leasede plads<br>• Hver parkeringsplads kunne være 20m cykelsti<br><br><strong>Hvorfor fører vi ikke an med markedsbaserede parkeringsløsninger?</strong>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showDanishUrbanism',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'løsning',
            alignment: 'center',
            hidden: false,
            title: 'Løsningen: ledigparkeringspladsikbh.dk',
            description: 'Så jeg har selvfølgelig købt domænet "ledigparkeringspladsikbh.dk" som jeg håber snart kan hjælpe de stakkels curlingkøbenhavnere, der klager over at skulle køre rundt i lang tid for at finde en parkeringsplads.<br><br>Målet er at vise hvor mange ledige private pladser der faktisk findes, så vi kan stoppe med at bruge skatteydernes penge på at konkurrere med private tilbud.',
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
        }
    ]
}; 