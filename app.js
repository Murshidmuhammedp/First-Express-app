const express = require("express");
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
   res.send("Hello user welcome to express js")
})

app.listen(PORT,()=>{
    console.log(`server started port :${PORT}`);
})