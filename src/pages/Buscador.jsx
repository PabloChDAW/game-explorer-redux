import Tarjeta from "../components/Tarjeta"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router"
import { Pagination } from "flowbite-react"
import { fetchGames } from '../slices/gamesThunks'

const Buscador = () => {
  const dispatch = useDispatch() // Inicializa useDispatch
  const navigate = useNavigate() // Inicializa useNavigate

  // Selecciona el estado de los juegos desde el store
  const { games, loading, error } = useSelector(state => state.games)

  const [searchTerm, setSearchTerm] = useState("") // Guarda la entrada del usuario
  const [currentPage, setCurrentPage] = useState(1) // Página actual
  const [gamesPerPage] = useState(10) // 10 Juegos por página

  useEffect(() => {
    dispatch(fetchGames()) // Despacha la acción para obtener juegos
  }, [dispatch])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
    setCurrentPage(1) // Vuelve a la primera página al buscar
  }

  const handleGameClick = (gameId) => {
    navigate(`/detalles/${gameId}`)
  }

  // Filtra los juegos según el término de búsqueda
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Calcula los índices de los juegos a mostrar en la página actual
  const indexOfLastGame = currentPage * gamesPerPage
  const indexOfFirstGame = indexOfLastGame - gamesPerPage
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame)

  // Cambia de página
  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  // Manejo de carga y error
  if (loading) {
    return <p>Cargando juegos...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Todos los juegos</h1>
      <input
        type="text"
        placeholder="Buscar juego por su nombre"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border rounded p-2 mb-4 w-full"
      />

      <Tarjeta
        games={currentGames} // Pasar solo los juegos de la página actual
        onGameClick={handleGameClick}
      />

      {/* Componente de paginación */}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredGames.length / gamesPerPage)} // Total de páginas basado en los juegos filtrados
          onPageChange={onPageChange}
        />
      </div>
    </div>
  )
}

export default Buscador
