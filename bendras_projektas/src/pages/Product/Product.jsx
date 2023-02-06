import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "../../contexts/ProductContext"

const Product = () => {
    const { productId } = useParams()
    const { products } =useContext(ProductContext)

    const product = products.find(product => product.id === Number(productId))

    if(!product) {
        return <div>Loading.....</div>
    }
        return <div>{product.name}</div>
}

export default Product