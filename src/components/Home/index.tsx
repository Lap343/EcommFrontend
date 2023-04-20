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
          <ItemCard
            imgSrc="https://i.pinimg.com/236x/51/86/3b/51863b30683212ddc948179c7cfe253f--wooden-drawers-wood-chest.jpg"
            alt="Small wooden drawer"
            title="Wooden Drawer"
            price="$10.00"
          />
          <ItemCard
            imgSrc="https://i5.walmartimages.com/asr/4792bcd5-0d4e-48d6-a37d-6f79c8f1c767.dcb05e40920aad2dcde99a3a53e56d80.jpeg"
            alt="Plushie penguin"
            title="Plushie Penguin"
            price="$100.00"
          />
        </TopSellersItemStyles>
      </SubContentStyles>
    </MainContentStyles>
  );
};

export default HomeContent;
