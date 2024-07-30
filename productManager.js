const { type } = require("os");

const fs = require("fs").promises;

const productManager = {
    productsFilePath: "./files/products.txt",

    // Lee la informacion de products.txt y lo parsea de JSON a Objeto
    async readData() {
        try {
            const data = await fs.readFile(this.productsFilePath, "utf8");
            const parsedData = JSON.parse(data);
            return parsedData;
        } catch (error) {
            console.error(`Error al leer datos: ${error}`);
            return 0;
        }
    },

    /* Busca por id dentro de el arreglo de productos pasado por parametro 
    y devuelve el producto con la id pasada por parametro */
    searchProductByID(products, id) {
        const product = products.filter(actualProduct => actualProduct.id === id);
        return product;
    },

    // Devuelve la ultima id de la lista de productos en products.txt
    async lastID() {
        const datos = await this.readData();
        if (datos.length > 0) {
            return datos[datos.length - 1].id;
        } else return 0;
    },

    // Crea un producto nuevo con los parametros dados y lo devuelve
    async createProduct(title, description, code, price, status, stock, category, thumbnails) {
        const pid = parseInt(await this.lastID());
        return {
            id: pid + 1,
            title: title,
            description: description,
            code: code,
            price: price,
            status: status,
            stock: stock,
            category: category,
            thumbnails: thumbnails,
        };
    },

    // Guarda el producto ingresado por parametro en productos.txt
    async saveProduct(product) {
        try {
            const products = await this.readData();
            products.push(product);
            console.log(product);
            await fs.writeFile(this.productsFilePath, JSON.stringify(products, null, 2), 'utf8');
        } catch (error) {
            console.error("Error desde productManager al guardar el producto: ", error);
        }
    },

    async updateProduct(product, productEdits) {
        try {
            // Leer el archivo de productos
            const products = await this.readData();
            products.push(product);
            await fs.writeFile(this.productsFilePath, JSON.stringify(products, null, 2), 'utf8');
        } catch (error) {
            console.error('Error al guardar el producto:', error);
        }
    },
};

module.exports = productManager;
