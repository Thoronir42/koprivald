import path from "path"
import imageSize from "image-size"
import {ISizeCalculationResult} from "image-size/dist/types/interface"

import ImageGallery, {GalleryVariant, Image, ImageVariant} from "../utils/ImageGallery"


export default class ImageStatLoader {
    constructor(private rootDir: string) {

    }

    public loadGalleryContent(gallery: ImageGallery): Promise<Image[]> {
        return Promise.all(gallery.images.map((image) => this.loadStats(image, gallery.galleryVariants)))
    }

    public async loadStats(image: Image, variants: GalleryVariant[]): Promise<Image> {
        const variantsStats: { [variant: string]: ImageVariant } = {}

        for (let variant of variants) {
            const imageVariant = await this.loadFileStats(variant.path + image.file)
            if (imageVariant) {
                variantsStats[variant.variant] = imageVariant
            }
        }

        return {
            ...image,
            variants: variantsStats,
        }
    }

    private async loadFileStats(src: string): Promise<ImageVariant | undefined> {
        const fullPath = path.join(this.rootDir, src)
        return new Promise<ISizeCalculationResult>((resolve, reject) => {
            imageSize(fullPath, (e, r) => e ? reject(e) : resolve(r!))
        })
            .then((imgStats) => {
                return {
                    src,
                    height: imgStats.height!,
                    width: imgStats.width!,
                }
            })
    }

}
