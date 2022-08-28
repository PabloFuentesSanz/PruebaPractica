//DB Connection
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:root@cluster0.rnwrco3.mongodb.net/pruebaPractica?retryWrites=true&w=majority').then(
    db => console.log('DB is connected')
).catch(err => console.error(err))

module.exports = mongoose;