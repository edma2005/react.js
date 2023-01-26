import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { getUniqueArrayItems } from '../../utils/array'
import styled from 'styled-components'

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: red;
  `
const ProductItem = styled.div`
  width: 15%;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  margin: 16px;
  border-radius: 6px;
  h2 {
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
`

const Home = () => {
  const { products } = useContext(ProductContext)
  const uniqCategories = getUniqueArrayItems(products.map((product) => product.type))

  const categories = uniqCategories.map((category) => ({
    name: category, 
    image: products.find((product) => product.type === category).picUrl,
  }))

  console.log(uniqCategories)
  console.log(categories)
  console.log(products)

  return (
    <div>
      <ProductContainer>
        {categories.map((category) => 
        <ProductItem key={category.name}>
                <h2>{category.name}</h2>
                <img src={JSON.parse(category.image)[0]} alt={category.name}/>
        </ProductItem>)}
      </ProductContainer>
    </div>
  )
}

export default Home