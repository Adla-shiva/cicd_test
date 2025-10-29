const expr=require('express');
const app=expr();

app.get('/',(req,res)=>{
    console.log("local host");
    res.send("hello world");
})

app.listen(8080,()=>{
    console.log("server started");
})