import ProductModel from "./product.model.js";

class ProductController {

    getAllProducts(req, res) {
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res) {
        const {name,price,sizes} = req.body;
        console.log(req.file.filename)
        const newProduct = {
            name,
            price:parseFloat(price),
            sizes:sizes.split(','),
            imageUrl:req.file.filename
        }

        const newRecord = ProductModel.add(newProduct);
        // 201 resource has been created
        res.status(201).send(newRecord);
    }

    rateProduct(req, res) {

    }

    getOneProduct(req, res) {
       console.log(req.params)
        const {id} = req.params;
        const product = ProductModel.get(Number(id));
        if(!product){
            res.status(404).send("Product not found");
            return;
        }
        
        res.status(200).send(product);
    }

}

export default ProductController;