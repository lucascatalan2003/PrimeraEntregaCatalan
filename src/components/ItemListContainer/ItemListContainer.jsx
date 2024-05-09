import { useEffect, useState } from "react";
import getProducts from "../../data/data";
import ItemList from "./ItemList";
import "./ItemListContainer.css"


const ItemListContainer = ({ saludo }) => {

    //condicion true or false
    //const condicion = true 

    // const promesa = () => {
    //     return new Promise( (resolve, reject) => {
    //     //simulamos un retraso de red
    //     setTimeout(()=>{
    //         //si es true:
    //         if (condicion){
    //             resolve("Se resolvio")
    //             //si es false:
    //         }else{
    //             reject("Se rechazo")
    //         }
    //     },3000);
    //     })
    // }

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()   
            .then((respuesta) => {
                setProducts(respuesta);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.log('finalizo la promesa');
            });
    }, []); 

    return (
        <div>
            <p>{saludo}</p>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
