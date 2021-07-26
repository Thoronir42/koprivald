type MarkerPosition = {
    placement: 'left' | 'right',
    top: string,
    offset: string
}

class Marker {
    constructor(
        public readonly position: MarkerPosition,
        public readonly label: string,
        public readonly caption: string,
        public readonly content: string,
    ) {
    }

    static left(top: string, offset: string, label: string, caption: string, content: string): Marker {
        return new Marker({placement: 'left', top, offset}, label, caption, content)
    }

    static right(top: string, offset: string, label: string, caption: string, content: string): Marker {
        return new Marker({placement: 'right', top, offset}, label, caption, content)
    }
}

export default {
    markers: [
        Marker.right('2%', '1em', "1792",
            "Johann Georg Paulus v dopise zemské radě",
            "„…zdlouhavými nákladnými pokusy o výrobu míšeňského porcelánového nádobí – dosud to neznámého"
            + " produktu mezi domácími artikly – položil jsem konečně podepsaný základ takové továrně, která ke"
            + " své naprosté dokonalosti a stálému trvání nepotřebuje žádnou podporu, kromě zeměpanské"
            + " pozornosti a ujištění o ochraně.“"
        ),

        Marker.right('6%', '1.7em', "1793",
            "Zemská rada Paulusovi",
            "„v své podstatě nic jiného než hrnična z poněkud vylepšené hmoty na způsob porcelánové nebo"
            + " tvrdé kameninové.“"
            ),

        Marker.left('12%', '5.6em', "1824",
            "první komisař u c. k. inspekce továren",
            "„mezi českými porcelánkami zvláště vyniká slavkovská – dodává stolní soupravy, kávové soupravy"
            + " a hlavičky dýmek. Hmota je čistá, nádobí pečlivě zpracováno a barvy dobré, ceny nízké.“"
            ),

    ],
}
