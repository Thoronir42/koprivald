import {Router} from "express";

import proj from "./proj.json";
import history from "./data/koprivaldHistory"

const jsTags = [
    {src: "https://unpkg.com/@popperjs/core@2"},
    {src: "https://unpkg.com/tippy.js@6"},
    {src: "/js/main.js"},
]

const routes = Router();

routes.get('/', (req, res) => {
    res.locals.jsTags = jsTags
    res.locals.proj = proj
    res.locals.history = history
    res.render('index')
})

export default routes;
