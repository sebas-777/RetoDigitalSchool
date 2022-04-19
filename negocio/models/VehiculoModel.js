// importamos la conexion a la BD 
import db from "../database/db.js";

// importamos sequelize
import { DataTypes } from "sequelize";

const vehiculoModel = db.define('vehiculo',{
    id:{type:DataTypes.INTEGER ,primaryKey: true},
    Nombre_propietario:{type:DataTypes.STRING},
    Marca_vehiculo:{type:DataTypes.STRING},
    Placa_vehiculo:{type:DataTypes.STRING},
    Fecha_ingreso:{type:DataTypes.DATE},
    Fecha_salida:{type:DataTypes.DATE}
}) 

export default vehiculoModel