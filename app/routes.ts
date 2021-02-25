import {Router} from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index')
})

routes.get('/about-us', (req, res) => {
    res.render('aboutUs')
})

routes.get('/who', (req, res) => {
    res.send('Meeee');
})

export default routes;
