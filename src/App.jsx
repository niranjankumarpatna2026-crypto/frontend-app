import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Billing from './pages/Billing'
import Subscription from './pages/Subscription'
import BusinessSelect from './pages/BusinessSelect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/business-select' element={<BusinessSelect />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


