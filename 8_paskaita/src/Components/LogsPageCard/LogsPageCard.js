import React from "react";
import { H2, ItemContainer } from "./StyledLogsPageCard";

const LogsPageCard = ({ status, description, med }) => {
  return (
    <ItemContainer>
      <H2>Status{status && status}</H2>
      <p>{description && description}</p>
      <p>{med && med}</p>
    </ItemContainer>
  );
};

export default LogsPageCard;
