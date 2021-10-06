import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
//import ruoter from './routes/products.js';
import usersRoutes from './routes/users.js';
import getProducts from './models/products.js';
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/node-express-rest-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection;

app.use(bodyParser.json());
//app.use('/products', ruoter);
app.use('/users', usersRoutes);

app.get('/products', (req, res) => {
    /* res.send('Na szóval. Ha ez ok, akkor Te vagy a CSODÁLATOS!<br>Megerősítem, sőt Te vagy a szupercsodálatos Dragon<br>akit a hátán hordott a Föld. 😋'); */
    /* getProducts((err, products) => {
        if (err) {
            throw err;
        };
        res.json(products)
    }); */
    res.send('<h1>Ez TOTÁLISAN egyenlő<br> a tanfolyam routing-jával!!! 😉');
})

app.listen(PORT, () => {
    console.log(`REST API server is running http://localhost:${PORT}`);
});