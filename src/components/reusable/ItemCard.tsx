import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

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

export const ItemCard: React.FC<Props> = ({ imgSrc, alt, title, price }) => {
  return (
    <ItemCardContainer>
      <ItemImgContainer>
        <ItemImg src={imgSrc} alt={alt} />
        <HeartBtn />
      </ItemImgContainer>
      <div>{title}</div>
      <div>{price}</div>
    </ItemCardContainer>
  );
};
