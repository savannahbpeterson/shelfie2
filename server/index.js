const express = require('express');
const bodyParser = require ('body-parser');
const ctrl = require ('./controller')
const app = express();
require('dotenv').config()
const massive = require('massive');

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('database is connected')
})

app.get(`/api/inventory`, ctrl.getInventory)
app.post(`/api/product`, ctrl.addProduct)
app.delete(`/api/product/:id`, ctrl.deleteProduct)


const PORT = process.env.serverPort;
app.listen(PORT, ()=> console.log(`the magic is happening on ${PORT}`))