const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello")
})

const port = 8081
app.listen(8081)