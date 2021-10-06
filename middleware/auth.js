// létrehozok egy constanst, ahol megadom azokat az url-eket, ahol nem akatok autentikációt
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
    res.status(401).send('<h1>Authentication error! A kezedre csapok! 😣</h1> by Sususoft')
};

export default authMiddleware

//******************************** */
//*********** 51 min ************* */
//******************************** */
