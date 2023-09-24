const {Router} = require('express');
const uploadMiddleware = require('../middleware/MulterMiddleware');

const router = Router();

router.post("/save", uploadMiddleware.single("photo"), (req, res) => {

})
module.exports = router