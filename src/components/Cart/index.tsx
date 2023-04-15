import styled from "styled-components";
import { MainContentStyles, MainHeaderSyles } from "../componentStyles";
import CartItem from "./CartItem";
import { BiCartAlt } from "react-icons/bi";

const CartHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: end;
  margin-bottom: 1em;

  & div {
    font-weight: bold;
    border-bottom: 1px solid gray;
    padding: 0.2em;
  }
`;

const CartPage = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>
        <BiCartAlt />
        My Cart
      </MainHeaderSyles>
      <CartHeader>
        <div>Quantity</div>
      </CartHeader>
      <CartItem />
      <CartItem />
    </MainContentStyles>
  );
};

export default CartPage;
