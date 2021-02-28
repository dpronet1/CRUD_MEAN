const express = require('express');
const router = express.Router();

const Auto = require('../model/auto');

router.get('/listaAutos', async(req, res)=>{ //nuestra 1er petición como promesas
    // const autos = await Auto.find({_id:req.body.id})
    const autos = await Auto.find();  //filtrar en mongo id:req.body.id 
    res.send(autos);  // retornar todo lo encontrado en BD
    });

    router.post('/', async(req,res)=>{  // esta petición es de crear registros nuevos
        // if(!req.body.marca){   // haciendo el campo marca obligatorio
        //     return res.status(400).send("no hay marca")
        //}

    const auto = new Auto({
        marca:req.body.marca,
        modelo:req.body.modelo,
        color:req.body.color,
        precio:req.body.precio,
        // cuando se envia crea la fecha x defecto
    })
    const result = await auto.save() // guarda el resultado
    res.status(200).send(result) //code para ver q resonde o cual es el problema
})

router.put('/', async (req,res)=>{ // para  Actualizar comprobar existencia del Id
    const auto = await Auto.findByIdAndUpdate(
        req.body._id,
        {
            marca:req.boldy.marca,
            modelo:req.body.modelo,
            color:req.body.color,
            precio:req.body.precio,
        },
        {
            new: true
        }
    )
    if(!auto){
        res.status(400).send("No encontrado auto en la DB")
    }
    res.status(200).send(auto)
})


router.delete("/:_id", async (req,res)=>{
 
    const auto = await Auto.findByIdAndDelete(req.params._id);
 
    if(!auto){
        res.status(400).send({message:"No hay auto en la DB"})
    }

    // auto = await Auto.findByIdAndDelete(req.params._id);

    res.status(200).send({message:"Auto eliminado"})

})

module.exports = router // exportamos el modulo hecho (direcciones verbos para consumir Apis)

