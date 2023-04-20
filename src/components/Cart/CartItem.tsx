import styled from "styled-components";

interface Props {
  imgSrc: string;
  alt: string;
  title: string;
  price: string;
  quantity: number;
}

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex;
`;

const ItemImg = styled.img`
  width: 6em;
  aspect-ratio: 1/1;
  border-radius: 25px;
  margin: 0.5em;
`;

const ItemInfoContainer = styled.div`
  font-weight: bold;
  padding: 0.5em;
  display: flex;
  flex-flow: column;
  justify-content: start;
`;

const ItemQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  position: relative;
  bottom: 0.7em;
`;

const AddRemoveQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0.5em;
`;

const GreyBtn = styled.div`
  background-color: #414141;
  color: white;
  padding: 0.2em 0.4em;
  line-height: 1em;
  border-radius: 25px;
`;

const WhiteBtn = styled.div`
  background-color: white;
  color: black;
  padding: 0.2em 0.4em;
  line-height: 1em;
  border-radius: 25px;
`;

const RemoveBtn = styled.div`
  background-color: white;
  color: red;
  padding: 0.2em 0.4em;
  line-height: 1em;
  border-radius: 25px;
`;

const CartItem: React.FC<Props> = ({ imgSrc, alt, title, price, quantity }) => {
  return (
    <CartItemContainer>
      <ItemContainer>
        <ItemImg src={imgSrc} alt={alt} />
        <ItemInfoContainer>
          <div>{title}</div>
          <div>{price}</div>
        </ItemInfoContainer>
      </ItemContainer>
      <ItemQuantityContainer>
        <AddRemoveQuantityContainer>
          <GreyBtn>-</GreyBtn>
          <WhiteBtn>{quantity}</WhiteBtn>
          <GreyBtn>+</GreyBtn>
        </AddRemoveQuantityContainer>
        <RemoveBtn>Remove</RemoveBtn>
      </ItemQuantityContainer>
    </CartItemContainer>
  );
};

export default CartItem;
