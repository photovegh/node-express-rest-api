import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';

//***** ModelViewController *****/

import productsRoutes from './routes/products.js';
//import productsRoutes from './routes/main.js';
import usersRoutes from './routes/users.js';//***** Na ecsém. Ha az users-szekhez tartozó routingokat akarod használni, (az usersRoutes-t), akkor azt Itt találod! 😉 *****/

import cors from 'cors';
import authMiddleware from './middleware/auth.js';

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/node-express-rest-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection;

app.use(bodyParser.json());
app.use(cors({
    origin: true,
    methods: ['GET, POST'],
    allowedHeaders: ['Content-Type', 'Token']
}));
//Ez egy fv({}) hívás aminek át kell adni egy obektumot, és ebben az objectben tudjuk megadni azokat a paramétereket amivel használni akarjuk a CORS-t. -> leírás a Cors csomag doksijában!!! it az origin bárhonnan elérhető, ha korlátozni szeretném, felsorolom a domaineket, url-eket !!! A Token beállításával érem el, hogy a USER mindik egy token nevezetű headerben küldje el a tokent

app.use(authMiddleware);

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
//***** NEM az app.js-be írom be a GET, PUT, ... method-ú routingokat, hanem ITT mondom meg melyik összekötő importot használja. 😊 *****/
/* app.use(function (req, res, next) {
    res.send('Hello World')
  }) */

app.get('/', (req, res) => {
    res.send('Na szóval. Ha ez ok, akkor Te vagy a CSODÁLATOS!<br>Megerősítem, sőt Te vagy a szupercsodálatos Dragon<br>akit a hátán hordott a Föld. 😋')
})

app.listen(PORT, () => {
    console.log(`REST API server is running http://localhost:${PORT}`);
});