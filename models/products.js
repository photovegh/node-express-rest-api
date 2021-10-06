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
export default getProducts