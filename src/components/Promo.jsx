function Promo() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Descubre el mundo de los videojuegos</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">Todo lo que necesitas sobre el mundo de los videojuegos</p>
            <p className="mt-6 text-lg/8 text-gray-600">En esta web encontrarás toda la información actualizada sobre el apasionante mundo de los videojuegos, para todas las plataformas y con todos los detalles.</p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <img width="35" height="35" src="https://img.icons8.com/material-outlined/24/google-web-search.png" alt="google-web-search"/>
                  </div>
                  Buscador de juegos
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">Busca cualquier videojuego de cualquier plataforma escribiendo su nombre en el buscador. Podrás filtrar en tiempo real entre todos los videojuegos disponibles.</dd>
              </div>

              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/controller.png" alt="controller"/>
                  </div>
                  Detalles de cada juego
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">Haz click en uno de los videojuegos y tendrás acceso a todos los detalles, como las plataformas para las que ha sido lanzado, su fecha de lanzamiento oficial y su puntuación.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
