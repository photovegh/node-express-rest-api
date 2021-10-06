import mongoose from "mongoose";

let produtsSchema = mongoose.Schema({
    _id: {
        type: Number
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type:String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    stock: {
        type:Number,
        require: true
    }
});

const Products = mongoose.model('Products', produtsSchema);

const getProducts = (callback, limit) => Products.find(callback).limit(limit);

const addPoduct = (data, callback) => {
    //* létrehozom a product-ot a fent Products -> mongoose modellből és ennek átadok egy json objektumot: elöször is egy _id-t. Itt most egy timestampot használok, mert teszthez elég, de használhatnám a MongoDB-nek az alapértelmezett objektum generátorát az _id-khez is. És utána a data-ban érkezett adatokat is hozzáadjuk a PRODUCT objektumhoz */
    /**És végül ráhíjuk a mongoose-nak a SAVE metódusát, hogy elmentsük az adatokat, valamint az exportról se feledkezz meg !!! */

    const product = new Products({
        _id: new Date().getTime(),
        name: data.name,
        category: data.category,
        description: data.description,
        picture: data.picture,
        price: data.price,
        stock: data.stock
    })
    product.save(callback)
}

/** !!!!! szal a save-nál el ne felejtsd a CALLBACK-et átadni, mert baj leszKapsz */

export {addPoduct, getProducts}