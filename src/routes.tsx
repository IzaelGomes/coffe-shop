import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import { Home } from './pages/Home'
import { Order } from './pages/Order'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/order' element={<Order/>} />
    </Routes>
  )
}

export { Routers }
