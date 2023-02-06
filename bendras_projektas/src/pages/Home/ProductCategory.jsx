import styled from "styled-components"
import { useNavigate, generatePath } from 'react-router-dom'
import { PRODUCT_LIST_PATH } from "../../routes/const"

const ProductCategory = ({name, image}) => {
  const navigate = useNavigate()
  const productPath = generatePath(PRODUCT_LIST_PATH, { category: name })

  return (
    <ProductItem onClick={() => navigate(productPath) }>
      <div>
        <p>{name}</p>
        <span>13</span>
      </div>
      <img src={image} alt={name}/>
    </ProductItem>
  )
}

export default ProductCategory

const ProductItem = styled.div`
  width: 20%;
  text-transform: uppercase;
  background-color: white;
  margin: 16px;
  border-radius: 6px;
  border: 2px solid #ededed;
  /* transition: transform 0.5s ease-in-out; */

  &:hover {
    cursor: pointer;
    /* transform: scale(1.05); */
  }

div {
  display: flex;
  justify-content: space-between;
  padding: 16px;

  p {
    margin: 0;
    font-weight: 600;
  }
}

  img {
    width: 100%;
  }
`