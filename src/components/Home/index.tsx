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
          <ItemCard
            imgSrc="https://news.chapman.edu/wp-content/uploads/2022/09/Angels-Flight-Carlos-Manriquez-740x556.jpg"
            alt="Painting of a city's bridge"
            title="Painting"
            price="$40.00"
          />
          <ItemCard
            imgSrc="https://i.ytimg.com/vi/Lxd80JnvDmo/maxresdefault.jpg"
            alt="Birthday card with and open accordion style. A birthday opens up with the card"
            title="Birthday Card"
            price="$20.00"
          />
        </TopSellersItemStyles>
      </SubContentStyles>
    </MainContentStyles>
  );
};

export default HomeContent;
