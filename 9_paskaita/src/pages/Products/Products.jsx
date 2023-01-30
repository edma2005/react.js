import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { capitalizeFirstLetter } from '../../utils/string'
const Products = () => {
    const {category} = useParams()
    const {products} = useContext(ProductContext)
    const isCategory = (product) => product.type === category;
    const categoryProducts = products.filter(isCategory) 
    console.log(categoryProducts)
    
  return (
    <ProductContainer>
      {categoryProducts.map(product => 
      <ProductItem key={product.id}>
        <img src={product.picUrl[0]} alt={product.name}/>
        <ProductName>
          {capitalizeFirstLetter(product.name.toLowerCase())}
          </ProductName>
      </ProductItem>)}
    </ProductContainer>
  )
}

export default Products

const ProductContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ProductItem = styled.div`
  margin: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  img {
    flex: 1;
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
  }
`

const ProductName = styled.p`
  margin: 0;
`