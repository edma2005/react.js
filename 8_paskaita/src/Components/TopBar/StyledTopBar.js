import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 5px 100px 0px;
  border-bottom: 1px solid lightgray;
`;

export const NavItemList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const NavItem = styled.li`
  color: #fb8016;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogoText = styled.span`
  color: #fb8016;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
