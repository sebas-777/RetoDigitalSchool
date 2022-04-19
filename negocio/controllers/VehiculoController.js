// importamos el modelo 
import vehiculoModel from "../models/VehiculoModel.js";

// ** metodos para el crud **/

//Mostrar todos los registros 
export const getAllVehiculos = async (req,res)=>{
    try {
       const vehiculos = await vehiculoModel.findAll()
       res.json(vehiculos)
    } catch (error) {
        res.json({message:error.message})
    }
}

//Mostrar un registro 
export const getVehiculos = async (res,req) => {
    try {
      const vehiculo = await vehiculoModel.findAll({
            where:{
                id:req.params.id
            }
        })
        res.json(vehiculo[0])
    } catch (error) {
        res.json({message:error.message})
    }
}

// Crear un registro
export const createVehiculo = async (req,res) => {
    try {
      await  vehiculoModel.create(req.body)
      res.json({ 
        "message":"registro creado correctamente"
      })
    } catch (error) {
        res.json({message:error.message})
    }

}
//Actualizar un registro
export const updateVehiculo = async(req,res) =>{
    try {
       await vehiculoModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({
            "message":"registro actaualizado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}
// Eliminar un registro
export const deleteVehiculo = async (req,res) => {
    try {
        vehiculoModel.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message":"registro eliminado correctamente"
        })
    } catch (error) {
        res.json({message:error.message})
    }
}