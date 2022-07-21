import express from 'express';
import asyncHandler from 'express-async-handler'; 

const router = express.Router();
import Product from '../models/productModel.js'; 


router.get('/', asyncHandler (async(req, res) => {

    const products = await Product.find({});

    res.json(products); 
})); 

router.get('/:id', asyncHandler (async(req, res) => {
    const product = await Product.findById(req.params.id); 
     if (product) { //si el producto existe
        res.json(product); //envia el producto
        
    }else{ //si el producto no existe
        return res.status(404).json({ msg: 'Product not found' }); //envia un mensaje de error
        throw new Error('Product not found'); //lanza un error
    }   

    res.json(product);
}))

export default router; //exporta el router para que sea utilizado en el server.js
