import { ButtonContained, ButtonOutlined } from "./StyledButton";

const CustomButton = ({ variant, children, onClick }) => {
  if (variant === "outlined") {
    return <ButtonOutlined onClick={onClick}>{children}</ButtonOutlined>;
  } else {
    return <ButtonContained onClick={onClick}>{children}</ButtonContained>;
  }
};

export default CustomButton;
