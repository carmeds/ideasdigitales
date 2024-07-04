import { useEffect,useState } from "react"
import { ApiWebURL } from "../utils"
import { Link } from "react-router-dom"

export default function Pedidos() {
  const [listaPedidos,setListaPedidos]=useState([])

  useEffect(()=>{
    leerServicio()
  },[])

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "pedidos.php"
    fetch(rutaServicio)
        .then(response=>response.json())
        .then(data=>{
            setListaPedidos(data)
        })
  }


  const dibujarTabla=()=>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Accion</th>
                    <th>Fecha</th>
                    <th>Nombres</th>
                    <th>total</th>
                    <th>Usuario</th>
                </tr>
            </thead>
            <tbody>
                {listaPedidos.map(item =>
                    <tr key={item.idpedido}>
                        <td className="d-flex justify-content-center">
                            <Link to={"/detallepedidos/"+item.idpedido}>
                                <button className="btn btn-primary">Ver pedido</button>
                            </Link>
                        </td>
                        <td>{item.fechapedido}</td>
                        <td>{item.nombres}</td>
                        <td>{item.total}</td>
                        <td>{item.usuario}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
  }
  return (
    <>
        <section id='pedidos' className='padded'>
            <div className="container">
                <h2>Listado de pedidos</h2>
                {dibujarTabla()}
            </div>
        </section>
    </>
  )
}
