const fs = require("fs").promises;

const cartManager = {
    cartFilePath: "./files/carts.txt",

    // Lee la informacion de carts.txt y lo parsea de JSON a Objeto
    async readCartData() {
        try {
            const data = await fs.readFile(this.cartFilePath, "utf8");
            const parsedData = JSON.parse(data);
            return parsedData;
        } catch (error) {
            console.error(`Error al leer datos: ${error}`);
            return [];
        }
    },

    /* Busca por id dentro de los carritos de carts.txt 
    y devuelve los productos del carrito con el id pasado por parametro */
    async searchProductsByID(id) {
        const cart = await this.readCartData();
        const cartProducts = cart.filter(actualProduct => actualProduct.Id === parseInt(id));
        const products = cartProducts[0].products;
        return products;
    },
};

module.exports = cartManager;
