import { useState, useEffect } from 'react'
import Contador from './Contador'


const EjemploContador = () => {

  // console.log('Se monto o actualizo el componente');

  //hook de estado: useState o variable de estado
  const [contador, setContador] = useState(0)
  const[switchButton, setSwitchButton] = useState(true)
  
  //let contador = 0

  const aumentar = () => {
    setContador (contador + 1)
    // console.log(contador);
  }

//Se ejectu solo al montar el componente

  // useEffect( () => {
  //   const fetchApi = () => {
  //     fetch('https://fakestoreapi.com/products')
  //     .then ( (response)=> response.json() ) 
  //     .then((data) => console.log(data))
  //   }
  
    
  //   fetchApi()
  // }, [])
  
const cambiarToggle = () => {
  setSwitchButton(!switchButton )
}

  const fetchApi = () => {
    fetch('https://fakestoreapi.com/products')
    .then ( (response)=> response.json() ) 
    // .then((data) => console.log(data))
  }
  fetchApi()
  


//EJEMPLOS USEFFECT


//primer, se ejecuta al montar
//ej llamdas a API
//suscripciones a evenListener
useEffect( () => {
  console.log("1er useffect");
}, [] )


//se ejectu en montje y cada vez que contador se actualice
//ej: para realizar acciones especificas cuando una variable cambie 
useEffect( () => {
  console.log("2do useffect");
}, [contador] )

//se ejectu en montje y cada vez que se actualice cualquier estado de mi componente 
//ej: operaciones de monitoreo
useEffect(() => {
  console.log("3er useffect");
})

    return (
    <div>
      <Contador contador={contador} aumentar={aumentar}/>
      <p>Valor de toggle: {switchButton.toString()}</p>
      <button onClick={cambiarToggle}>Cambiar valor toggle</button>
    </div>
  )
}

export default EjemploContador