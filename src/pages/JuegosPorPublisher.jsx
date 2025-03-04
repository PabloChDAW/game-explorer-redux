import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router" // Importa useNavigate
import { fetchGamesByPublisher } from "../services/service" // Importa la nueva función
import { Card } from "flowbite-react"

const JuegosPorPublisher = () => {
  const { publisher } = useParams() // Obtiene el publisher de los parámetros de la URL
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true) // Estado de carga
  const [error, setError] = useState(null) // Estado de error
  const navigate = useNavigate() // Inicializa useNavigate

  useEffect(() => {
    const loadGamesByPublisher = async () => {
      try {
        const gamesList = await fetchGamesByPublisher(publisher) // Llama a la función para obtener juegos por publisher
        console.log("Juegos obtenidos:", gamesList) // Muestra los juegos obtenidos
        gamesList.forEach(game => {
          console.log("Imagen del juego:", game.background_image); // Muestra la URL de la imagen
        })
        setGames(gamesList) // Actualiza el estado con los juegos filtrados
      } catch (err) {
        console.error("Error al obtener juegos por publisher: ", err)
        setError(err.message) // Actualiza el estado de error
      } finally {
        setLoading(false) // Cambia el estado de carga a false
      }
    }

    loadGamesByPublisher()
  }, [publisher])

  if (loading) {
    return <p>Cargando juegos...</p> // Mensaje de carga
  }

  if (error) {
    return <p>{error}</p> // Mensaje de error
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-4">Juegos con el publisher: <span className="text-blue-600">{publisher}</span></h1>
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
          <p className="text-center text-lg">No se encontraron juegos con este publisher.</p>
        )}
      </div>
    </div>
  )
}

export default JuegosPorPublisher
