import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import EjemploContador from './components/Carrito/EjemploContador'
import ItemCount from './components/Examples/ItemCount'


function App() {

  
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo='Saludar en Pantalla'/>
    </div>
  )
}

export default App
