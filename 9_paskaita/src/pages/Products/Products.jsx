import styled from 'styled-components'
import Select from 'react-select'
import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { capitalizeFirstLetter } from '../../utils/string'
import { getUniqueArrayItems } from '../../utils/array'
import { screenSize } from '../../consts/mediaQueries'
import { lightBorderColor } from '../../consts/colors'

const Products = () => {
    const {category} = useParams()
    const {products} = useContext(ProductContext)
    const [selectedColors, setSelectedColors] = useState([])
    
    const isCategory = (product) => product.type === category;
    const categoryProducts = products.filter(isCategory) 
    
    const colors = categoryProducts.map(product => product.color)
    const uniqueColors = getUniqueArrayItems(colors)
    const colorOptions = uniqueColors.map(color => ({
      value: color,
      label: capitalizeFirstLetter(color),
    }))
    
    const selectedColorsArray = selectedColors.map(color => color.value)
    const filteredByColorProducts = categoryProducts.filter(product => selectedColorsArray.includes(product.color.toLowerCase()))

    const filteredProducts = filteredByColorProducts.length
    ? filteredByColorProducts
    : categoryProducts

  return (
  <div>
    <FiltersContainer>
      <Filter>
      <Select 
      isMulti 
      name='colors' 
      options={colorOptions}
      value={selectedColors}
      onChange={setSelectedColors}
      />
      </Filter>
    </FiltersContainer>
    <ProductContainer>
      {filteredProducts.map(product => 
      <ProductItem key={product.id}>
        <img src={product.picUrl[0]} alt={product.name}/>
          <ProductProperty>
            {capitalizeFirstLetter(product.name.toLowerCase())}
          </ProductProperty>
          <ProductProperty>
            <p>${product.price}</p>
          </ProductProperty>
      </ProductItem>)}
    </ProductContainer>
  </div>
  )
}

export default Products

const FiltersContainer = styled.div`
  padding: 40px 40px 0 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Filter = styled.div`
  margin-right: 24px;
`

const ProductContainer = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (min-width: ${screenSize.tablet}) and (max-width: ${screenSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${screenSize.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ProductItem = styled.div`
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${lightBorderColor};

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