import history, {Marker, TimelineContainer} from "../data/koprivaldHistory"
import ImageStatLoader from "./ImageStatLoader"

export default class KoprivaldHistoryService {

    constructor(private readonly imageStatLoader: ImageStatLoader) {

    }


    async loadHistory(): Promise<{ timeline: TimelineContainer }> {
        await Promise.all(history.timeline.markers.map((marker) => this.hydrateMarker(marker)))

        return history
    }

    private async hydrateMarker(marker: Marker): Promise<void> {
        let gallery = marker.content.gallery!
        if (!gallery || marker.content.images) {
            return Promise.resolve()
        }

        marker.content.images = await this.imageStatLoader.loadGalleryContent(gallery)
    }
}
