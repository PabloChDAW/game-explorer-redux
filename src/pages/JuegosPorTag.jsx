import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import { fetchAllGames } from "../services/service"
import { Card } from "flowbite-react"

const JuegosPorTag = () => {
  const { tag } = useParams() // Obtiene el tag de los parámetros de la URL
  const [games, setGames] = useState([])
  const navigate = useNavigate() // Inicializa useNavigate

  useEffect(() => {
    const loadGamesByTag = async () => {
      try {
        const allGames = await fetchAllGames() // Obtiene todos los juegos
        const filteredGames = allGames.filter(game => 
          game.tags.some(t => t.name.toLowerCase() === tag.toLowerCase())
        )
        setGames(filteredGames)
      } catch (err) {
        console.error("Error al obtener juegos por tag: ", err)
      }
    }

    loadGamesByTag()
  }, [tag])

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-4">Juegos con el tag: <span className="text-blue-600">{tag}</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.length > 0 ? (
          games.map(game => (
            <Card key={game.id} className="max-w-sm mx-auto">
              <img src={game.background_image} alt={game.name} className="h-48 w-full object-cover" />
              <h2 className="text-xl font-semibold text-center mt-2">{game.name}</h2>
              <div className="flex justify-center mb-2">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/detalles/${game.id}`)} // Navega a la página de detalles
                >
                  Ver Detalles
                </button>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-center text-lg">No se encontraron juegos con este tag.</p>
        )}
      </div>
    </div>
  )
}

export default JuegosPorTag
