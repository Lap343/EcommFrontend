import { SubContentStyles, SubHeaderSyles } from "../componentStyles";
import styled from "styled-components";

// TO-DO:
// Create working Price Range slider

const PriceRangeNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5em;
  margin: 0.5em 0;
`;

const PriceRange = () => {
  return (
    <SubContentStyles>
      <SubHeaderSyles>Price Range:</SubHeaderSyles>
      <PriceRangeNumberContainer>
        <div>$20</div>
        <div>$70</div>
      </PriceRangeNumberContainer>
      <hr
        style={{
          backgroundColor: "#414141",
          height: "5px",
          borderRadius: "25px",
        }}
      />
    </SubContentStyles>
  );
};

export default PriceRange;
