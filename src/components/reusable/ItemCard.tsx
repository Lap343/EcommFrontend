import styled from "styled-components";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useState } from "react";

interface Props {
  imgSrc: string;
  alt: string;
  title: string;
  price: string;
}

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

const BlackHeartBtn = styled(HiOutlineHeart)`
  height: 1.75em;
  width: 1.75em;
  color: black;
  background-color: white;
  border-radius: 25px;
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 0.25em;
`;

const RedHeartBtn = styled(HiHeart)`
  height: 1.75em;
  width: 1.75em;
  color: red;
  background-color: white;
  border-radius: 25px;
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 0.25em;
`;

export const ItemCard: React.FC<Props> = ({ imgSrc, alt, title, price }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <ItemCardContainer>
      <ItemImgContainer>
        <ItemImg src={imgSrc} alt={alt} />
        {isFavorited ? (
          <RedHeartBtn
            onClick={() => {
              setIsFavorited(!isFavorited);
            }}
          />
        ) : (
          <BlackHeartBtn
            onClick={() => {
              setIsFavorited(!isFavorited);
            }}
          />
        )}
      </ItemImgContainer>
      <div>{title}</div>
      <div>{price}</div>
    </ItemCardContainer>
  );
};
