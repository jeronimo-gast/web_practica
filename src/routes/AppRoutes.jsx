import { Routes, Route } from 'react-router-dom'
import Home from './../pages/HomePage/HomePage'
import Eras from './../pages/ErasPage/ErasPage'
import Games from '../pages/GamesPage/GamesPage'
import Subs from './../pages/SubscriptionPage/SubsPage'
import PlayStationPage from '../pages/PSPage/PSPage'
import XboxPage from '../pages/XboxPage/XboxPage'
import NintendoPage from '../pages/NintendoPage/NintendoPage'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suscripcion" element={<Subs />} />
      <Route path="/juegos" element={<Games />} />
      <Route path="/eras" element={<Eras />} />
      <Route path='/playstation' element={<PlayStationPage/>}/>
      <Route path='/xbox' element={<XboxPage/>}/>
      <Route path='/nintendo' element={<NintendoPage/>}/>

      <Route path="*" element={<h1 className="mt-4">404 — Not Found</h1>} />

    </Routes>
  )
}

export default AppRoutes;


