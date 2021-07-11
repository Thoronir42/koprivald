import {Router} from "express";

import proj from "./proj.json";

const routes = Router();

routes.get('/', (req, res) => {
    res.locals.proj = proj
    res.render('index')
})

export default routes;
