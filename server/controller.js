module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(products => res.status(200).send(products)).catch(err => {
            res.status(500).send({errorMessage: "It is not working"})
            console.log(err)
        })()
    },
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, imageUrl} = req.body;
        console.log(name, price, imageUrl)
        db.create_product([name, price, imageUrl]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "it is not working"})
            console.log(err)
        })
    }
}