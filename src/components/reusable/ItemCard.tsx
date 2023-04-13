import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

const ItemCardContainer = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-weight: bold;
  margin: 0.5em;
`;

const ItemImgContainer = styled.div`
  position: relative;
`;

const ItemImg = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 25px;
`;

const HeartBtn = styled(BiHeart)`
  height: 1.75em;
  width: 1.75em;
  color: black;
  background-color: white;
  border-radius: 25px;
  position: absolute;
  top: 5%;
  right: 5%;
`;

export const ItemCard = () => {
  return (
    <ItemCardContainer>
      <ItemImgContainer>
        <ItemImg
          src="https://news.chapman.edu/wp-content/uploads/2022/09/Angels-Flight-Carlos-Manriquez-740x556.jpg"
          alt="painting of a city's bridge"
        />
        <HeartBtn />
      </ItemImgContainer>
      <div>Painting</div>
      <div>$40.00</div>
    </ItemCardContainer>
  );
};
