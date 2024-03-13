const express=require('express');
var app=express();
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server Running Successfully");
});
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/form.html');
});
app.post('/formpost',(req,res)=>{
    if(req.body.uname=="prasad" && req.body.ucity=="rjy")
    {
    res.send(`welcome ${req.body.uname} from ${req.body.ucity}`);
    }
    else{
        res.sendFile(__dirname+'/public/form.html');
    }
    
})