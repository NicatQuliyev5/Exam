import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { FavContext } from "./context/FavContext"
import useLocalStorage from "./hooks/UseLocalStorage"
import { ROUTES } from "./routes/ROUTES"

function App() {
  useEffect(() => {
    setFav(JSON.parse(localStorage.getItem("favs")))
  }, [])

  const [fav, setFav] = useState([])
  const [localFav, setLocalFav] = useLocalStorage([])

  const router = createBrowserRouter(ROUTES)

  return (
    <>
      <FavContext.Provider value={{ fav, setFav, localFav, setLocalFav }}>
        <RouterProvider router={router} />
      </FavContext.Provider>
    </>
  )
}

export default App
