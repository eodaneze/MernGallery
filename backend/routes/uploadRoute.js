const {Router} = require('express');

const router = Router();

router.post("/save", async(req, res) => {
    res.send("Handling post request")
})
module.exports = router