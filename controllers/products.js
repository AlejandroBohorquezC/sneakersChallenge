const { client } = require('../db/config');
const { findProducts } = require('../helpers/findProducts');

const getProducts = async (req, res) => {

    // const db = client.db('27017');
    // const collection = db.collection('products');

    // const products = await collection.find({}).toArray();
    const products = await findProducts();
    res.json({
        products
    })
};


module.exports = {
    getProducts,
};