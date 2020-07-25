const express=require('express');
 const bodyParser=require('body-parser');

 const app=express();
 app.use(bodyParser.json());

 app.get('/',(req,res,next)=>{

     res.send('Now we are working with Graphql')

 })

 app.listen(3000,()=>{console.log("Server is running on Port 3000")})