
const products =  [
    {
        "id": 1,
        "name": "Producto 1",
        "description": "Cescription 1",
        "price": 250,
        "stock": 5,
        "category": "survival",
        "image":"/image/logo.jpg"
    },
    {
        "id": 2,
        "name": "Producto 2",
        "description": "Cescription 2",
        "price": 350,
        "stock": 5,
        "category": "survival",
        "image":"/image/logo.jpg"
    }
]

const getProducts = () => {
    return new Promise( (resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(()=>{
        resolve(products)
    },3000);
    })
}
// export default getProducts