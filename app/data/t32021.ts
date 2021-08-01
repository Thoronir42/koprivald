import ImageGallery from "../utils/ImageGallery"

export type Edition = {
    name: string,
    subtitle?: string,
    images: ImageGallery,
}

export const editions: Edition[] = [
    {
        name: 'Václav',
        subtitle: 'zapékací mísy',
        images: new ImageGallery([
            {file: 'koprivald__77.jpg', alt: ''},
            {file: 'koprivald__12_2.jpg', alt: ''},
            {file: 'koprivald__13_2.jpg', alt: ''},
            {file: 'koprivald__65.jpg', alt: ''},
        ])
            .addVariant('/images/koprivald/t32021/vaclav/small/', 'small')
            .addVariant('/images/koprivald/t32021/vaclav/', 'full')
        ,
    },
    {
        name: 'Lumír a Čestmír',
        subtitle: 'mísy na zadělávání těsta',
        images: new ImageGallery([
            {file: 'koprivald__28_2.jpg', alt: ''},
            {file: 'koprivald__61 kopie.jpg', alt: ''},
            {file: 'koprivald__63.jpg', alt: ''},
            {file: 'koprivald__67.jpg', alt: ''},
            {file: 'koprivald__75.jpg', alt: ''},
        ])
            .addVariant('/images/koprivald/t32021/lumír čestmír/small/', 'small')
            .addVariant('/images/koprivald/t32021/lumír čestmír/', 'full')
        ,
    },
    {
        name: 'Kilián',
        subtitle: 'kalíšky na pití',
        images: new ImageGallery([
            {file: 'koprivald__6_2.jpg', alt: ''},
            {file: 'koprivald__8_2.jpg', alt: ''},
            {file: 'koprivald__55.jpg', alt: ''},
            {file: 'koprivald__57.jpg', alt: ''},
            {file: 'koprivald__60.jpg', alt: ''},
        ])
            .addVariant('/images/koprivald/t32021/kilián/small/', 'small')
            .addVariant('/images/koprivald/t32021/kilián/', 'full')
        ,
    },
    {
        name: 'František',
        subtitle: 'talíř a miska',
        images: new ImageGallery([
            {file: 'koprivald__44 kopie_2.jpg', alt: ''},
            {file: 'koprivald__59.jpg', alt: ''},
            {file: 'koprivald__74.jpg', alt: ''},
        ])
            .addVariant('/images/koprivald/t32021/františek/small/', 'small')
            .addVariant('/images/koprivald/t32021/františek/', 'full')
        ,
    },
    {
        name: 'Rostislav',
        subtitle: 'oceloryt',
        images: new ImageGallery([
            {file: 'koprivald__11_2.jpg', alt: ''},
            {file: 'koprivald__15_2.jpg', alt: ''},
            {file: 'koprivald__69.jpg', alt: ''},
            {file: 'koprivald__80.jpg', alt: ''},
        ])
            .addVariant('/images/koprivald/t32021/rostislav/small/', 'small')
            .addVariant('/images/koprivald/t32021/rostislav/', 'full')
        ,
    },
    {
        name: 'Varianty Tvaru',
        subtitle: 'oceloryt',
        images: new ImageGallery([
            {file: 'koprivald__70.jpg', alt: ''},
            {file: 'koprivald__72.jpg', alt: ''},
            {file: 'koprivald__76.jpg', alt: ''},
            {file: 'koprivald__78.jpg', alt: ''},
            {file: 'koprivald__79.jpg', alt: ''},
        ])
            .addVariant('/images/koprivald/t32021/komba/small/', 'small')
            .addVariant('/images/koprivald/t32021/komba/', 'full')
        ,
    },

]
