const { client } = require('../db/config');

const findProducts = async (brandName) => {
    try {
        const db = client.db('27017');
        const collection = db.collection('products');
        return await collection.find(brandName ? {brand: brandName} : {}).toArray();
    } catch (error) {
        throw new Error("Error getting products from the database");
    }
};

module.exports = {
    findProducts
};
