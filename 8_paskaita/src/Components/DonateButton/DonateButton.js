import { useNavigate } from "react-router-dom";
import { DonoPageRoute } from "../../Conts/routes";
import CustomButton from "../CustomButton/CustomButton";

const DonateButton = () => {
  const navigate = useNavigate();
  // const { donated, toggleDonation } = useContext(DonationContext);
  // console.log(donated);

  // const [modalIsOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };
  // const closeModal = () => {
  //   setIsOpen(false);
  // };
  return (
    <div>
      <CustomButton variant="contained" onClick={() => navigate(DonoPageRoute)}>
        Donate!
      </CustomButton>
    </div>
  );
};

export default DonateButton;
