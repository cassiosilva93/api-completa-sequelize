const multer = require('multer')
const path = require('path')

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderFilePath = path.join(__dirname, '..', 'temp')
    callback(null, folderFilePath)
  },
  filename: (req, file, callback) => {
    const extensionFile = path.extname(file.originalname)
    const finalFilename = `${Date.now()}${extensionFile}`
    callback(null, finalFilename)
  }
})

const fileUpload = multer({ storage: multerStorage })

module.exports = fileUpload
 
