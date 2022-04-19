import express from 'express'
import { createVehiculo, deleteVehiculo, getAllVehiculos, getVehiculos, updateVehiculo } from '../controllers/VehiculoController.js'
const router = express.Router()

router.get('/',getAllVehiculos)
router.get('/:id',getVehiculos)
router.post('/',createVehiculo)
router.put('/ :id',updateVehiculo)
router.delete('/:id',deleteVehiculo)

export default router