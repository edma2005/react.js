import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { capitalizeFirstLetter } from '../../utils/string'
import Select from 'react-select'

const Products = () => {
    const {category} = useParams()
    const {products} = useContext(ProductContext)
    const isCategory = (product) => product.type === category;
    const categoryProducts = products.filter(isCategory) 
    console.log(categoryProducts)
    
  return (
  <div>
    <FiltersContainer>
      <Filter>
      <Select isMulti name='colors' options={[]}/>
      </Filter>
      </FiltersContainer>
    <ProductContainer>
      {categoryProducts.map(product => 
      <ProductItem key={product.id}>
        <img src={product.picUrl[0]} alt={product.name}/>
        <ProductProperty>
          {capitalizeFirstLetter(product.name.toLowerCase())}
          <p>${product.price}</p>
          </ProductProperty>
      </ProductItem>)}
    </ProductContainer>
  </div>
  )
}

export default Products

const FiltersContainer = styled.div`
  padding-left: 40px;
  padding-top: 40px;
  padding-right: 60px;
  /* display: flex;
  width: 20%; */
`

const Filter = styled.div`
  width: 250px;
`

const ProductContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ProductItem = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #e7e3e1;

  img {
    flex: 1;
    border-radius: 5px;
    width: 100%;
    object-fit: cover;
  }
`

const ProductProperty = styled.p`
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: 20px;
`