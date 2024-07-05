import { useState,useEffect } from "react"
import { ApiWebURL } from "../utils"

export default function Paises() {
  const [listaPaises,setListaPaises]=useState([])
  const [detpais, setDetpais]=useState({
    codpais:'',
    pais:'',
    capital:'',
    area:0,
    poblacion:0,
    continente:'',
  })
  
  useEffect(()=>{
    leerServicio()
  },[])

  const leerServicio=()=>{
    const rutaServicio=ApiWebURL+"paises.php"
    fetch(rutaServicio)
        .then(response =>response.json())
        .then(data =>{
            setListaPaises(data)
        })
  }

  const dibujarTabla = () => {
    return(
        <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>País</th>
                        <th>Capital</th>
                        <th>Área</th>
                        <th>Población</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPaises.map(item =>
                        <tr key={item.idpais}>
                            <td>{item.codpais}</td>
                            <td>{item.pais}</td>
                            <td>{item.capital}</td>
                            <td>{item.area}</td>
                            <td>{item.poblacion}</td>
                        </tr>
                    )}
                </tbody>
        </table>
    )
}

const handlePais=(e)=>{
    let campo=e.target.id
    let valor=e.target.value
    setDetpais({
        ...detpais,
        [campo]:valor
    })
}

const dibujarInsertModal = () => {
    return (
        <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5" id="exampleModalLabel">Agregar Nuevo País</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={(e) => insertPais(e)}>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="codpais">Codigo de Pais:</label>
                                <input type="text" className="form-control" id="codpais" name="codpais" placeholder="Código de País"
                                    required minLength="3" maxLength="3"
                                    value={detpais.codpais} 
                                    onChange={handlePais}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pais">Nombre del País:</label>
                                <input type="text" className="form-control" id="pais" name="pais" placeholder="Nombre del País"
                                    required minLength="1" maxLength="20"
                                    value={detpais.pais} 
                                    onChange={handlePais}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="capital">Capital del País:</label>
                                <input type="text" className="form-control" id="capital" name="capital" placeholder="Capital del País"
                                    required minLength="1" maxLength="20"
                                    value={detpais.capital} 
                                    onChange={handlePais}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="area">Área:</label>
                                <input type="number" className="form-control" id="area" name="area" placeholder="Área"
                                    required 
                                    value={detpais.area} 
                                    onChange={handlePais}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="poblacion">Población:</label>
                                <input type="number" className="form-control" id="poblacion" name="poblacion" placeholder="Población"
                                    required 
                                    value={detpais.poblacion} 
                                    onChange={handlePais}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="continente">Continente:</label>
                                <input type="text" className="form-control" id="continente" name="continente" placeholder="Continente"
                                    required minLength="2" maxLength="2"
                                    value={detpais.continente} 
                                    onChange={handlePais}/>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="submit" className="btn btn-primary">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}



const insertPais=(e)=>{
    e.preventDefault()
    const rutaServicio=ApiWebURL+"paisesinsert.php"

    let formData =new FormData()
    formData.append('codpais',detpais.codpais.toUpperCase())
    formData.append('pais',detpais.pais)
    formData.append('capital',detpais.capital)
    formData.append('area',detpais.area)
    formData.append('poblacion',detpais.poblacion)
    formData.append('continente',detpais.continente.toUpperCase())

    fetch(rutaServicio,{
        method:'post',
        body:formData
    })
    .then(response=>response.text())
    .then(data=>{
        leerServicio()
        setDetpais({
            codpais:'',
            pais:'',
            capital:'',
            area:0,
            poblacion:0,
            continente:'',
        })
        document.querySelector("#insertModal .btn-close").click()
    })

}


  return (
    <section id='paises' className='padded'>
        <div className="container">
            <h2>Listado de Países</h2>
                <div className="mb-3">
                    <button className="btn btn-primary"
                        data-bs-toggle="modal" data-bs-target="#insertModal">
                            Agregar Nuevo País
                    </button>
                </div>
            <hr />
            {dibujarTabla()}
            {dibujarInsertModal()}
        </div>
    </section>
)
}
