import express from 'express';
import routes from "./routes";

const app = express();
const PORT = 8000;

app.use(routes);
app.use(express.static('public'))

app.set('views', 'resources/views');
app.set('view engine', 'pug');


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})
