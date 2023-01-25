import styled from "styled-components";

export const ButtonOutlined = styled.button`
  text-transform: uppercase;
  height: 35px;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms;
  font-weight: 500;
  background-color: white;
  color: #fb8016;
  border: 1px solid #fb8016;
  &:hover {
    background-color: #ede7f6;
  }
`;

export const ButtonContained = styled.button`
  text-transform: uppercase;
  height: 35px;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: 300ms;
  font-weight: 500;
  background-color: #fb8016;
  color: white;
  &:hover {
    background-color: #af6200;
  }
`;
