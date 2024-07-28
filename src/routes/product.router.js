const express = require("express");
const productManager = require("../../productManager");
const router = express.Router();

app.use(express.json());

// Lista de todos los productos
router.get('/', (req, res) => {
    try {
        productManager.
        res.status(200).json(products);
    } catch (error) {
        
    }
});

// Muestra el producto con el pid proporcionado
router.get('/:pid', (req, res) => {

});

/* Agrega un nuevo producto con los campos:
{
    id: Number/String, (autogenerado, asegurando que no se repetirán los ids en el archivo)
    title : String,
    description : String,
    code : String,
    price : Number,
    status : Boolean,
    stock : Number
    category : String
    thumbnails : Array de Strings que contengan las rutas donde están almacenadas las imágenes referentes a dicho producto
}
*/
router.post('/', (req, res) => {

});

// Toma un producto y actualiza los campos enviados desde body sin modificar el id
router.put('/:pid', (req, res) => {

});

// Elimina el producto con el pid indicado
router.delete('/:pid', (req, res) => {

});

module.exports = router;