//import { url } from "inspector"; //EZ nemtom hogy a picsába került ide!!! 🤔
import { validateToken } from "../models/users.js";

// létrehozok egy constanst, ahol megadom azokat az url-eket, ahol nem akarok autentikációt
const noAuthResources = {
    GET: ['/products'],
    POST: ['/users/login'],
    PATCH: [],
    DELETE: [],
    PUT: []
};

// létrehozzuk a middleware-t ami három paramétert fog megkapni req, res, next névre hallgató fv()
//next:a middleware-k sorozatában mutatja mi az amit majd meg kell tenni
// az alapbeállítás az ellenőrzéseknél az, hogy legyen minden tiltva igy azt mi adjuk meg, mi az amit nyivánosan elérhetővé akarunk tenni autentikáció nélkül
const authMiddleware = (req, res, next) => {
    if (noAuthResources[req.method].find(url => url == req.url)) {
        return next();
    }

    if(req.headers.token){
        validateToken(req.headers.token, (err, user) => {
            if(err) {
                throw err
            }
            if(user) {
                return next()
            } else {
                res.status(401).send('<h1>Authentication error! Sajnálom, a TOKEN azonosításkor hiba csúszott a számításba! 😣</h1> by Sususoft')
            }
        })
        return
    }
    
    res.status(401).send('<h1>Authentication error! A kezedre csapok! 😣</h1> by Sususoft')
};
//* A "kezedre csapok" üzi-nél totál bezártam az alkalmazást, ki igen, de be nem. Nyissuk ki a kapukat, először azoknak akik nem igényelnek autentikációt, azaz nem kell token. -> első if() ág: ha a noAuthResources{} megfelelő kulcsánál GET:, POST:, ... , ez elérhető számunkra a req.method tulajdonságában, pl.: a GET: method tömbjében megtalálható (find(url)) azaz url amit most kaptunk, akkor menjünk tovább a következő MIDDLEWARE-re *** retunr next();  *** (fogja azt az url-t amit a user meghívott, és megnézi, hogy a szóban forgó metódus tömbjében megtalálható-e)*/
//* Ha viszont olyan url hívtunk meg ami nincs itt felsorolva, akkor elvárjuk, hogy a token szerepeoljen a hívásban, és az helyes legyen. Ahhoz hogy tudjuk, hogy a token helyes vagy nem, a models/users.js file-unkban meg kell valósítani egy token ellenőrző hívást. ( validateToken() ) */

export default authMiddleware

//******************************** */
//*********** 51 min ************* */
//******************************** */
