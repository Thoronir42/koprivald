import {Router} from "express";
import * as container from "./services/container"

import proj from "./proj.json";

const jsTags = [
    {src: "https://unpkg.com/@popperjs/core@2"},
    {src: "https://unpkg.com/tippy.js@6"},
    {src: "/js/main.js"},
]

const routes = Router();

routes.use((req, res, next) => {
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

    res.locals.jsTags = jsTags
    res.locals.proj = proj
    res.locals.history = await container.getHistoryService().loadHistory()

    res.render('index')
})

routes.get('/t-32021', async (req, res) => {
    res.locals.bodyComponents = []
    res.locals.jsTags = jsTags
    res.locals.proj = proj

    res.locals.editions = await container.getProjectService().loadProject('t-32021')

    res.render('t-32021')
})

export default routes;
