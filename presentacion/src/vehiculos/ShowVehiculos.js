import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/vehiculos/'

const CompShowVehiculos = () =>{
    const [vehiculos, setVehiculo] = useState([])
    useEffect( ()=>{
        getVehiculos()
    },[])

    //procedimiento para mostrar todos los vehiculos
    const getVehiculos = async () => { 
        const res = await axios.get(URI)
        setVehiculo(res.data)
    } 

    //procedimiento para eliminar un vehiculo
    const deleteVehiculos = async(id) => { 
        axios.delete('${URI}${id}')
        getVehiculos()

    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className=' table-primary'>
                            <tr>
                                <th>id</th>
                                <th>Propietario</th>
                                <th>placa</th>
                                <th>Hora de Entrada</th>
                                <th>Hora de Salida</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vehiculos.map ((vehiculo)=>(
                                <tr key={vehiculo.id}>
                                    <td>{vehiculo.Nombre_propietario} </td>
                                    <td>{vehiculo.Placa_vehiculo} </td>
                                    <td>{vehiculo.Fecha_ingreso} </td>
                                    <td>{vehiculo.Fecha_salida} </td>
                                    <td>
                                        <Link to ={'/edit/${vehiculo.id}'}className = "btn btn-info">Edit</Link>
                                        <button onClick={()=>deleteVehiculos(vehiculo.id)} className = 'btn btn-danger'>Delete</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}
export default CompShowVehiculos