const Item = ({ product }) => {
    return (
        <div>
            <img src={product.image} style={{ width: "250px" }} />
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
        </div>
    )
}

export default Item