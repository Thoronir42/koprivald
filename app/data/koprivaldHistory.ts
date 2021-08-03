import ImageGallery, {Image} from "../utils/ImageGallery"

type PositionOptions = {
    offset: string,
    lineWidth?: string,
    class?: string,
}
type MarkerPlacement = 'left' | 'right'
type MarkerPosition = {
    placement: MarkerPlacement,
    top: string,
} & PositionOptions

type MarkerContent = {
    label?: string,
    caption?: string,
    text?: string,
    images?: Image[],
    gallery?: ImageGallery,
}
type MarkerContentLabelled = MarkerContent & {
    label: string,
}

export class Marker {
    constructor(
        public readonly position: MarkerPosition,
        public readonly content: MarkerContentLabelled,
    ) {
    }
}

export class TimelineContainer {
    public readonly range: number
    public readonly markers: Marker[]

    constructor(public readonly start: number, public readonly end: number) {
        this.range = end - start
        this.markers = []
    }

    public addMarker(placement: MarkerPlacement, year: number, position: PositionOptions, content: MarkerContent): this {
        if (!content.label) {
            content = {...content, label: '' + year}
        }

        this.markers.push(new Marker({
            ...position,
            placement,
            top: this.calcTop(year),
        }, content as MarkerContentLabelled))

        return this
    }

    private calcTop(year: number): string {
        const offset = (year - this.start) / this.range * 100
        return (Math.round(offset * 1000) / 1000) + '%'
    }
}

const createImageGallery = (files: Image[]): ImageGallery => new ImageGallery(files)
    .addVariant('/images/koprivald/ilustrace/')

const timeline = new TimelineContainer(1792, 2021)
    .addMarker('right', 1792, {
            offset: '2%',
        },
        {
            caption: "Johann Georg Paulus v dopise zemské radě",
            text: "„…zdlouhavými nákladnými pokusy o výrobu míšeňského porcelánového nádobí – dosud to neznámého"
                + " produktu mezi domácími artikly – položil jsem konečně podepsaný základ takové továrně, která ke"
                + " své naprosté dokonalosti a stálému trvání nepotřebuje žádnou podporu, kromě zeměpanské"
                + " pozornosti a ujištění o ochraně.“",
        },
    )
    .addMarker('left', 1793, {
            offset: '5.2%',
        },
        {
            caption: "Zemská rada Paulusovi",
            text: "„v své podstatě nic jiného než hrnična z poněkud vylepšené hmoty na způsob porcelánové nebo"
                + " tvrdé kameninové.“",
        },
    )
    .addMarker('right', 1812, {
            offset: '13%',
            class: 'marker-pictures',
        },
        {
            gallery: createImageGallery([
                {file: '4a.PNG', alt: "4a"},
            ]),
        },
    )
    .addMarker('left', 1824, {
            offset: '29.5%',
            lineWidth: '6vw',
        },
        {
            caption: "první komisař u c. k. inspekce továren",
            text: "„mezi českými porcelánkami zvláště vyniká slavkovská – dodává stolní soupravy, kávové soupravy"
                + " a hlavičky dýmek. Hmota je čistá, nádobí pečlivě zpracováno a barvy dobré, ceny nízké.“",

            gallery: createImageGallery([
                {file: '3a.PNG', alt: "3a"},
                {file: '3b.PNG', alt: "3b"},
            ]),
        },
    )
    .addMarker('right', 1830, {
            offset: '37.5%',
            lineWidth: '1.5em',
        },
        {
            caption: "vůdčí postavení mezi českými porcelánkami, vrcholné období produkce po estetické kvalitě malířského období vrcholí",
            text: "„Porcelán je skvostným materiálem a jeho kvality prohlubují naši skvělí drobnomalíři. Své mistrovství ukazují na květinových a mytologických námětech či vedutách.“",
            gallery: createImageGallery([
                {file: '8a.PNG', alt: "8a"},
            ]),
        })
    .addMarker('right', 1835, {
            offset: "26.3%",
        },
        {
            caption: "Druhé rokoko, neboli období plastické",
            text: "„Malba se již nenosí, nyní hýbe šlechtickým dvorem důmyslné a zdobné tvarování.“ Šlechta začíná ovlivňovat svými penězi výrobu, obrací se k zašlé slávě buržoazie",
            gallery: createImageGallery([
                {file: '6a.PNG', alt: "6a"},
            ]),
        })
    .addMarker('right', 1850, {
            offset: "0px",
            lineWidth: '7.8em',
        },
        {
            caption: "zlom století je zlomem ke kapitalistické tendenci podnikání",
            text: "„Náš skvělý Baron Haas a umělecká kvalita výroby vykrváceli v boji s touhou po zisku, produkcí ostatních továren i spotřebiteli.“",
            gallery: createImageGallery([
                {file: '5a.PNG', alt: "5a"},
                {file: '5b.PNG', alt: "5b"},
            ]),
            // TODO: repeat the plate bar: 5a+b, 3a+b namnožené jako z pásové výroby talířky jsou podšálky
        })
    .addMarker('right', 1872, {
            offset: "5%",
        },
        {
            caption: "výstava ve Vídni",
            text: "„ornament nabízí půvabné efekty, tvary jsou zhrublé a inspirace rozmělněné“ orientalizující soupravu doplit ilu",
        })
    .addMarker('right', 1900, {
            offset: "3%",
            lineWidth: "6em",
        },
        {
            caption: "Haas & Czjzek",
            text: "„inspirujme se v zahraničí novým krásným slohem, secesí!“",
            gallery: createImageGallery([
                {file: '7a.PNG', alt: "7a"},
                {file: '7b.PNG', alt: "7b"},
                {file: '7c.PNG', alt: "7c"},
                {file: '7d.PNG', alt: "7d"},
            ]),
        })
    .addMarker('left', 1908, {
            offset: "6.9%",
        },
        {
            caption: "František Josef I.",
            text: "„ku příležitosti našeho výročí 60.roku vlády vás ustavuji šlechtici, barony Haasem von Hasenfeld & Hans Czjzkem Edler von Smidaich.“",
        })
    .addMarker('right', 1915, {
            offset: "29%",
        },
        {
            caption: "přizpůsobení se vkusu zákazníků rovná se estetický úpadek a velký komerční úspěch",
            gallery: createImageGallery([
                {file: '9a.PNG', alt: "9a"},
                {file: '9b.PNG', alt: "9b"},
            ]),
        })
    .addMarker('right', 1930, {
            offset: "0%",
            lineWidth: "8em",
        },
        {
            caption: "Haas & Czjzek",
            text: "„děkujeme našim zaměstnancům, díky nimž výroba kvete i přes nápor světové hospodářské krize“",
            gallery: createImageGallery([
                // TODO: Place kovbojka
                {file: '10a.PNG', alt: "10a"},
                {file: '10b.PNG', alt: "10b"},
            ]),
        })
    .addMarker('left', 1945, {
            offset: "0%",
        },
        {
            label: "24. 4. 1945",
            caption: "Edvard Beneš",
            text: "„Znárodněno.“",
        })
    .addMarker('right', 1951, {
            offset: "31%",
        lineWidth: "1em",
        },
        {
            caption: "Ministerstvo průmyslu",
            text: "„jelikož je výnos prachbídný a náhradou specializovaných německých pracovníků jsou nekompetentní dělníci, reorganizujeme znovu uspořádání závodu. Poptávku na domácím trhnu je třeba ukojit, dodávat celé jídelní sady a sáhnout po oblíbených tvarech s velkým odbytem“",
            gallery: createImageGallery([
                {file: '1a.PNG', alt: "1a"},
            ]),
        })
    .addMarker('right', 1955, {
            offset: "-45.1%",
            lineWidth: "1.5em",
        },
        {
            caption: "Usnesení vlády č. 2 371",
            text: "„význam tohoto průmyslu pro potřeby národního hospodářství byl až dosud podceňován tak, že průmysl ten zaostal za světovou úrovní!“",
            gallery: createImageGallery([
                {file: '11a.PNG', alt: "11a"},
            ]),
        })
    .addMarker("right", 1958, {
            offset: "40%",
        lineWidth: "0.75em",
        },
        {
            caption: "světová výstava EXPO Brusel",
            text: "Grand Prix pro československou expozici 11",
        })
    .addMarker("right", 1977, {
            offset: "12%",
        },
        {
            caption: "Královna Alžběta II.",
            text: "„Objednáváme ve vaší vyhlášené firmě stolní výbavu k výročí naší stříbrné svatby“",
        })
    .addMarker('left', 1989, {
            offset: "20%",
        },
        {
            caption: "Sametová revoluce",
            text: "privatizace",
        })
    .addMarker('right', 2002, {
            offset: "11%",
        },
        {
            gallery: createImageGallery([
                {file: '12a.PNG', alt: "12a"},
            ]),
        })
    .addMarker('left', 2009, {
            offset: "4%",
        },
        {
            caption: "velký ruský zákazník",
            text: "„Kupujeme vaši krasivaje balšoje fabriku!",
        })
    .addMarker('left', 2013.5, {
            offset: "4%",
        },
        {
            label: "2011 - 2016",
            caption: "postupné skomírání v rukou jiných majitelů",
        })
    .addMarker('left', 2017, {
            offset: "7%",
        },
        {
            caption: "Michal Prokop",
            text: "„Stěhujeme se s malým kouskem Horního Slavkova do Příchovic.“",
            gallery: createImageGallery([
                {file: '13a.PNG', alt: "13a"},
            ]),
        })
    .addMarker('left', 2020.3, {
            offset: "4.6%",
        },
        {
            label: "3/2021",
            caption: "Michal Prokop",
            text: "„Prozatím manufakturu zavíráme. Ale cesty pro ni budu hledat stále.“",
        })

export default {
    timeline,
}
