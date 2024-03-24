const getSpecialPrices = (products, userId, brandName) => {
    return products.filter(product =>
        product.specialPrices &&
        product.specialPrices[userId] &&
        product.specialPrices[userId][brandName]
    );
};

module.exports = {
    getSpecialPrices
};
