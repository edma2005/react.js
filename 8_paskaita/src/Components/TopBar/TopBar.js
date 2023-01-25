import logo from "../TopBar/logo.png";
import { Link } from "react-router-dom";
import {
  Logo,
  LogoContainer,
  LogoText,
  Nav,
  NavItem,
  NavItemList,
} from "./StyledTopBar";
import { MainPageRoute } from "../../Conts/routes";
import DonateButton from "../DonateButton/DonateButton";
import { useEffect, useState } from "react";

const TopBar = () => {
  const [ifDonated, setIfDonated] = useState(false);

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem(`donated`));

    setIfDonated(donation);
  }, []);
  return (
    <Nav>
      <LogoContainer as={Link} to={MainPageRoute}>
        <Logo src={logo} alt="Vet Bee Logo" />
        <LogoText>vetbee</LogoText>
      </LogoContainer>
      <NavItemList>
        {ifDonated && <p>Thank's for your Donation!</p>}
        <NavItem as={Link} to={MainPageRoute}>
          Pets
        </NavItem>
        <NavItem>Medications</NavItem>
        <NavItem>
          <DonateButton />
        </NavItem>
      </NavItemList>
    </Nav>
  );
};

export default TopBar;
