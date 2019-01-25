module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.getInventory().then(products => res.status(200).send(products))
    }
}