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
            id: 'arrogance-of-space-slide',
            alignment: 'center',
            hidden: false,
            title: 'The Arrogance of Space',
            description: 'Dette billede fra Paris viser hvordan "the arrogance of space" kan bekæmpes. Copenhagenize Design Co. har hjulpet over 50 byer med at transformere bilcentrerede gader til menneskecentrerede rum.',
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
            isImageSlide: true,
            backgroundImage: './assets/Paris 1 by Mikael Colville Andersen.jpg'
        },
        {
            id: 'dansk-paradoks',
            alignment: 'center',
            hidden: false,
            title: 'Det danske paradoks',
            description: 'Vi eksporterer løsninger mod bilernes dominans til hele verden. Men hjemme accepterer vi at 86% af private parkeringspladser står tomme, mens skatteydere betaler 19.000kr årligt per leasede plads.<br><br>Hver parkeringsplads kunne være 20m cykelsti. Hvorfor fører vi ikke an med markedsbaserede parkeringsløsninger?',
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