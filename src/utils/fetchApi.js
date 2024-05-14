
const getProducts = () => {
    return fetch('https://fakestoreapi.com/products')
    .then((respuesta) => {
        return respuesta.json();
    })

}

const getProductsById = () => {

} 

export { getProducts, getProductsById }