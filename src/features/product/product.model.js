export default class ProductModel{

    constructor(id,name,desc,imageUrl,category,price,sizes){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.imageUrl = imageUrl;
        this.category = category;
        this.price = price;
        this.sizes = sizes;    
    }

   static getAll(){
    return products;
   }

   static add(product){
    product.id =products.length+1;
    products.push(product);
    return product;
   }

   static get(id){
    const product = products.find(i=>i.id===id);
    return product;
   }
  
}
const products =[
    new ProductModel(1,"product 1","description 1","image1.jpg",1,99,["m","L"]),
]

