import React, { useState } from 'react'

const ItemCount = ({stock}) => {

const [count,setCount] = useState(0)

const restar = () => {
    if( count > 1){
        setCount(  count - 1)
    }else{
        alert ("no se puede")
    }
}
const sumar = ()=>{
    if(count < stock){
        setCount (count + 1)
    }else{
        alert("solo hay 10 productos")
    }

}

const agregarAlCarrito = () => {
console.log(agregarAlCarrito);
}

return (
    <div>
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
        <br />
        <button onClick={agregarAlCarrito}> Agregar Al Carrito</button>
    </div>
  )
}

export default ItemCount