import heroBgImg from '../assets/images/hero_winery_bg_1785589235793.jpg';
import roseBottleImg from '../assets/images/jovanovic_rose_bottle_1785589247867.jpg';
import redBottleImg from '../assets/images/jovanovic_red_bottle_1785589260995.jpg';
import terroirImg from '../assets/images/svrljig_terroir_1785589272352.jpg';

export { heroBgImg, roseBottleImg, redBottleImg, terroirImg };

export const WINES_DATA = [
  {
    id: 'jovanovic-rose-supreme',
    name: 'Jovanović Rosé Supreme',
    subtitle: 'Muskat Hamburg & Prokupac • Svrljig Terroir',
    type: 'rose',
    year: 2023,
    grapeVariety: 'Muskat Hamburg 60%, Prokupac 40%',
    alcohol: '12.5%',
    volume: '0.75 l',
    price: '2.200 RSD',
    rating: 4.9,
    image: roseBottleImg,
    spanCols: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    description: 'Vrhunsko roze vino dobijeno od pažljivo odabranog grožđa sa sunčanih padina Svrljiških planina. Odlikuje se kristalno jasnom rubin-roze bojom, svilenkastom teksturom i svežinom koja osvaja pri prvom gutljaju.',
    tastingNotes: {
      aroma: 'Bogat miris divljih jagoda, ružinih latica i sočne maline sa suptilnim floralnim notama.',
      taste: 'Izbalansirano, elegantno telo sa hrskavom kiselošću i punim voćnim ukusom zrelih šumskih plodova.',
      finish: 'Duga, osvežavajuća završnica sa nagoveštajem svrljiškog mineralnog tla.'
    },
    foodPairing: ['Mladi kozji sirevi', 'Dimljeni losos i plodovi mora', 'Lagane ljetnje salate', 'Pršuta i bruskete'],
    servingTemp: '8 - 10°C',
    awards: ['Velika Zlatna Medalja - Sajam Vina 2024', 'Šampion Roze Vina Srbije 2023']
  },
  {
    id: 'jovanovic-red-reserve',
    name: 'Jovanović Crveno Reserve',
    subtitle: 'Vranac & Cabernet Sauvignon • Odležalo u Hrastu',
    type: 'red',
    year: 2019,
    grapeVariety: 'Vranac 70%, Cabernet Sauvignon 30%',
    alcohol: '14.2%',
    volume: '0.75 l',
    price: '3.400 RSD',
    rating: 5.0,
    image: redBottleImg,
    spanCols: 'md:col-span-5',
    aspectRatio: 'aspect-[4/5]',
    description: 'Moćno i kompleksno crveno vino koje je sazrevalo 24 meseca u barik bačvama od srpskog hrasta. Odražava pun potencijal i tradiciju vinogradarstva Svrljiškog okruga.',
    tastingNotes: {
      aroma: 'Duboke arome zrele crne trešnje, suve šljive, tamne čokolade i finog dima od hrastovine.',
      taste: 'Puno, robusno telo sa baršunastim taninima i slojevitim ukusima crne ribizle, kakaa i začina.',
      finish: 'Izuzetno duga i topla završnica sa kompleksnim drvenastim notama.'
    },
    foodPairing: ['Odležala govedina i biftek', 'Srpski pečeni jagnjeći kotleti', 'Zreli tvrdi sirevi', 'Divljač u sosu'],
    servingTemp: '16 - 18°C',
    awards: ['Zlatni Pehar Vitezova Vina 2023', '93 Poena International Wine Challenge']
  },
  {
    id: 'svrljig-barrique-selection',
    name: 'Svrljig Selection Barrique',
    subtitle: 'Limitirana Serija Crvenog Vina • 1000 Boca',
    type: 'reserve',
    year: 2020,
    grapeVariety: 'Prokupac 50%, Vranac 50%',
    alcohol: '13.8%',
    volume: '0.75 l',
    price: '4.800 RSD',
    rating: 4.95,
    image: terroirImg,
    spanCols: 'md:col-span-5',
    aspectRatio: 'aspect-[4/5]',
    description: 'Ekskluzivna kolekcija stvorena iz najboljih berbi sa starih čokota. Svaka boca je numerisana i predstavlja vrhunski domet svrljiškog podrumarstva.',
    tastingNotes: {
      aroma: 'Plemenit buke kupina, vanile, sveže mlevene kafe i tonke.',
      taste: 'Savršena ravnoteža voćnosti i hrastovih tanina, bogate strukture i harmoničnog ukusa.',
      finish: 'Dugotrajna elegancija koja se postepeno razvija u čaši.'
    },
    foodPairing: ['Prasence i pečenje ispod sača', 'Teleći medaljoni sa vrganjima', 'Starinski sirevi sa medom'],
    servingTemp: '17 - 19°C',
    awards: ['Zlatna Medalja Decanter World Wine Awards', 'Pobednik Balkanskog Kup-a Vina']
  },
  {
    id: 'jovanovic-rose-classic',
    name: 'Jovanović Rosé Classic',
    subtitle: 'Sveža Letnja Berba • Svrljiške Padine',
    type: 'rose',
    year: 2024,
    grapeVariety: 'Prokupac 100%',
    alcohol: '11.8%',
    volume: '0.75 l',
    price: '1.800 RSD',
    rating: 4.85,
    image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=1200&q=80',
    spanCols: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    description: 'Lagano, pitko i izuzetno osvežavajuće roze vino napravljeno od autohtone sorte Prokupac. Idealno za tople letnje večeri i druženja na terasi.',
    tastingNotes: {
      aroma: 'Sveže maline, citrusi i pupoljci divlje ruže.',
      taste: 'Prštava voćna svežina sa umerenim mineralnim akcentom.',
      finish: 'Čista, pitka završnica koja poziva na sledeći gutljaj.'
    },
    foodPairing: ['Paste sa paradajz sosom', 'Roštilj i sveže salate', 'Pice i predjela'],
    servingTemp: '7 - 9°C',
    awards: ['Srebrna Medalja Sajam Vina Niš 2024']
  }
];

export const JOURNAL_ENTRIES = [
  {
    id: 'svrljig-terroir-secrets',
    title: 'Tajne svrljiškog krečnjaka i jedinstvena mikroklima',
    category: 'TERROIR & PRIRODA',
    readTime: '4 min čitanja',
    date: 'Oktobar 2024',
    summary: 'Zašto su padine Svrljiških planina jedno od najpogodnijih podneblja u Srbiji za uzgajanje grožđa za vrhunska roze i crvena vina.',
    content: `Svrljiški okrug na jugoistoku Srbije odlikuje se specifičnim geografskim položajem. Smešten između planinskih masiva, ovaj kraj uživa u idealnoj kombinaciji toplih sunčanih dana i prohladnih planinskih noći. 

Zemljište bogato krečnjakom i mineralima daje našem grožđu izraženu kiselost i bogate aromatike koje se savršeno preslikavaju u čaši Jovanović Rosé i Crvenog vina. Podrum Jovanović neguje čokote na nadmorskoj visini od preko 450 metara, gde vetar stalno provetrava vinograde i prirodno ih štiti od bolesti.`,
    image: terroirImg
  },
  {
    id: 'jovanovic-family-legacy',
    title: 'Tradicija Jovanovića: Od malog porodičnog podruma do šampionskih pehara',
    category: 'PORODIČNA PRIČA',
    readTime: '6 min čitanja',
    date: 'Avgust 2024',
    summary: 'Priča o tome kako je pre više od tri decenije porodica Jovanović započela obnovu starih porodičnih vinograda u Svrljigu.',
    content: `Priča o Vinariji Jovanović počinje 1994. godine kada je deda Milorad Jovanović zasadio prve čokote Prokupca i Vranaca na dedovini u blizini Svrljiga. Vođeni ljubavlju prema tlu i poštovanjem običaja naših predaka, pretvorili smo skromni porodični podrum u modernu vinariju koja ne zaboravlja svoje korene.

Danas druga i treća generacija Jovanovića spojila je tradiciju sa najsavremenijom enološkom tehnologijom. Svaka boca prođe kroz naše ruke, od zimske rezidbe do pečaćenja voskom.`,
    image: heroBgImg
  },
  {
    id: 'oak-barrel-aging',
    title: 'Umetnost odležavanja u srpskom hrastu',
    category: 'ENOLOGIJA',
    readTime: '5 min čitanja',
    date: 'Maj 2024',
    summary: 'Zavirite u naš duboki podrum i saznajte kako srpski hrast oblikuje kompleksnost naših rezervnih crvenih berbi.',
    content: `Odležavanje vina u hrastovim bačvama zahteva strpljenje i neprestani nadzor. Naš podrum drži stalnu temperaturu od 13°C tokom cele godine. Za naše Jovanović Crveno Reserve koristimo isključivo barik bačve od stogodišnjeg srpskog hrasta sa Homolja.

Hrast vinu daruje suptilne note vanile, tosta i kakaa, dok taninima daje svilenkastu finoću. Nakon 24 meseca u drvetu, vino odležava još najmanje godinu dana u boci pre nego što stigne do vašeg stola.`,
    image: redBottleImg
  },
  {
    id: 'rose-winemaking-craft',
    title: 'Kako stvaramo prepoznatljivu rubin nijansu Jovanović Rosé-a',
    category: 'TAJNE PODRUMA',
    readTime: '3 min čitanja',
    date: 'Februar 2024',
    summary: 'Proces maceracije pod strogo kontrolisanom temperaturom daju našem rozeu osvežavajući karakter i prelepu boju.',
    content: `Pravljenje vrhunskog roze vina je delikatna umetnost. Kontakt pokožice grožđa i šire traje svega nekoliko sati — dovoljno da se izvuče najlepša sveža aroma i idealna svetlorubin nijansa, bez preuzimanja teških tanina.

Koristimo kombinaciju autohtonog Prokupca za minerale i osvežavajuću kiselost, te Muskat Hamburga za opojni floralni buke. Rezultat je roze vino koje se pamti.`,
    image: roseBottleImg
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'vineyard-sunset',
    title: 'Padine Svrljiških Vinograda',
    subtitle: 'Zlatni sat u berbi 2024',
    image: terroirImg,
    location: 'Svrljig, Srbija',
    rotation: '-rotate-2'
  },
  {
    id: 'oak-casks-cellar',
    title: 'Hrastove Bačve Jovanović',
    subtitle: 'Arhivski podrum ukopan u stenu',
    image: redBottleImg,
    location: 'Podrum Svrljig',
    rotation: 'rotate-3'
  },
  {
    id: 'rose-tasting-glass',
    title: 'Čaša Jovanović Rosé Vina',
    subtitle: 'Svežina svrljiškog leta',
    image: roseBottleImg,
    location: 'Degustaciona Sala',
    rotation: '-rotate-1'
  },
  {
    id: 'harvest-hands',
    title: 'Ručna Selekcija Grožđa',
    subtitle: 'Svaka bobica se proverava',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    location: 'Potez Svrljiška Banja',
    rotation: 'rotate-2'
  },
  {
    id: 'estate-patio',
    title: 'Degustaciona Terasa',
    subtitle: 'Pogled na vinograde i dolinu Nišave',
    image: heroBgImg,
    location: 'Imanje Jovanović',
    rotation: '-rotate-3'
  },
  {
    id: 'vintage-bottles-vault',
    title: 'Arhivska Kolekcija 1994-2024',
    subtitle: 'Čuvane riznice najbojih berbi',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80',
    location: 'Zatvoreni Arhiv',
    rotation: 'rotate-1'
  }
];

export const WINERY_STATS = [
  {
    number: '30+',
    labelSR: 'Godina Porodične Tradicije',
    labelEN: 'Years of Family Heritage',
    descSR: 'Od prvog zasada 1994. u Svrljigu do vodeće roze i crvene vinarije.',
    descEN: 'From the first vines planted in 1994 in Svrljig to award-winning vintages.'
  },
  {
    number: '750m',
    labelSR: 'Nadmorska Visina Terroira',
    labelEN: 'High Elevation Microclimate',
    descSR: 'Idealne temperature za očuvanje prirodnih kiselina i aromatičnosti.',
    descEN: 'Optimal day-to-night temperature split for fresh aromatics.'
  },
  {
    number: '100%',
    labelSR: 'Ručno Brano Grožđe',
    labelEN: '100% Hand-picked Harvest',
    descSR: 'Tradicionalna berba u ranim jutarnjim časovima radi očuvanja svežine.',
    descEN: 'Harvested in cool early morning hours to preserve freshness.'
  },
  {
    number: '18',
    labelSR: 'Zlatnih Medalja & Priznanja',
    labelEN: 'Gold Medals & Awards',
    descSR: 'Priznati na regionalnim i međunarodnim ocenjivanjima kvaliteta.',
    descEN: 'Recognized in Serbian and international wine competitions.'
  }
];

export const DICTIONARY = {
  sr: {
    heroEyebrow: 'SVRLJIŠKI OKRUG • SRBIJA • EST. 1994',
    heroTitle: 'Vinarija Jovanović',
    heroSub: 'Autentična {role} iz Svrljiškog kraja.',
    roles: ['Roze Berba', 'Crveni Vranac', 'Hrastova Bačva', 'Porodična Strast'],
    heroDesc: 'Stvaramo vrhunska Roze i Crvena vina na krečnjačkim sunčanim padinama Svrljiga. Spoj vekovnog terroira, porodične strasti i moderne enologije.',
    btnExplore: 'Pogledaj Vina',
    btnBook: 'Rezervišite Degustaciju',
    navHome: 'Početna',
    navWines: 'Naša Vina',
    navStory: 'Priča & Svrljig',
    navGallery: 'Galerija',
    navContact: 'Kontakt & Degustacija',
    navSayHi: 'Pozovite nas',
    selectedWorksEyebrow: 'ODABRANE BERBE',
    selectedWorksTitle: 'Naša Vrhunska *Vina*',
    selectedWorksSub: 'Ekskluzivna kolekcija roze i crvenih vina sa svrljiškog podneblja.',
    btnViewAllWines: 'Sva Vina',
    journalEyebrow: 'ISTORIJA I TERROIR',
    journalTitle: 'Zapisi iz *Podruma*',
    journalSub: 'Upoznajte svrljiški kraj, našu tradiciju i tajne stvaranja vrhunskih berbi.',
    btnViewAllArticles: 'Sve Priče',
    explorationsEyebrow: 'FOTO DOŽIVLJAJ',
    explorationsTitle: 'Atmosfera *Vinograda*',
    explorationsSub: 'Zavirite u naš podrum, staze vinograda i degustacionu salu u Svrljigu.',
    contactEyebrow: 'DOĐITE U POSETU',
    contactTitle: 'Rezervišite Vašu *Degustaciju*',
    contactSub: 'Doživite magiju Svrljiga, omirišite hrastove bačve i probajte sveža roze i crvena vina u autentičnom ambijentu.',
    contactLocation: 'Svrljiški okrug, Srbija',
    contactPhone: '+381 18 821 345',
    contactEmail: 'kontakt@vinarijajovanovic.rs',
    formName: 'Vaše Ime i Prezime',
    formEmail: 'Email Adresa',
    formPhone: 'Broj Telefona',
    formDate: 'Željeni Datum Posete',
    formGuests: 'Broj Gostiju',
    formPreference: 'Odaberite Vinsku Kartu',
    formMessage: 'Poruka ili Posebne Napomene',
    btnSendReservation: 'Pošaljite Upit za Degustaciju',
    formSuccess: 'Hvala vam! Vaš upit za degustaciju je uspešno poslat. Stupićemo u kontakt uskoro.',
    footerMarquee: 'VINARIJA JOVANOVIĆ • SVRLJIG WINE REGION • PREMIUM ROSÉ & RED WINE • ',
    cellarStatus: 'Podrum otvoren za posete i degustaciju',
    rights: '© 2026 Vinarija Jovanović. Sva prava zadržana.',
    newsletterTitle: 'Dah svežine i elegancije iz svrljiških vinograda',
    newsletterSub: 'Prijavite se za ekskluzivne najave novih berbi, arhivskih izdanja i privatnih degustacija.',
    newsletterPlaceholder: 'Vaša email adresa...',
    newsletterBtn: 'Pridruži se',
    newsletterSuccess: 'Hvala! Uspešno ste na našoj lansirnoj vinskoj listi.',
    footerHeadline: 'Tradicionalna vina koja pričaju priču o rodu, zemlji i porodičnoj strasti.',
    footerColCompany: 'Vinarija',
    footerColSocials: 'Društvene Mreže',
    footerColLegal: 'Informacije',
    madeIn: 'Svrljig, Srbija',
  },
  en: {
    heroEyebrow: 'SVRLJIG DISTRICT • SERBIA • EST. 1994',
    heroTitle: 'Jovanović Winery',
    heroSub: 'Authentic {role} from Svrljig terroir.',
    roles: ['Rosé Harvest', 'Red Vranac', 'Oak Aging', 'Family Passion'],
    heroDesc: 'Crafting premium Rosé and Red wines on the sun-kissed limestone slopes of Svrljig, Serbia. Merging heritage terroir, family passion, and refined enology.',
    btnExplore: 'Explore Vintages',
    btnBook: 'Book a Tasting',
    navHome: 'Home',
    navWines: 'Vintages',
    navStory: 'Story & Svrljig',
    navGallery: 'Gallery',
    navContact: 'Contact & Tasting',
    navSayHi: 'Get in Touch',
    selectedWorksEyebrow: 'SELECTED VINTAGES',
    selectedWorksTitle: 'Featured *Wines*',
    selectedWorksSub: 'An exclusive portfolio of handcrafted Rosé and Red wines from Svrljig hills.',
    btnViewAllWines: 'View All',
    journalEyebrow: 'HERITAGE & TERROIR',
    journalTitle: 'Cellar *Chronicles*',
    journalSub: 'Discover the Svrljig terroir, our family history, and winemaking secrets.',
    btnViewAllArticles: 'Read More',
    explorationsEyebrow: 'VISUAL EXPERIENCE',
    explorationsTitle: 'Vineyard *Atmosphere*',
    explorationsSub: 'Step inside our stone wine cellars, barrel vaults, and tasting pavilion in Svrljig.',
    contactEyebrow: 'VISIT US',
    contactTitle: 'Book Your *Tasting*',
    contactSub: 'Experience Svrljig wine country. Tour the oak barrel vault and savor our finest Rosé & Red releases.',
    contactLocation: 'Svrljig District, Nišava, Serbia',
    contactPhone: '+381 18 821 345',
    contactEmail: 'contact@jovanovic-wine.rs',
    formName: 'Full Name',
    formEmail: 'Email Address',
    formPhone: 'Phone Number',
    formDate: 'Preferred Tasting Date',
    formGuests: 'Number of Guests',
    formPreference: 'Preferred Wine Flight',
    formMessage: 'Message or Special Requests',
    btnSendReservation: 'Send Tasting Request',
    formSuccess: 'Thank you! Your tasting inquiry has been submitted. We will contact you shortly.',
    footerMarquee: 'JOVANOVIĆ WINERY • SVRLJIG WINE REGION • PREMIUM ROSÉ & RED WINE • ',
    cellarStatus: 'Cellar open for guided tours & tastings',
    rights: '© 2026 Jovanović Winery. All rights reserved.',
    newsletterTitle: 'A breath of fresh air and elegance from Svrljig hills',
    newsletterSub: 'Subscribe for exclusive vintage previews, reserve archive releases, and private tasting invites.',
    newsletterPlaceholder: 'Enter your email...',
    newsletterBtn: 'Subscribe',
    newsletterSuccess: 'Thank you! You have joined our exclusive wine list.',
    footerHeadline: 'Artisanal wines carrying the soul of Svrljig soil and family passion.',
    footerColCompany: 'Winery',
    footerColSocials: 'Socials',
    footerColLegal: 'Legal',
    madeIn: 'Made in Svrljig, Serbia',
  }
};
