import styled from "styled-components";

const HomeRowStyles = styled.div`
  /* border: solid 1px red; */
  width: 100vw;
  height: 90vh;
`;

const MainContent = () => {
  return (
    <HomeRowStyles>
      <div>Main Content</div>
    </HomeRowStyles>
  );
};

export default MainContent;
