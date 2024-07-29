const fs = require("fs").promises;

const productManager = {

    productsFilePath : "./files/products.txt",

    readData() {
        try {
            const data = fs.readFile(this.productsFilePath, "utf8");
            return data;
        } catch (error) {
            console.error(`Error al leer datos: ${error}`);
            return 0;
        }
    },

    searchProductByID(products, id) {
        const product = products.filter(actualProduct => actualProduct.id === id);
        return product;
    },

    ultimaId() {
        datos = leerDatos();
        if (datos) {
            return datos[datos.length - 1].id;
        } else return 0;
    },



    // Crea un producto nuevo con los parametros dados
    createProduct(title, description, code, price, status, stock, category, thumbnails) {
        return {
            id: ultimaId() + 1,
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

    // Guarda el producto en productos.txt
    async saveProduct(product) {
        try {
            let products = [];
            let currentId = ultimaId() + 1;

            // Verificar si el archivo existe
            try {
                let products = leerDatos();
                if (products.length > 0) {
                    currentId = products[products.length - 1].id + 1;
                }
            } catch (error) {
                console.error(error);
            }

            // Asignar el ID y agregar el nuevo producto
            product.id = currentId;
            products.push(product);

            // Escribir el archivo actualizado
            await fs.writeFile(productsPath, JSON.stringify(products, null, 2), "utf8");
        } catch (error) {
            console.error("Error al guardar el producto:", error);
        }
    },

    async updateProduct(productId, newDetails) {
        try {
            // Leer el archivo de productos
            let products = leerDatos();

            // Buscar el producto por ID
            const productIndex = products.findIndex(product => product.id === productId);
            if (productIndex === -1) {
                console.log(`Producto con ID ${productId} no encontrado.`);
                return;
            }

            // Actualizar los detalles del producto
            const product = products[productIndex];
            for (let key in newDetails) {
                if (product.hasOwnProperty(key)) {
                    product[key] = newDetails[key];
                }
            }

            // Escribir el archivo actualizado
            await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), "utf8");
            console.log(`Producto con ID ${productId} actualizado exitosamente.`);
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    },

    /*  
    Para despues
    // Cambia el estado del producto
    toggleStatus() {
      this.status = !this.status;
    }
  
    // Agrega una miniatura
    addThumbnail(thumbnail) {
      this.thumbnails.push(thumbnail);
    }
  
    // Elimina una miniatura
    removeThumbnail(thumbnail) {
      const index = this.thumbnails.indexOf(thumbnail);
      if (index > -1) {
        this.thumbnails.splice(index, 1);
      }
    } */
};

module.exports = productManager;
