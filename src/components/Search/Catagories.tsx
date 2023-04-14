import styled from "styled-components";
import { SubContentStyles, SubHeaderSyles } from "../componentStyles";

const CatagoriesButtonsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  & div {
    width: 100%;
    padding: 1.5em 0;
    font-weight: bold;
    text-align: center;
    background-color: #262626;
    border: solid black 1px;
    border-radius: 25px;
    margin: 0.5em 0;
  }
`;

const Catagories = () => {
  return (
    <SubContentStyles>
      <SubHeaderSyles>Catagories:</SubHeaderSyles>
      <CatagoriesButtonsContainer>
        <div>Art</div>
        <div>Cards</div>
        <div>Wood</div>
        <div>Other</div>
      </CatagoriesButtonsContainer>
    </SubContentStyles>
  );
};

export default Catagories;
