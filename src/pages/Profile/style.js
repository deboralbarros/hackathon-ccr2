import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ background }) =>
    background === "empresa"
      ? "rgba(79, 193, 142, 0.22)"
      : background === "jovem"
      ? "rgba(79, 145, 193, 0.22)"
      : "rgba(222, 103, 103, 0.08)"};
  height: 100vh;
  padding-bottom: 50px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 20px 0;
`;

export const Label = styled.label`
  font: 500 24px "IBM Plex Sans";
  color: #767676;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #949494;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
  padding: 25px;
  font-size: 18px;
  color: #cacaca;
`;
