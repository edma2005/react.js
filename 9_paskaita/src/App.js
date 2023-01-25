import { useContext } from 'react'
import { ProductContext } from './contexts/ProductContext'
import { getUniqueArrayItems } from './utils/array'
import styled from 'styled-components'

const ProductContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ProductItem = styled.div`
  width: 24%;
  img {
    width: 100%;
  }
`

const App = () => {
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
        <ProductItem key={category.name}>{category.name}
                <img src={JSON.parse(category.image)[0]} alt={category.name}/>
        </ProductItem>)}
      </ProductContainer>
    </div>
  )
}

export default App