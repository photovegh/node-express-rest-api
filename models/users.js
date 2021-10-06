import mongoose from "mongoose";
import crypto from 'crypto';//***** Ez a HASH-eléshez kell! 😉 *****/

let usersSchema = mongoose.Schema({
    _id: {
        type: Number
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    token: {
        type:String,
        require: true
    }
});//***** (select: false)-ra a válaszba nem kerul be a password kulcs, ne mutogassuk feleslegesen, mégha MD5 kulcsolású HASH-ról van szó, akkor se. 😛 *****/

const Users = mongoose.model('Users', usersSchema);

//***** És végül a lánc végén ITT található az összes users-t lekérő fv() definíciója, ahol is a Users Modell-ből az Users.find(callback) callback-jében lesz az összes JSON sztring. 😋😋😋 *****/
const getUsers = (callback, limit) => Users.find(callback).limit(limit);

const getToken = (data, callback) =>
    {console.log(data.email);
    Users.findOne(
        {
            email: data.email,
            password: crypto.createHash('md5').update(data.password).digest('hex'),
        },
        callback
    );
    console.log("Süsüsoft te csodálatos! 😋");
};

//***** password: crypto.createHash('md5').update(data.password).digest('hex') -> Tranlate: A cripto csomagnak van egy fv()-e ami csinyál egy hash-t, mégpedig (MD5)-öset szeretnék, (sztem van SHA is, 512 a csúcs, de a bitcoin is csak az SHA-256-ot használnak), az .update-val megmondom, hogy a body-ban kapott data.password-öt frissítse, és ezt az egész hóbeleblancot alakítsa hex számmá. 😉 *****/



export { getUsers, getToken};//***** Ha nem egy, default az export, hanem több, akkor a felsorolást {} KAPCSOSZÁRÓJEL-ek közé kell tenni. 😁😁 és a hívó file iportjának a szintaktikáját se felejtsd el átírni 😁 *****/



/***** A hash.digest () metódus a titkosító modul Hash osztályának beépített függvénye . Ezzel létrehozható a kivonat létrehozásakor átadott adatok kivonata. Például, amikor létrehozunk egy kivonatot, először létrehozzuk a Hash egy példányát a crypto.createHash () használatával, majd frissítjük a kivonat tartalmát az update () függvénnyel, de eddig nem kaptuk meg a kapott kivonatértéket. hash értékét a Hash osztály által kínált kivonatolási függvényhez használjuk.
Ez a függvény egy karakterláncot használ bemenetként, amely meghatározza a visszatérő érték típusát , például hex vagy base64 . Ha elhagyja ezt a mezőt, puffert kap . *****/