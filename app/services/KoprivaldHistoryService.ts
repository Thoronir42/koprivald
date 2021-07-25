import history from "../data/koprivaldHistory"

export default class KoprivaldHistoryService {
    async loadHistory(): Promise<typeof history> {
        return history
    }
}
