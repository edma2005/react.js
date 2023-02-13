import { getUniqueArrayItems } from '../../utils/array'
import styled from 'styled-components'
import ProductCategory from './ProductCategory'
import { useTestData } from '../../hooks/test'
import { useProducts } from '../../hooks/products'

const Home = () => {
  const { data, isLoading, error } = useProducts()
  const products = data || []

  const { data: testData, isLoading: testLoading } = useTestData()

  const uniqCategories = getUniqueArrayItems(products.map((product) => product.type))

  const categories = uniqCategories.map((category) => ({
    name: category, 
    image: products.find((product) => product.type === category).picUrl,
  }))

  if (isLoading) {
    return "Kraunasi..."
  }

  if (error) {
    return "Nepavyko gauti produktu"
  }

  console.log(testLoading)
  console.log(testData)

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