import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductContext"
import styled from "styled-components"
import { dollarSymbol } from "../../consts/currency"
import { screenSize } from "../../consts/mediaQueries"
import { capitalizeFirstLetter } from "../../utils/string"
import Button from "../../components/Button/Button"
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../../routes/const'

const Cart = () => {
    const { products } = useContext(ProductContext)

    const cartProducts = products.slice(0,2)

  return (
        <Container>
            <Header>
                <h2>
                    My Bag
                </h2>
                <p>
                    Items are reserved for 30 minutes
                </p>
            </Header>
            <CartContainer>
                {cartProducts.map(product => 
            <CartItem key={product.id}>
                <img src={product.picUrl[0]} alt={product.name}/>
                <div>
            <CartItemPrice>
                {dollarSymbol}
                {product.price}
            </CartItemPrice>
                <p>{product.name}</p>
            <CartItemColor>
                {capitalizeFirstLetter(product.color.toLowerCase())}
            </CartItemColor>
                </div>
            </CartItem>)}
            </CartContainer>
            <ButtonContainer>
            <Button as={Link} to={LOGIN_PATH}>Checkout</Button>
            </ButtonContainer>
        </Container>
  )
}

export default Cart

const Container = styled.div`
    max-width: ${screenSize.tablet};
    margin: 0 auto;
`

const Header = styled.div`
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 6px;
    margin-bottom: 24px;
`

const CartContainer = styled.div`
    background-color: #ffffff;
    margin-bottom: 24px;
`

const CartItem = styled.div`
    display: flex;
    img {
        width: 120px;
        margin-right: 8px;
        object-fit: contain;
    }
`

const CartItemPrice = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 8px;
`

const CartItemColor = styled.p`
    margin-top: 8px;
    font-weight: 300;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`