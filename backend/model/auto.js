// importamos mongoose
const mongoose = require('mongoose')  //  importamos mongoose
const esquemaAuto = new mongoose.Schema({  // define esquema 
  marca: {
      type: String,
      default: "generica",
      // required: true
  },
  modelo: Number,
  color: String,
  precio: Number,
  fechaRegistro:{
     type: Date,
     default: Date.now    
  }
})

// creamos el exports
const Auto = mongoose.model("auto",esquemaAuto)
module.exports = Auto