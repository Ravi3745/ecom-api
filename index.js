import express from 'express'
import ProductRouter from './src/features/product/product.routes.js'
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

// body parser

app.use(bodyParser.json());

// Product routes

app.use('/api/products', ProductRouter);


app.get('/',(req,res)=>{
    res.send("HI in node app");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})