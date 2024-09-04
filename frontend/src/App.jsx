import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Pagos from './Pagos'
import Boletos from './Boletos'
import Metodos from './Metodos'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <Routes>
     <Route index path='/' element={<Home/>}/>
     <Route index path='/metododepago' element={<Pagos/>}/>
     <Route index path='/boletos' element={<Boletos/>}/>





     </Routes>
    </>
  )
}

export default App
