import express from 'express';
import {addPoduct, getProducts} from '../models/products.js';

const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Ez már komolyabb routing!!! 😉');
    getProducts((err, products) => {
        if (err) {
            throw err;
        };
        res.json(products)
    })
});

router.post('/', (req,res) => {
    const data = req.body //itt szedjük ki az adatokat amit elküldtünk
    //*Majd itt meghívjuk az addProduct()-t, ami megkapja a data-t, és a callback amit használunk megkapja az err és *** product *** paramétert. Ha van hibánk, dobunk egy hibát, ha nem, visszaadjuk a product-ot*/
    /* Az addProduct-ot a modells products.js-be kell implementálni */
    addPoduct(data, (err, product) => {
        if(err) {
            throw err
        }
        res.json(product)
    })
})

export default router;