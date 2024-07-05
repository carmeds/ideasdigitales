export const carritoEmp=(item)=> {
    let micarrito=[]
    if(sessionStorage.getItem('carritoempleados')){
        micarrito=JSON.parse(sessionStorage.getItem('carritoempleados'))
        const itemExiste=micarrito.findIndex((emp)=> emp.idempleado=== item.idempleado)
            if (itemExiste>=0){
                console.log('ya existe')
            }else{
                micarrito=[...micarrito,item]
            }
    }else{
        micarrito=[...micarrito,item]
    }
    sessionStorage.setItem('carritoempleados',JSON.stringify(micarrito))
}
