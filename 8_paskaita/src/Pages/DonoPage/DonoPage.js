import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { MainPageRoute } from "../../Conts/routes";
import { useContext, useEffect } from "react";
import { DonationContext } from "../../Contexts/DonationContext";

const DonoPage = () => {
  const navigate = useNavigate();
  const { donated, toggleDonation } = useContext(DonationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    localStorage.setItem(`donated`, JSON.stringify(donated));
  }, [donated]);

  useEffect(() => {
    const ifDonated = JSON.parse(localStorage.getItem(`donated`));
    if (ifDonated) {
      navigate(MainPageRoute);
    }
  });

  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        width: `100%`,
        height: "100%",
      }}
    >
      <form
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `50%`,
          height: `50%`,
          gap: `20px`,
          margin: `50px`,
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="dono">How Much you would like to donate?</label>
        <input type="text" name="dono" id="dono" />
        <CustomButton variant="contained" onClick={toggleDonation}>
          Donate!
        </CustomButton>
        <CustomButton
          variant="outlined"
          onClick={() => navigate(MainPageRoute)}
        >
          Go Back!
        </CustomButton>
      </form>
    </div>
  );
};

export default DonoPage;
