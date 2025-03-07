import { useEffect, useState } from "react"
import { fetchEvents } from '../events'

const Eventos = () => {
  const [events, setEvents] = useState([]) // Estado para almacenar los eventos
  const [loading, setLoading] = useState(true) // Estado de carga
  const [error, setError] = useState(null) // Estado de error

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const fetchedEvents = await fetchEvents() // Llama a la función para obtener eventos
        setEvents(fetchedEvents) // Actualiza el estado con los eventos obtenidos
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Error al cargar eventos") // Manejo de errores
      } finally {
        setLoading(false) // Cambia el estado de carga a false
      }
    }

    loadEvents() // Llama a la función para cargar eventos
  }, [])

  // Manejo de carga y error
  if (loading) {
    return <p>Cargando eventos...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Eventos de Videojuegos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map(event => (
          <div key={event.id} className="border rounded p-4">
            <img src={`/${event.image}`} alt={event.title} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Eventos
