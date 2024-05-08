import getProcucts from "../../data/data";
import { useEffect,useState } from "react";
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

    const [ products,setProducts ] = useState([])

    useEffect(()=>{

        getProcucts()
            .then((respuesta)=>{
                console.log(respuesta);
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                console.log('finalizo la promesa');
            });
    }, []);



    return (
        <div>
        <p>{saludo}</p>
        {
            JSON.map((jsons)=>(
                <div>
                    <p>{jsons.name}</p>
                </div>
            ))
        }
        </div>
    )
}

export default ItemListContainer
   