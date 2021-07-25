export type Image = {
    file: string,
    alt: string,

    variants?: {
        [name: string]: ImageVariant,
    },
}
export type ImageVariant = {
    src: string,
    width: number,
    height: number,
}

export type GalleryVariant = {
    path: string,
    variant: string,
}

export default class ImageGallery {
    public readonly images: Image[]
    public readonly galleryVariants: GalleryVariant[] = []

    private populated: boolean = false

    constructor(images: Image[]) {
        this.images = images
    }

    public addVariant(path: string, variant: string = 'default'): this {
        this.galleryVariants.push({path, variant})
        return this
    }
}
