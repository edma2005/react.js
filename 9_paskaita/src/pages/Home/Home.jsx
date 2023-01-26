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
    <div>
      <ProductContainer>
        {categories.map((category) => (
          <ProductCategory key={category.name} name={category.name} image={JSON.parse(category.image)[0]}/>
        ))}
      </ProductContainer>
    </div>
  )
}

export default Home

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fafafa;
  /* background: #ffe259;
  background: -webkit-linear-gradient(to left, #ffa751, #ffe259);
  background: linear-gradient(to left, #ffa751, #ffe259); */
  `