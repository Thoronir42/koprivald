import {Router} from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.render('index')
})

routes.get('/about-us', (req, res) => {
    res.render('aboutUs')
})

routes.get('/eggs/aj', (req, res) => {
    let params = {
        secretUnlocked: false,
    };
    if (req.query.secret === 'anezka') {
        params.secretUnlocked = true;
    }
    res.render('eggs/aj', params);
})

export default routes;
