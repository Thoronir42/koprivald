import ImageGallery from "../utils/ImageGallery"

export type Edition = {
    name: string,
    images: ImageGallery,
}

const imageNs = [
    6, 8, 10, 15, 17, 18, 19,
    21, 25, 33, 35, 36, 38, 42,
    44, 48, 49, 50, 51, 53, 54,
    57, 62, 63, 66,
]
const createImageGallery = () => {
    const images = []
    const maxImages = Math.round(4 + Math.random() * 7)
    for (let i = 0; i < maxImages; i++) {
        const n = imageNs[Math.floor(Math.random() * imageNs.length)]
        images.push({file: `hostina_${n}.jpg`, alt: 'Hostina ' + n})
    }
    return new ImageGallery(images)
        .addVariant('/images/koprivald/foto/small/', 'small')
        .addVariant('/images/koprivald/foto/', 'full')
}

export const editions: Edition[] = [
    {
        name: 'Václav',
        images: createImageGallery(),
    },
    {
        name: 'Lumír a Čestmír',
        images: createImageGallery(),
    },
    {
        name: 'Kilián',
        images: createImageGallery(),
    },
    {
        name: 'František',
        images: createImageGallery(),
    },
    {
        name: 'Rostislav',
        images: createImageGallery(),

    },

]
