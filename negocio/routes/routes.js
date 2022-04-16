import express from 'express'
import { createVehiculo, deleteVehiculo, getAllVehiculos, getVehiculos, updateVehiculo } from '../controllers/VehiculoController.js'
const router = express.Router()

router.get('/',getAllVehiculos)
router.get('/:Placa_vehiculo',getVehiculos)
router.post('/',createVehiculo)
router.put('/ :Placa_vehiculo',updateVehiculo)
router.delete('/:Placa_vehiculo',deleteVehiculo)

export default router