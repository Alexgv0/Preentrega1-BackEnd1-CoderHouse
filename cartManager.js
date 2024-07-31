const fs = require("fs").promises;

const cartManager = {
    cartsFilePath: "./files/carts.txt",

    // Lee la informacion de carts.txt y lo parsea de JSON a Objeto
    async readCartsData() {
        try {
            const data = await fs.readFile(this.cartsFilePath, "utf8");
            const parsedData = JSON.parse(data);
            return parsedData;
        } catch (error) {
            console.error("Error al leer datos de carrito: ", error);
            return [];
        }
    },

    /* Busca por id dentro de los carritos de carts.txt 
    y devuelve los productos del carrito con el id pasado por parametro */
    async searchProductsByID(id) {
        try {
            const cart = await this.readCartsData();
            const cartProducts = cart.filter(actualProduct => actualProduct.Id === parseInt(id));
            const products = cartProducts[0].products;
            return products;
        } catch (error) {
            console.error("Error al buscar productos por id de carrito: ", error);
        }
    },

    // Devuelve el ultimo id de la lista de carritos en carts.txt
    async lastCartID() {
        try {
            const datos = await this.readCartsData();
            console.log(datos);
            if (datos.length > 0) {
                return datos[datos.length - 1].Id;
            } else {
                console.error("No hay carritos");
                return 0;
            }
        } catch (error) {
            console.error("Error al buscar el ultimo id: ", error);
        }
    },

    // Crea un carrito nuevo con los parametros dados y lo devuelve
    async createCart(body) {
        try {
            const products = body.products;
            const Id = await this.lastCartID() + 1;
            const newCart = {
                Id : Id,
                products : products
            };
            console.log(newCart);
            return newCart;
        } catch (error) {
            console.error("Error al crear carrito: ", error);
        } 
    },

    // Devuelve los carritos de carts.txt con el carrito (cart) pasado por parametro agregado
    async addCart(cart) {
        try {
            const carts = await this.readCartsData();
            carts.push(cart);
            return carts;
        } catch (error) {
            return console.error("Error agregando cart a carts: ", error)
        }
    },

    // Guarda los cambios de carts (pasado por parametro) en carts.txt
    async saveCarts(carts) {
        try {
            await fs.writeFile(this.cartsFilePath, JSON.stringify(carts, null, 2), 'utf8');
        } catch (error) {
            console.error("Error desde productManager al guardar los productos: ", error);
        }
    },
};

module.exports = cartManager;
