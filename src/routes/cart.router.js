const express = require("express");
const cartManager = require("../../cartManager");
const router = express.Router();

// Middleware para analizar JSON
router.use(express.json());
// Middleware para analizar datos de formularios
router.use(express.urlencoded({ extended: true }));

// Lista los productos que pertenezcan al carrito con el parámetro cid proporcionados
router.get("/:cid", async (req, res) => {
    try {
        const cid = parseInt(req.params.cid);
        const products = await cartManager.searchProductsByID(cid);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error al buscar productos: ", error);
        res.status(500).json({ message: "Error al buscar productos en los carritos" });
    }
});

// Crea un nuevo carrito con la siguiente estructura:
/*
{
    Id : Number/String, (autogenerado, asegurando que no se repetirán los ids en el archivo)
    products: Array que contendrá objetos que representen cada producto
}
*/
router.post("/", (req, res) => {});

// Agrega el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:
/*
    product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
    quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

    Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto. 
*/
router.post("/:cid/product/:pid", (req, res) => {});

module.exports = router;
