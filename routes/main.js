import express from 'express';
//import getProducts from '../models/products.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ez már komolyabb routing!!! 😉<br><h1>De ami a lényeg az, hogy SAJÁT! 😋😋😋');
/*     getProducts((err, products) => {
        if (err) {
            throw err;
        };
        res.json(products)
    }) */
});

export default router;