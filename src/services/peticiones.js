import { API_KEY } from "./apiKey" // Importo la API Key de un archivo ignorado por Git para no exponerla
const BASE_URL = "https://api.rawg.io/api"

// URL para visualizar la respuesta de la API:
// https://api.rawg.io/api/games?key=5a791238addd496797b981071612bdab&ordering=-rating&page_size=10

/**
 * Llama a la API solicitando los 10 juegos con valor `rating` más alto.
 * 
 * @returns array de objetos JSON.
 */
export const fetchPopularGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&ordering=-rating&page_size=10`)
    if (!response.ok) {
      throw new Error(`Error al obtener juegos: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Ocurrió un error al hacer fetch:", error)
    throw error // Propaga el error para manejarlo en otro lugar si es necesario
  }
}

/**
 * Llama a la API solicitando los datos de un juego especificado por su id.
 * 
 * @param {*} id id del juego.
 * @returns JSON con los datos del juego cuyo id se especifica como argumento.
 */
export const fetchGameDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
    if (!response.ok) {
      throw new Error(`Error al obtener detalles del juego: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Ocurrió un error al hacer fetch: ", error)
    throw error
  }
}

/**
 * Llama a la API solicitando todos los juegos.
 * 
 * @returns array de objetos JSON.
 */
export const fetchAllGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}`)
    if (!response.ok) {
      throw new Error(`Error al obtener juegos: ${response.status}`)
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    console.error("Ocurrió un error al hacer fetch: ", error)
    throw error // Propaga el error para manejarlo en otro lugar si es necesario
  }
}

/**
 * Devuelve los juegos de un publisher específico usando el endpoint /api/publishers.
 * 
 * @param {*} publisherName Nombre del publisher.
 * @returns Juegos del publisher específico.
 */
export const fetchGamesByPublisher = async (publisherName) => {
  const response = await fetch(`https://api.rawg.io/api/publishers?key=5a791238addd496797b981071612bdab`);
  if (!response.ok) {
    throw new Error(`Error al obtener publishers: ${response.status}`)
  }
  
  const data = await response.json()
  const publisherData = data.results.find(p => p.name.toLowerCase() === publisherName.toLowerCase())

  if (publisherData) {
    // Obtener detalles de cada juego
    const gamesWithDetails = await Promise.all(publisherData.games.map(async (game) => {
      const gameResponse = await fetch(`https://api.rawg.io/api/games/${game.id}?key=5a791238addd496797b981071612bdab`)
      if (!gameResponse.ok) {
        throw new Error(`Error al obtener detalles del juego: ${game.id}`)
      }
      return await gameResponse.json()
    }))
    
    return gamesWithDetails // Devuelve los juegos con detalles
  } else {
    return [] // Devuelve un array vacío si no se encuentra el publisher
  }
}
