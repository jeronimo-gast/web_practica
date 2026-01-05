import { Routes, Route } from 'react-router-dom'
import Home from './../pages/HomePage/HomePage'
import Eras from './../pages/HomePage/HomePage'
import Consoles from './../pages/HomePage/HomePage'
import Games from './../pages/GamesPage/GamePage'
import Subs from './../pages/SubscriptionPage/SubsPage'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suscripcion" element={<Subs />} />
      <Route path="/juegos" element={<Games />} />

      <Route path="*" element={<h1 className="mt-4">404 — Not Found</h1>} />

    </Routes>
  )
}

export default AppRoutes;


//      <Route path="/eras" element={<Eras />} />
//      <Route path="/consoles" element={<Consoles />} />