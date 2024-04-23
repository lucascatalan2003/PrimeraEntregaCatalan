import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemSaludo from './components/ItemSaludo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <ItemSaludo saludo='Saludar en Pantalla'/>
    </div>
  )
}

export default App
