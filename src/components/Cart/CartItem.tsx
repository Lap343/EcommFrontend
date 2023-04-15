import styled from "styled-components";

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

const CartItem = () => {
  return (
    <CartItemContainer>
      <ItemContainer>
        <ItemImg
          src="https://news.chapman.edu/wp-content/uploads/2022/09/Angels-Flight-Carlos-Manriquez-740x556.jpg"
          alt="painting of a city's bridge"
        />
        <ItemInfoContainer>
          <div>Painting</div>
          <div>$40.00</div>
        </ItemInfoContainer>
      </ItemContainer>
      <ItemQuantityContainer>
        <AddRemoveQuantityContainer>
          <GreyBtn>-</GreyBtn>
          <WhiteBtn>1</WhiteBtn>
          <GreyBtn>+</GreyBtn>
        </AddRemoveQuantityContainer>
        <RemoveBtn>Remove</RemoveBtn>
      </ItemQuantityContainer>
    </CartItemContainer>
  );
};

export default CartItem;
