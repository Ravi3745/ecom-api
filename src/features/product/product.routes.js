

// Manage path to productController

import express from 'express';
import ProductController from './product.controller.js';
import upload from '../../middlewares/fileupload.middleware.js'
// Initialize Express router

const router = express.Router();

const productController = new ProductController();


router.get("/", productController.getAllProducts);
router.post("/",upload.single('imageUrl'),productController.addProduct);
router.get("/:id",productController.getOneProduct);

export default router;