import Carrusel from "../components/Carrusel"
import Promo from "../components/Promo"

const Principal = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Juegos Populares</h1>
      <Carrusel />
      <Promo />
    </div>
  )
}

export default Principal
