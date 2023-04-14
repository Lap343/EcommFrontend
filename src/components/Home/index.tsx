import styled from "styled-components";
import {
  MainContentStyles,
  MainHeaderSyles,
  SubHeaderSyles,
  SubContentStyles,
} from "../componentStyles";
import { ItemCard, MainWelcome } from "../reusable";

const TopSellersItemStyles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const HomeContent = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>The Hobbs Store</MainHeaderSyles>
      <MainWelcome
        content="
        Welcome to our store! Here we have our crafts and hobbies for sale.
        PLEASE give us your money!"
      />
      <SubContentStyles>
        <SubHeaderSyles>Top Sellers:</SubHeaderSyles>
        <TopSellersItemStyles>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </TopSellersItemStyles>
      </SubContentStyles>
    </MainContentStyles>
  );
};

export default HomeContent;
