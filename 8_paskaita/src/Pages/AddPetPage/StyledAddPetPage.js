import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 80vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1 = styled.h1`
  margin: 40px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const Row = styled.div`
  display: flex;
  align-items: baseline;
`;
export const Label = styled.label`
  width: 200px;
`;
export const Input = styled.input`
  display: flex;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
