import styled from "styled-components"
import { searchBarColor } from "../../consts/colors"
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <InputWrapper>
    <AiOutlineSearch/>
    <Input placeholder="Search"/>
    </InputWrapper>
  )
}

export default SearchBar

const InputWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 12px;
    top: 7px;
  }
`

const Input = styled.input`
  background-color: ${searchBarColor};
  border: none;
  outline: none;
  padding: 8px 40px;
  border-radius: 5px;
`