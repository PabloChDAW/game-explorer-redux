"use client"

import { Navbar } from "flowbite-react"
import { Link } from "react-router" // Para que los enlaces funcionen con React Router

const AppNavbar = () => {
  return (
    <Navbar fluid rounded className="bg-gray-200">
      <Navbar.Brand>
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/sonic-the-hedgehog-1.png"
          alt="sonic-the-hedgehog"
          className="mr-4"
        />
        <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Game Explorer</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/" className="navbar-link">
          <span className="block py-2 pl-3 pr-4 md:p-0">Principal</span>
        </Link>

        <Link to="/buscador" className="navbar-link">
          <span className="block py-2 pl-3 pr-4 md:p-0">Buscador</span>
        </Link>

        <Link to="/eventos" className="navbar-link"> {/* Enlace a la nueva página de eventos */}
          <span className="block py-2 pl-3 pr-4 md:p-0">Eventos</span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavbar
