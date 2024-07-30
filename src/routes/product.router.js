const express = require("express");
const productManager = require("../../productManager");
const router = express.Router();

// Middleware para analizar JSON
router.use(express.json());
// Middleware para analizar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Lista de todos los productos
router.get("/", async (req, res) => {
    try {
        const products = await productManager.readData();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al listar productos" });
        console.error("Error al listar productos: ", error);
    }
});

// Muestra el producto con el pid proporcionado
router.get("/:pid", async (req, res) => {
    try {
        const pid = parseInt(req.params.pid);
        const products = await productManager.readData();
        const product = await productManager.searchProductByID(products, pid);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error al buscar producto" });
        console.error("Error al buscar producto: ", error);
    }
});

/* Agrega un nuevo producto con los campos:
{
    id: Number/String, (autogenerado, asegurando que no se repetirán los ids en el archivo)
    title : String,
    description : String,
    code : String,
    price : Number,
    status : Boolean,
    stock : Number,
    category : String,
    thumbnails : Array de Strings (que contengan las rutas donde están almacenadas las imágenes referentes a dicho producto)
}
*/
router.post("/", async (req, res) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;
    console.log(req.body);
    try {
        const newProduct = await productManager.createProduct(title, description, code, price, status, stock, category, thumbnails);
        await productManager.saveProduct(newProduct);
        res.status(201).json({ message: "Producto agregado a la lista de productos satisfactoriamente.", product: newProduct });
    } catch (error) {
        console.error("Error desde router al guardar el producto: ", error)
        res.status(500).json({ error: "Error al agregar el producto" });
    }
});

// Toma un producto y actualiza los campos enviados desde body sin modificar el id
router.put("/:pid", (req, res) => {});

// Elimina el producto con el pid indicado
router.delete("/:pid", (req, res) => {});

module.exports = router;
