import CustomButton from "../CustomButton/CustomButton";
import { Email, H2, ItemContainer, BtnContainer } from "./StyledItem";
import { PetsAPI } from "../../Conts/conts";
import { useNavigate } from "react-router-dom";

const GridItem = ({ name, date, email, id }) => {
  const navigate = useNavigate();
  const handleDelete = (ItemId) => {
    fetch(`${PetsAPI}/${ItemId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => window.location.reload(false))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ItemContainer>
      <H2>{name}</H2>
      <p>{new Date(date).toLocaleDateString("lt")}</p>
      <Email>{email}</Email>
      <BtnContainer>
        <CustomButton
          variant="contained"
          onClick={() => navigate(`/logs/${name}/${id}`)}
        >
          View Log
        </CustomButton>
        <CustomButton variant="outlined" onClick={() => handleDelete(id)}>
          Delete
        </CustomButton>
      </BtnContainer>
    </ItemContainer>
  );
};

export default GridItem;
