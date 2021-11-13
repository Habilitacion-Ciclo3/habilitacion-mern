const mongoose = require('mongoose');

const URI = "mongodb+srv://adminHabilitacion:root@habilishoesdb.czmry.mongodb.net/ProductosDB";


mongoose.connect(URI)
    .then(db => console.log('DB está conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;
    