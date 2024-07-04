import slide1 from "./../assets/images/banner1.jpg"
import slide2 from "./../assets/images/banner2.jpg"
import slide3 from "./../assets/images/banner3.jpg"

import store1 from "./../assets/store/cafe1.jpg"
import store2 from "./../assets/store/cafe2.jpg"
import store3 from "./../assets/store/cafe3.jpg"



function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={store1} className="d-block w-100 object-fit-cover" height="600px;" alt="imagen1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Empieza a disfrutar</h5>
                            <p>La mejor diversidad en la preparación de nuestra carta.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={store2} className="d-block w-100 object-fit-cover" height="600px;" alt="imagen2"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Atención Rápida</h5>
                            <p>La mejor comodidad en nuestras instalaciones.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={store3} className="d-block w-100 object-fit-cover" height="600px" alt="imagen3"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Variedad</h5>
                            <p>La mayor diversidad en todo Lima.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Atrás</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    )
}

export default MainBanner