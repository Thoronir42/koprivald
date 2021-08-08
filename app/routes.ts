import {Router} from "express";
import * as container from "./services/container"

import proj from "./proj.json";

const version = Math.floor(Math.random() * 0xFFFFFFFF).toString(16)

const routes = Router();

routes.use((req, res, next) => {
    res.locals.styleSheets = [
        {href: '/css/main.css?v=' + version}
    ]
    res.locals.jsTags = [
        {src: "https://unpkg.com/@popperjs/core@2"},
        {src: "https://unpkg.com/tippy.js@6"},
        {src: "/js/main.js?v=" + version},
    ]

    res.locals.navLinks1 = [
        {target: '/#historie', caption: 'Historie'},
        {target: '/#o-nas', caption: 'O nás'},
    ]
    res.locals.navLinks2 = [
        {target: '/#projekty', caption: 'Tvar č. 32021'},
    ]
    next()
})

routes.get('/', async (req, res) => {
    res.locals.bodyComponents = [
        // 'components/sidenav',
    ]


    res.locals.proj = proj
    res.locals.history = await container.getHistoryService().loadHistory()
    res.locals.timeline = res.locals.history.timeline

    res.render('index')
})

routes.get('/t-32021', async (req, res) => {
    res.locals.bodyComponents = []
    res.locals.proj = proj

    res.locals.editions = await container.getProjectService().loadProject('t-32021')

    res.render('t-32021')
})

export default routes;
