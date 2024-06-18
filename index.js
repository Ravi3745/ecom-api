import express from 'express'
import ProductRouter from './src/features/product/product.routes.js'
import bodyParser from 'body-parser';
import { UserController } from './src/features/user/user.controller.js';
import UserRouter from './src/features/user/user.routes.js'
const app = express();
const port = 8000;

// body parser

app.use(bodyParser.json());

// Product routes

app.use('/api/products', ProductRouter);
app.use('/api/user',UserRouter);

app.get('/',(req,res)=>{
    res.send("HI in node app");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})