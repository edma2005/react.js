import GridTable from "../../Components/GridTable/GridTable";
import TopBar from "../../Components/TopBar/TopBar";
import { useEffect, useState } from "react";
import { PetsAPI } from "../../Conts/apis";
import {
  H1,
  Header,
  MainPageContentContainer,
  PageContainer,
} from "./StyledMainPage";
import Footer from "../../Components/Footer/Footer";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { AddNewPetRoute } from "../../Conts/routes";

const MainPage = () => {
  const [pets, setPets] = useState(undefined);
  useEffect(() => {
    fetch(PetsAPI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        setPets(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();
  console.log("state", pets);
  return (
    <PageContainer>
      <TopBar />
      <MainPageContentContainer>
        <Header>
          <H1>Pet List</H1>
          <CustomButton
            variant="contained"
            onClick={() => {
              navigate(AddNewPetRoute);
            }}
          >
            Add Pet
          </CustomButton>
        </Header>
        {pets && <GridTable arr={pets} type={"pet"} />}
      </MainPageContentContainer>
      <Footer />
    </PageContainer>
  );
};

export default MainPage;
