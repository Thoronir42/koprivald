import path from "path"


import KoprivaldHistoryService from "./KoprivaldHistoryService"
import KoprivaldProjectService from "./KoprivaldProjectService"
import ImageStatLoader from "./ImageStatLoader"

const instances: {[name: string]: any} = {}

const getImageStatLoader = (): ImageStatLoader => instances['imageStatLoader'] || (instances['imageStatLoader'] = new ImageStatLoader(path.resolve(__dirname, '../../public')))

export const getHistoryService = (): KoprivaldHistoryService => instances['history'] || (instances['history'] = new KoprivaldHistoryService(getImageStatLoader()))

const createProjectsService = () => new KoprivaldProjectService(getImageStatLoader())
export const getProjectService = (): KoprivaldProjectService => instances['projects'] || (instances['projects'] = createProjectsService())
