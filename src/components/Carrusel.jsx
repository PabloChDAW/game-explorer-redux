"use client"

import { useState, useEffect } from "react"
import { Carousel } from "flowbite-react"
import { fetchPopularGames } from "../services/peticiones"

function Carrusel() {
  const [games, setGames] = useState([])

  useEffect(() => {
    const loadPopularGames = async () => {
      try {
        const popularGames = await fetchPopularGames()
        console.log(popularGames) // Muestra los datos recibidos en consola
        setGames(popularGames)
      } catch (err) {
        console.error("Error al ejecutar fetchPopularGames(): ", err)
      }
    }

    loadPopularGames()
  }, [])

  return (
    <div className="h-auto sm:h-[500px] xl:h-[540px] 2xl:h-[600px]">
      <Carousel>
        {/* Mapea el objeto `games` capturado por fetchPopularGames() */}
        {games.map((game) => (
          <div
            key={game.id}
            className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="object-cover w-full h-full"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-lg font-bold">{game.name}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Carrusel
