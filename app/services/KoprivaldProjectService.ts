import ImageStatLoader from "./ImageStatLoader"

import * as t32021 from "../data/t32021"

export default class KoprivaldProjectService {
    constructor(private readonly imageStatLoader: ImageStatLoader) {
    }

    public async loadProject(name: string): Promise<any[]> {
        if (name !== 't-32021') {
            return Promise.reject(new Error("error.not-found:project"))
        }

        return Promise.all(t32021.editions.map((edition) => this.loadProjectEdition(edition)))
    }

    private async loadProjectEdition(edition: t32021.Edition) {
        const gallery = edition.images
        const imagePromises = gallery.images
            .map((image) => this.imageStatLoader.loadStats(image, gallery.galleryVariants))

        return {
            name: edition.name,
            images: await Promise.all(imagePromises)
        }
    }
}
