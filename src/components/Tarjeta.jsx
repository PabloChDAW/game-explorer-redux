/* eslint-disable react/prop-types */
import { Card } from "flowbite-react"

function Tarjeta({ games, onGameClick }) {
  return (
    <div className="flex flex-wrap justify-between">
      {/* Mapea el objeto `games` capturado por la prop `games` creando
      una tarjeta para cada objeto `game` */}
      {games.map((game) => (
        <Card
          key={game.id}
          className="max-w-sm m-2 cursor-pointer"
          imgAlt={game.name}
          imgSrc={game.background_image}
          onClick={() => onGameClick(game.id)} // Captura el clic en la tarjeta
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {game.name}
          </h5>
          
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Puntuación: {game.rating}
          </p>
        </Card>
      ))}
    </div>
  )
}

export default Tarjeta
