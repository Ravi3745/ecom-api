const express = require('express');

const app = express();
const port = 8000;
app.get('/',(req,res)=>{
    res.send("HI in node app");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})