const express = require("express");
const router = express.Router();

// Lista los productos que pertenezcan al carrito con el parámetro cid proporcionados
router.get('/:cid', (req, res) => {

});

// Crea un nuevo carrito con la siguiente estructura:
/*
{
    Id : Number/String, (autogenerado, asegurando que no se repetirán los ids en el archivo)
    products: Array que contendrá objetos que representen cada producto
}
*/
router.post('/', (req, res) => {

});

// Agrega el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:
/*
    product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
    quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

    Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto. 
*/
router.post('/:cid/product/:pid', (req, res) => {

});

module.exports = router;