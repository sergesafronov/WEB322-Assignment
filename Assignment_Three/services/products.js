
class ProductService {
    constructor(products) {
        this.products = products;
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        return product || null;
    }

    addProduct(newProduct) {
        newProduct.id = this.products.length + 1;
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(id, updatedProduct) {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            this.products[productIndex] = { ...this.products[productIndex], ...updatedProduct };
            return this.products[productIndex];
        }
        return null;
    }

    deleteProduct(id) {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
            return true;
        }
        return false;
    }
}

module.exports = ProductService;
