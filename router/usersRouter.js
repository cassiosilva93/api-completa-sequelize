const express = require('express')
const UsersController = require('../controllers/UsersController')
const multerConfig = require("../config/multer");

const router = express.Router()

router.get('/', UsersController.index)
router.post('/', multerConfig.single("avatar"), UsersController.create)


module.exports = router