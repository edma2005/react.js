import { Popover } from "react-tiny-popover";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useProducts } from "../../hooks/products";
import styled from "styled-components";

const EnhancedSearchBar = () => {
  const [search, setSearch] = useState("");
  const { data } = useProducts;
  const products = data || [].slice(0, 5);

  return (
    <Popover
      isOpen={search}
      positions={["top", "bottom", "left", "right"]}
      content={
        <Container>
          {products.map((product) => {
            <p key={product.id}>{product.name}</p>;
          })}
        </Container>
      }
    >
      <div>
        <SearchBar value={search} setValue={setSearch} />
      </div>
    </Popover>
  );
};

export default EnhancedSearchBar;

const Container = styled.div`
  height: 140px;
  background-color: #ffffff;
  border: 1px solid grey;
  border-radius: 5px;
  padding-right: 8px;
  padding-left: 8px;

  p {
    padding-top: 8px;
  }
`;
