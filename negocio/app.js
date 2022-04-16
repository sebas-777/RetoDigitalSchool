import  Express  from "express";
import cors from 'cors'
//importamos la conexion a la BD 
import db from "./database/db.js"; 
//importamos nuestro enrutador
import vehiculosRoutes from './routes/routes.js'

const app = Express()

app.get('/',(req,res) =>{
    res.send('HOLA MUNDO')
})

app.use(cors())
app.use(Express.json())
app.use('/vehiculos',vehiculosRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log('error de conexion es :${error}')
    
}

app.listen(8000,()=>{
    console.log('Server UP running in http://localhost:8000/')
})