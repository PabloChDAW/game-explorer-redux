// Importa los estilos de TailwindCSS
import './index.css'

import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,  
  Outlet,
} from "react-router"
import AppNavbar from './components/AppNavbar.jsx'
import AppFooter from './components/AppFooter.jsx'
import Principal from './pages/Principal.jsx'
import Buscador from './pages/Buscador.jsx'
import Detalles from './pages/Detalles.jsx'
import JuegosPorTag from './pages/JuegosPorTag.jsx'
import JuegosPorPublisher from './pages/JuegosPorPublisher.jsx'
/* Importa la función loader cambiándole el nombre porque puede haber otros
loader de otros componentes. Es un alias. */
import { loader as gameDetailsLoader } from './pages/Detalles.jsx'

// En Outlet se renderizan las diferentes páginas
// eslint-disable-next-line react-refresh/only-export-components
function AppLayout() {
  return <>
    <AppNavbar />
    <Outlet />
    <AppFooter />
  </>
}

// Rutas
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Principal />,
    },
    {
      path: "/buscador",
      element: <Buscador />,
    },
    {
      path: "/detalles/:id",
      element: <Detalles/>,
      loader: gameDetailsLoader
    },
    {
      path: "/juegos/tag/:tag", // Nueva ruta para juegos por tag
      element: <JuegosPorTag />,
    },
    {
      path: "/juegos/publisher/:publisher", // Nueva ruta para juegos por publisher
      element: <JuegosPorPublisher />,
    },]
  }
])

// RouterProvider permite acceder a más de una página
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
