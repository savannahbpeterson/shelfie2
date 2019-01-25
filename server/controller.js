module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(items => {
            res.status(200).send(items)
        }).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong"})
            console.log(err)})
    },
    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, imgurl} = req.body;
        console.log(name, price, imgurl)
        db.create_product([name, price, imgurl]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong."})
            console.log(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        console.log(params.id);
        db.delete_product(params.id).then(() => {
            res.sendStatus(200)
        }).catch((err) => {
            res.status(500).send({errorMessage: "Something went wrong."})
            console.log(err)
        })
    }
}