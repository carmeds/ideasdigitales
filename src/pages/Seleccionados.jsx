import { useEffect,useState } from "react"
import { ApiWebURL } from "../utils"

export default function Seleccionados() {
  const [listaEmp, setListaEmp]=useState([])

  useEffect(()=>{
    leerStorage()
  },[])

  const leerStorage=()=>{
    const dataEmpleados=JSON.parse(sessionStorage.getItem('carritoempleados'))
    setListaEmp(dataEmpleados)
  }

  const vaciarCarrito=()=>{
    setListaEmp([])
    sessionStorage.removeItem('carritoempleados')
  }

  return (
    <section className='padded'>
        <div className="container">
            <h3>Empleados Seleccionados</h3>
            <button className="btn btn-danger"
            onClick={()=>vaciarCarrito()}>Vaciar Carrito</button>
            <hr />
            <div className="row d-flex flex-wrap justify-content-start">
                {listaEmp.map(item =>
                <div className="col-md-3 m-1" key={item.idempleado}>
                    <div className="card" style={{width:'18rem'}}>
                        <img src={ApiWebURL+ "fotos/" +item.foto} className="card-img-top" alt="imagen empleado"/>
                        <div className="card-body">
                            <p className="text-uppercase font-weight-bold">
                                {item.nombres+' '+item.apellidos}</p>
                            <p className="mb-1">Cargo: {item.cargo}</p>
                            <p className="mb-1">Pais: {item.pais}</p>
                            <p className="mb-1">Teléfono: {item.telefono}</p>

                        </div>
                    </div>
                </div>
                )}
            </div>

        </div>
    </section>

  )
}
