import express from 'express';
import {getUsers, getToken } from '../models/users.js';//***** Amikor a getUsers-fv()-nyel szeretnéd megkapni az összes users-t, akkor ehhez a Modelhez fordulj, ahol definiálva van ez a fv() (getUsers), és ami itt található. 😉 az importálandó file-ban NEM default export van !!! -> {} 😋 *****/

const router = express.Router();

//***** Ide dolgozhatod ki az összes users-hez tartozó method szerinti routingot! 😉 *****/

router.get('/', (req, res) => {
    //res.send('Ez már komolyabb routing!!! 😉');
    getUsers((err, users) => {
        if (err) {
            throw err;
        };
        res.json(users);//***** És ITT visszaadom a kedves vendégnek amit kért, a böngészőjébe. 😊😉😋 *****/
    })
});

router.post('/login', (req, res) => {
    const data = req.body;
    getToken(data, (err, user) => {
        if (err) {
            throw err
        }
        if (user) {
            res.json(user)
        } else {
            res.status(400).send('Hát illyet meg hol találsz?')
        }
    })
})
export default router;