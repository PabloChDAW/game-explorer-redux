// src/events.js
// Añade o modifica los eventos al gusto
// Las imágenes pueden ser las que tengas en la carpeta public
export const events = [
  {
    id: 1,
    title: "Gaming Expo 2025",
    location: "New York",
    image: "evento.jpg",
  },
  {
    id: 2,
    title: "Indie Game Developers Meetup",
    location: "San Francisco",
    image: "evento.jpg",
  },
  {
    id: 3,
    title: "Esports Championship",
    location: "Los Angeles",
    image: "evento.jpg",
  },
];

// Simula una petición API que devuelve los eventos después de un pequeño retraso.
export const fetchEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 500); // Simula un retraso de 500 milisegundos
  });
};
