import { useEffect, useState } from "react";
// import getProducts from "../../data/data";
import ItemList from "./ItemList";
import "./ItemListContainer.css"
import { getProducts} from "../../utils/fetchApi";

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
        .then ((data) => setProducts (data))
    
    }, []); 


    return (
        <div>
            <p>{saludo}</p>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer
