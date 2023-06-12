const express = require('express');
const app = express();

app.use(express.json());

app.get('/tshirt', (req,res)=>{
    res.status(200).send({
        tshirt: '👕',
        size: 'Large'
    })
});

app.post('/tshirt/:id',(req,res)=>{
    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){
        res.status(418).send({message: "we need a logo!"})
    }

    res.send({tshirt: `👕 with your ${logo} and ID is ${id}`});
})
const PORT = 8080;

app.listen(PORT,()=>console.log(`App is running on http://localhost:${8080}`))