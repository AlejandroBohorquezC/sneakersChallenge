const { findProducts } = require('../helpers/findProducts');
const { getSpecialPrices } = require('../helpers/getSpecialPrices');

const getPrices = async (req, res) => {
    const { userId, productName } = req.params;

    try {
        const products = await findProducts(productName);

        if (products.length === 0) {
            return res.status(404).json({ error: "No products found for the specified brand." });
        }

        const { inStock, basePrice, name } = products[0];

        const specialPriceProducts = getSpecialPrices(products, userId, productName);

        const responseProducts = specialPriceProducts.map(product => {
            const specialPrice = product.specialPrices[userId][productName];
            return {
                brand: product.brand,
                name: product.name,
                inStock: product.inStock,
                price: specialPrice
            };
        });

        if (responseProducts.length > 0) {
            res.json(responseProducts);
        } else {
            res.json({
                brand: productName,
                name: name,
                inStock: inStock,
                price: basePrice
            });
        }
    } catch (error) {
        console.error("Error getting prices:", error);
        res.status(500).json({ error: "An error occurred while getting prices." });
    }
};

module.exports = {
    getPrices
};
