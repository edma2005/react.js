import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { getUniqueArrayItems } from '../../utils/array'
import styled from 'styled-components'
import ProductCategory from './ProductCategory'

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
    <Container>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory 
          key={category.name} 
          name={category.name} 
          image={category.image[0]}
          />
        ))}
      </ProductContainer>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`