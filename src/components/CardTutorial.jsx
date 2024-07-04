
export default function CardTutorial({pcard}) {
    return (
    <div className="col-md-3 p-3 m-2">
      <div className="card" style={{width: '18rem'}}>
          <img src={pcard.image.tuto1} className="card-img-top" alt="tutorial 1" />
          <div className="card-body">
              <h5 className="card-title">{pcard.title}</h5>
              <p className="card-text">{pcard.description}</p>
              <a href="#" className="btn btn-primary">Ir al video</a>
          </div>
      </div>
    </div>
  )
}
