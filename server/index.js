const express = require('express');
const bodyParser = require ('body-parser');
const ctrl = require ('./controller')
const app = express();
require('dotenv').config()
const massive = require('massive');

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db)
})

app.get(`/api/inventory`, ctrl.getInventory)
app.post(`/api/product`, ctrl.addProduct)



const PORT = process.env.serverPort || 4000;
app.listen(PORT, ()=> console.log(`the magic is happening on ${PORT}`))