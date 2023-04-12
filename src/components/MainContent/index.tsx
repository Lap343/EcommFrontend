import styled from "styled-components";
import { MainHeaderSyles, SubHeaderSyles } from "../componentStyles";
import { ItemCard, MainWelcome } from "../reusable";

const MainContentStyles = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`;

const TopSellersStyles = styled.div`
  width: 85%;
  align-items: start;
`;

const TopSellersItemStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainContent = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>The Hobbs Store</MainHeaderSyles>
      <MainWelcome
        content="
        Welcome to our store! Here we have our crafts and hobbies for sale.
        PLEASE give us your money!"
      />
      <TopSellersStyles>
        <SubHeaderSyles>Top Sellers:</SubHeaderSyles>
        <TopSellersItemStyles>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </TopSellersItemStyles>
      </TopSellersStyles>
    </MainContentStyles>
  );
};

export default MainContent;
