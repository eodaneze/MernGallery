const {Router} = require('express');
const uploadMiddleware = require('../middleware/MulterMiddleware');

const router = Router();

router.post("/save", uploadMiddleware.single("photo"), (req, res) => {
  const photo = req.file.filename
  console.log(photo);
  uploadModel.create({photo})
  .then((data) => {
    console.log("Uploaded successfully");
    console.log(data);
    res.send(data);
  }).catch(err => console.log(err.message));
})
module.exports = router