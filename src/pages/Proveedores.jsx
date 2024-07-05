import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"

function Proveedores() {
    const [listaProveedores, setListaProveedores] = useState([])
    const [proveedorSeleccionado, setProveedorSeleccionado]=useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "proveedores.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaProveedores(data)
            })
    }

    const proveedorSel=(item)=>{
        setProveedorSeleccionado(item)
    }

    const dibujarTabla = () => {
        return(
            <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">Acción</th>
                            <th>Código</th>
                            <th>Empresa</th>
                            <th>Contacto</th>
                            <th>Ciudad</th>
                            <th>País</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProveedores.map(item =>
                            <tr key={item.idproveedor}>
                                <td className="d-flex justify-content-center">
                                    <button className="bg-white border border-0 shadow-none"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    onClick={()=>proveedorSel(item)}>
                                        <i className="bi bi-eye-fill"></i>
                                    </button>
                                </td>
                                <td>{item.idproveedor}</td>
                                <td>{item.nombreempresa}</td>
                                <td>{item.nombrecontacto}</td>
                                <td>{item.ciudad}</td>
                                <td>{item.pais}</td>
                            </tr>
                        )}
                    </tbody>
            </table>
        )
    }


    const dibujarModal=()=>{
        return(
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Proveedor seleccionado</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-md-12">
                            <h3>{proveedorSeleccionado.nombreempresa}</h3>                
                            <p className="mb-1">Pais: {proveedorSeleccionado.pais}</p>
                            <p className="mb-1">Ciudad: {proveedorSeleccionado.ciudad}</p>
                            <p className="mb-1">Direccion: {proveedorSeleccionado.direccion}</p>
                            <p className="mb-2">Teléfono: {proveedorSeleccionado.telefono}</p>
                            <p className="mb-1">Contacto: {proveedorSeleccionado.nombrecontacto}</p>
                            <p className="mb-1">Cargo: {proveedorSeleccionado.cargocontacto}</p>

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id='proveedores' className='padded'>
            <div className="container">
                <h2>Proveedores</h2>
                {dibujarTabla()}
                {dibujarModal()}
            </div>
        </section>
    )
}

export default Proveedores