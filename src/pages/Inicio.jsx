import Envios from "../home/Envios"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Noticias from "../home/Noticias"
import Tutorial from "../home/Tutorial"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>
            <Tutorial />
            <Noticias/>
            <Envios/>
        </>
    )
}

export default Inicio