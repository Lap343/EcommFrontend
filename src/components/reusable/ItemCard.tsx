import styled from "styled-components";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const RedHeartBtn = styled(HiHeart)`
  height: 1.75em;
  width: 1.75em;
  color: red;
  background-color: white;
  border-radius: 25px;
  padding: 0.25em;
`;

const RedHeartBtnContainer = styled(motion.div)`
  position: absolute;
  top: 5%;
  right: 5%;
`;

const BlackHeartBtn = styled(HiOutlineHeart)`
  height: 1.75em;
  width: 1.75em;
  color: black;
  background-color: white;
  border-radius: 25px;
  padding: 0.25em;
`;

const BlackHeartBtnContainer = styled(motion.div)`
  position: absolute;
  top: 5%;
  right: 5%;
`;

export const ItemCard: React.FC<Props> = ({ imgSrc, alt, title, price }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <ItemCardContainer>
      <ItemImgContainer>
        <ItemImg src={imgSrc} alt={alt} />
        <AnimatePresence>
          {isFavorited ? (
            <RedHeartBtnContainer
              onClick={() => {
                setIsFavorited(!isFavorited);
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <RedHeartBtn />
            </RedHeartBtnContainer>
          ) : (
            <BlackHeartBtnContainer
              onClick={() => {
                setIsFavorited(!isFavorited);
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <BlackHeartBtn />
            </BlackHeartBtnContainer>
          )}
        </AnimatePresence>
      </ItemImgContainer>
      <div>{title}</div>
      <div>{price}</div>
    </ItemCardContainer>
  );
};
