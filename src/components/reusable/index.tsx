import React from "react";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

interface Props {
  content: string;
}

const MainWelcomeSyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
`;

const MainWelcomeContentSyles = styled.div`
  width: 75%;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 4em 1.5em;
  border: 1px solid black;
  border-radius: 25px;
  z-index: 1;
  position: relative;
`;

const AfterMainStyles = styled.div`
  width: 75%;
  height: 8.9em;
  background-color: #e1ff6b;
  position: absolute;
  padding: 2em 1.5em;
  border: solid black 1px;
  border-radius: 25px;
`;

export const MainWelcome: React.FC<Props> = ({ content }) => {
  return (
    <MainWelcomeSyles>
      <MainWelcomeContentSyles>{content}</MainWelcomeContentSyles>
      <AfterMainStyles />
    </MainWelcomeSyles>
  );
};

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
