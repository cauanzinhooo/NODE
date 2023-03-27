const express = require('express');
const app = express();
 
app.get('/', (req,res) =>{
    res.send(` 
    <form action="/" method="POST"> 
     Nome do cliente: <input type="text" name"name">
     <button>Hellooo</button>
     </form>
    `);
});
app.get('/testes/:IDUSER?', (req,res) =>{
    console.log(req.params)
    res.send(req.params)
}) 
app.post('/', (req,res) =>{
    res.send('FORM RECEIVED')
})

app.listen(3000, () =>{
    console.log('Acess http://localhost:3000')
    console.log('Server running')
})