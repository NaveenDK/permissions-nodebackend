const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello")
})

const port = 8083
app.listen(port,()=>{
    console.log(`A Node Js API is listening on port: ${port}`);
})
