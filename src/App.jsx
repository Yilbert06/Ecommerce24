import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductId from './pages/ProductId'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'

function App() {
const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getAllProductsThunk());
  }, [dispatch])

  return (
    <div className='app'>
      <Header />
      <div className='routes'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/purchases' element={<Purchases/>} />
      </Routes>
      </div>
      
    </div>
  )
}

export default App
