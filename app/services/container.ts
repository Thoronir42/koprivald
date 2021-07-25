import path from "path"


import KoprivaldHistoryService from "./KoprivaldHistoryService"
import KoprivaldProjectService from "./KoprivaldProjectService"
import ImageStatLoader from "./ImageStatLoader"

const instances: {[name: string]: any} = {}

export const getHistoryService = (): KoprivaldHistoryService => instances['history'] || (instances['history'] = new KoprivaldHistoryService())

const createProjectsService = () => new KoprivaldProjectService(new ImageStatLoader(path.resolve(__dirname, '../../public')))
export const getProjectService = (): KoprivaldProjectService => instances['projects'] || (instances['projects'] = createProjectsService())
