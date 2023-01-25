import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/TopBar/TopBar";
import { Form, Input, Label, PageContainer, Row, H1 } from "./StyledAddPetPage";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useEffect, useState } from "react";
import { PetsAPI } from "../../Conts/apis";
import { MainPageRoute } from "../../Conts/routes";
import { useNavigate } from "react-router-dom";

const AddPetPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(undefined);
  const [dob, setDob] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [newPet, setNewPet] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name, dob, email)) {
      const addPet = {
        name: name,
        dob: dob,
        client_email: email,
      };

      setNewPet(addPet);
      console.log(newPet);
    }
  };

  useEffect(() => {
    if (newPet) {
      fetch(PetsAPI, {
        method: "POST",
        body: JSON.stringify(newPet),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          navigate(MainPageRoute);
        })
        .catch((error) => console.error(error));
    }
  });

  return (
    <div>
      <TopBar />
      <PageContainer>
        <H1>Add new Pet</H1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Label htmlFor="name">Pets Name: </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Pets Name"
              required
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </Row>
          <Row>
            <Label htmlFor="dob">Date of Birth: </Label>
            <Input
              type="text"
              name="dob"
              id="dob"
              placeholder="Pet's Date of Birth"
              required
              onChange={(e) => setDob(e.target.value)}
            ></Input>
          </Row>
          <Row>
            <Label htmlFor="email">Owner's Email: </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Owner's Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </Row>
          <Row>
            <CustomButton type="submit" variant="contained">
              Add Pet
            </CustomButton>
          </Row>
        </Form>
      </PageContainer>
      <Footer />
    </div>
  );
};

export default AddPetPage;
