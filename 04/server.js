const express = require('express');
const app = express(); 


app.get('/',(req,res) =>{
    res.send('Hello World!')
});
app.get('/sobre',(req,res) =>{
    res.send('Thank you for contactt')
})
app.listen(3000, () =>{
    console.log('http://localhost:3000')
    console.log('Servidor is running in port 3000')
});