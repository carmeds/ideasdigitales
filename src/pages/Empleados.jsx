import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"
import { carritoEmp } from "../utils/carritoEmp"
import './../components/Productos.css'

function Empleados() {

    const [listaEmpleados, setListaEmpleados] = useState([])
    const [empleadoSeleccionado, setEmpleadoSeleccionado]=useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "empleados.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaEmpleados(data)
            })
    }

    const leerEmpleadoSeleccionado=(item)=>{
        setEmpleadoSeleccionado(item)
    }

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4">

            {listaEmpleados.map(item =>
                <div className="col"  key={item.idempleado}>
                    <div className="card">
                        <a href="#" onClick={()=>leerEmpleadoSeleccionado(item)} 
                        data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src={ApiWebURL + "fotos/" + item.foto} className="card-img-top" 
                        alt={item.nombres} />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                            <p className="card-text">{item.cargo}</p>
                        </div>
                    </div>
                </div>
            )}

            </div>
        )
    }

    const dibujarModal=()=>{
        return(
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Empleado seleccionado</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-md-6">
                            <img src={ApiWebURL + "fotos/" + empleadoSeleccionado.foto} 
                            alt="foto-empleado" style={{width:'10rem'}}/>
                        </div>
                        <div className="col-md-6">
                            <h3>{empleadoSeleccionado.nombres+' '+empleadoSeleccionado.apellidos}</h3>                
                            <p className="mb-1">Cargo: {empleadoSeleccionado.cargo}</p>
                            <p className="mb-1">Pais: {empleadoSeleccionado.pais}</p>
                            <p className="mb-1">Teléfono: {empleadoSeleccionado.telefono}</p>


                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={()=>{
                            carritoEmp(empleadoSeleccionado)
                        }}
                        >Agregar al Carrito</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id='empleados' className='padded'>
            <div className="container">
                <h2>Empleados</h2>
                {dibujarCuadricula()}
                {dibujarModal()}
            </div>
        </section>
    )
}

export default Empleados