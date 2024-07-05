import CardTutorial from "../components/CardTutorial"
import tuto1 from "./../assets/store/tuto1.jpg"

export default function Tutorial() {
  const card1={
        image:{tuto1},
        title:'Cafee Express',
        description:'Se elabora haciendo pasar agua caliente a presión por granos de café molidos muy finamente en una máquina de café espresso.',
  }
  const card2={
        image:{tuto1},
        title:'Cafee Macchiato',
        description:'Es un café cortado típico de Italia, consiste en un expreso con una pequeña cantidad de leche caliente y espumada. En España se llama café cortado.',
  }
  return (
    <>
    <section className='padded bg-info text-white'>
        <div className="container">
            <h2>Tutoriales</h2>
            <p className="font-weight-bold">
              Consulta la preparación de los diferentes tipos de café en nuestras instalaciones.
            </p>

            <div className='row flex flex-wrap justify-content-center w-full p-2'>
                
                    <CardTutorial pcard={card1} />
                    <CardTutorial pcard={card2} />

            </div>

        </div>
    </section>
    </>
  )
}
