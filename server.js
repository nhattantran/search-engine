import Express from "express"
import SearchRouter from './router/Search.router.js'

const app = Express();

app.use(Express.json())
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Connected to server port: ${port}`);
})

app.get('/heath', (req, res, next) => { res.send({ message: 'Hello world' })})
app.use('/', SearchRouter)