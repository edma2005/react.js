import {
  borderRadius,
  darkGrey,
  lightGrey,
  mainBgColor,
  mediumGrey,
} from "../../const/styles";

import Emoji from "../Emoji/Emoji";
import { GrClose } from "react-icons/gr";
import Modal from "react-modal";
import { PropsWithChildren } from "react";
import styled from "styled-components";

interface StyledModalProps extends PropsWithChildren {
  modalSize: string;
  closeModal?: () => void;
  modalIsOpen: boolean;
  title?: string;
  symbol?: string;
}

const StyledModal = ({
  modalIsOpen,
  modalSize,
  title,
  symbol,
  closeModal,
  children,
}: StyledModalProps) => {
  return (
    <Container
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      modalSize={modalSize}
    >
      <StyledCloseBtn onClick={closeModal} />
      {title ? (
        <Title>
          {title} <Emoji symbol={symbol} />
        </Title>
      ) : null}
      {children}
    </Container>
  );
};

export default StyledModal;

const Container = styled(Modal)<{ modalSize: string }>`
  position: relative;
  min-height: 18rem;
  background-color: ${mainBgColor};
  color: ${mediumGrey};
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${borderRadius};
  border: 1px solid ${lightGrey};
  outline: none;

  ${({ modalSize }) => {
    if (modalSize === "large") {
      return `
      margin: 10vh 10vw;
      padding: 24px 10vw;
      `;
    } else if (modalSize === "medium") {
      return `
      margin: 10vh 20vw;
      padding: 24px 10vw;
      `;
    } else if (modalSize === "small") {
      return `
      margin: 10vh 25vw;
      padding: 24px 5vw;
    `;
    }
  }}
`;

const StyledCloseBtn = styled(GrClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 0.9rem;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-top: 32px;
  color: ${darkGrey};
`;
