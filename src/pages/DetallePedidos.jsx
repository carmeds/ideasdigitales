import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ApiWebURL } from "../utils"

export default function DetallePedidos() {
  const params=useParams()
  
    const [productosPedido, setProductosPedido]=useState([])

    useEffect( ()=>{
        leerServicio()
    },[])
    const leerServicio=()=>{
        const rutaServicio=ApiWebURL+
        'pedidosdetalle.php?idpedido='+params.idpedido
        fetch(rutaServicio)
            .then(response=>response.json())
            .then(data =>{
                setProductosPedido(data)
            })
    }
  return (
    <section className='padded'>
        <div className="container">
            <h3>Productos del pedido {params.idpedido}</h3>
            <div className="row d-flex flex-wrap justify-content-start">
                {productosPedido.map(item =>
                <div className="col-md-3 m-1" key={item.idproducto}>
                    <div className="card" style={{width:'18rem'}}>
                        <img src={ApiWebURL+item.imagenchica} className="card-img-top" alt="imagen producto"/>
                        <div className="card-body">
                            <p className="text-uppercase font-weight-bold">
                                {item.nombre}</p>
                            <p className="mb-1">Precio: s/.{parseFloat(item.precio).toFixed(2)}</p>
                            <p className="mb-1">Cantidad: {item.cantidad}</p>
                            <p className="mb-1">Detalle: {item.detalle}</p>

                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    </section>
    
  )
}
