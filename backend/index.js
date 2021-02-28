const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
// const { listenerCount } = require('./model/auto')

const auto = require('./routes/auto') // importar modulo creado

const app = express() //backend mantenerlo arriba. Sobre esta apps se va a crear el backEnd
app.use(cors()) // intermedio entre cliente y server
app.use(express.json()) // va llegar en Json
app.use('/api/auto', auto)

const port = process.env.PORT || 3000 // es un: or

app.listen(port,()=>{console.log('Ejecutando en el puerto: ',port)})

mongoose.connect('mongodb://localhost/autos',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
.then(()=>{  // es para indicarnos el estado de la conexión
    console.log('conexion con mongo: on');
})
.catch((error)=>{  // y resultado de una promesa
    console.log('conexion con mongo: off. ',error);

    `comillas de bloque francesas para documentar
    y las '"comillas dobles dentro de las sencillas"'
   dsdsdsdgd y asi ....`
   
})
  