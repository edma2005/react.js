import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { brown } from "../Utils/colors";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { size } from "../Utils/breakpoints";
import { useSearch } from "../hooks/products";


const Search = () => {
  const [input, setInput] = useState('')
  const [isHidden, setIsHidden] = useState(true)
  const { data } = useSearch(input);
  const products = (data || []).slice(0,6);
  const searching = (e) => {
    setIsHidden(false)
    setInput(e)
  }
  const left = () => {
    setIsHidden(true)
  }
  return (
    <SearchContainer>
        <FaSearch/>
      <input onChange={(e) => searching(e.target.value) } placeholder="Product search ..." type="text" />
      {!isHidden &&
        <SearchDropDown onMouseLeave={left}
        style={{ display: isHidden && 'none' }}>
        <ul>
           {products.map((item) => (
            <Slink to={`/category/${item.category}/${item.id}`} key={item.id + item.title}>
              <li>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <span>${item.price}</span>
            </li>
            </Slink>
          ))}
        </ul>
      </SearchDropDown>
      }
      </SearchContainer>
  );
}

export default Search;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    position: absolute;
    bottom: 30%;
    left: 4%;
    color: ${brown};
    font-size: 0.9rem;
    padding-right: 5px;
    border-right: 2px solid ${brown};
  }
  input {
    width: 180px;
    border: none;
    background-color: rgba(240, 240, 240, 0.8);
    padding: 7px 0 7px 35px;
    outline: none;
    border-radius: 4px;
    @media (max-width: ${size.mobile}) {
    width: 120px;
  }
  }
 
`

const SearchDropDown = styled.ul`
  position: absolute;
  top: 13px;
  left: 0px;
  width: inherit;
  z-index: 99;
  padding: 0;
  padding-top: 10px;
  background-color: rgba(240, 240, 240, 0.9);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 215px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 300ms ease;
  @media (max-width: ${size.mobile}) {
    width: 155px;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
 

    li {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      border-bottom: 1px solid rgba(240, 240, 240, 0.9);
      border-top: 1px solid rgba(240, 240, 240, 0.9);
      transition: 200ms ease;
        &:hover {
          border-bottom: 1px solid ${brown};
          border-top: 1px solid ${brown};
          p,span {
            color: ${brown};
          }
        }
      p {
        font-size: 0.6rem;
        margin: 0 5px;
        text-transform: capitalize;
      }
      
      span {
        font-size: 0.8rem;
        margin: 0 10px;
      }

      img {
        width: 65px;
        height: 65px;
        object-fit: cover;
        margin: 5px 10px;
        border-radius: 4px;
      }
    @media (max-width: ${size.mobile}) {
        flex-direction: column;
      }
    } 
  }
`

const Slink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`