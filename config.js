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
            alignment: 'center',
            hidden: false,
            title: 'Problemet med parkering i København',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            description: 'Man kunne jo tro, at hun havde læst hvad kommunen har skrevet tidligere om parkeringsforholdene. Fx stod der i parkeringsredegørelsen fra 2018: <br><br><em>"Således ligger belægningsgraderne i de private anlæg med offentlig adgang på mellem 60-70 % om dagen og er sjældent over 20 % om natten."</em><br><br>Kilde: <a href="https://www.kk.dk/sites/default/files/agenda/4c2ace22-b3ad-4eae-8a00-7fea405ffd51/4d51992b-c2d0-4888-b780-ce0a37b99763-bilag-4_0.pdf">Parkeringsredegørelse 2018</a>',
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
            id: 'kommunale-lejeaftaler',
            alignment: 'right',
            hidden: false,
            title: 'Kommunen lejer allerede pladser',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
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
            id: 'nørrebro-parking',
            alignment: 'right',
            hidden: false,
            title: 'Nørrebro: Samme historie',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
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
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            description: 'En opgørelse fra d. 7. maj i år viser, at den gns. belægning på de første 1.000 lejede pladser er pt på 14%.<br><br>Hvad koster denne ineffektivitet samfundet?<br><br>Kilde: <a href="https://www.kk.dk/sites/default/files/2025-05/07.05.25%20-%20Orienteringsnotat%20om%20Benyttelsen%20af%20de%20lejede%20parkeringspladser%20i%20private%20anl%C3%A6g.pdf">Orienteringsnotat om benyttelsen</a>',
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
            id: 'hvad-tager-parkering',
            alignment: 'center',
            hidden: false,
            title: 'Hvad tager parkering fra os?',
            image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
            description: 'Forskning viser at biler optager 60-70% af byens offentlige rum, men bruges kun 5% af tiden. I København kunne tomme private parkeringspladser blive til cykelstier, grønne områder, legepladser og caféliv.<br><br>Som byplanlægger Michael Szell påpeger: "Vi har givet bilen alt for meget plads i vores byer."<br><br>Kilder: <a href="http://michael.szell.net/downloads/talk_szell2019rwu.pdf">Szell (2019) - Urban Space Distribution</a>',
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
            id: 'gehl-revolution',
            alignment: 'center',
            hidden: false,
            title: 'Jan Gehl revolutionerede byplanlægning',
            image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&h=600&fit=crop',
            description: 'I 1960\'erne startede Jan Gehl en revolution fra København. Hans forskning i hvordan mennesker bruger byrum ændrede byplanlægning globalt.<br><br>Fra Strøget - verdens første gågade - til Times Square i New York. Gehls principper om "cities for people" bruges nu i hundredvis af byer verden over.<br><br><strong>Resultatet: Mere liv, mindre biler, bedre byer.</strong>',
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
            onChapterExit: [],
            isFullscreenSlide: true,
            backgroundImage: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=1920&h=1080&fit=crop'
        },
        {
            id: 'copenhagenize',
            alignment: 'center',
            hidden: false,
            title: 'The Arrogance of Space',
            image: './assets/Paris 1 by Mikael Colville Andersen.jpg',
            description: 'Copenhagenize Design Co. har hjulpet over 50 byer med at bekæmpe "the arrogance of space" - bilens dominans af byerne.<br><br>Fra Paris\' cykelrevolution til New Yorks protected bike lanes. Danske principper har skabt mere plads til mennesker i byer verden over.<br><br><strong>Dette billede fra Paris viser hvordan "the arrogance of space" kan bekæmpes.</strong>',
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
            isFullscreenSlide: true,
            backgroundImage: './assets/Paris 1 by Mikael Colville Andersen.jpg'
        },
        {
            id: 'dansk-paradoks',
            alignment: 'center',
            hidden: false,
            title: 'Det danske paradoks',
            image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=800&h=600&fit=crop',
            description: 'Vi eksporterer løsninger mod bilernes dominans til hele verden. Men hjemme accepterer vi at:<br><br>• 86% af private parkeringspladser står tomme<br>• Skatteydere betaler 19.000kr årligt per leasede plads<br>• Hver parkeringsplads kunne være 20m cykelsti<br><br><strong>Hvorfor fører vi ikke an med markedsbaserede parkeringsløsninger?</strong>',
            location: {
                center: [12.5683, 55.6761],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showParadoxSlide',
            onChapterEnter: [],
            onChapterExit: [],
            isFullscreenSlide: true,
            backgroundImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop'
        },
        {
            id: 'løsning',
            alignment: 'center',
            hidden: false,
            title: 'Løsningen: ledigparkeringspladsikbh.dk',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
            description: 'Så jeg har selvfølgelig købt domænet "ledigparkeringspladsikbh.dk" som jeg håber snart kan hjælpe de stakkels curlingkøbenhavnere, der klager over at skulle køre rundt i lang tid for at finde en parkeringsplads, med at finde et privat parkeringsanlæg, hvor der med meget stor sandsynlighed er en ledig plads - hvis de vil betale markedspris for det.<br><br>Målet er at vise hvor mange ledige private pladser der faktisk findes, så vi kan stoppe med at bruge skatteydernes penge på at konkurrere med private tilbud.',
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