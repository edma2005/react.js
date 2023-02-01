import styled from "styled-components"
import { lightBorderColor } from "../consts/colors"
import SearchBar from '../components/SearchBar/SearchBar'

const Topbar = () => {
  return ( 
  <Container>
    <NavigationItem>
      Categories
    </NavigationItem>
    <SearchBar/>
    <Logo>
      EdmaShop
    </Logo>
  </Container>
  )
}

export default Topbar

const Container = styled.div`
  padding: 6px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBorderColor};
`

const NavigationItem = styled.div`
  font-size: 19px;
`

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
`