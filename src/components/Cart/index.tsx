import styled from "styled-components";
import { MainContentStyles, MainHeaderSyles } from "../componentStyles";
import CartItem from "./CartItem";
import { BiCartAlt } from "react-icons/bi";
import CartTotalsInfo from "./CartTotalsInfo";

const CartHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: end;
  margin-bottom: 1em;

  & div {
    font-weight: bold;
    border-bottom: 1px solid #5e5e5e;
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
      <CartItem
        imgSrc="https://news.chapman.edu/wp-content/uploads/2022/09/Angels-Flight-Carlos-Manriquez-740x556.jpg"
        alt="Painting of a city's bridge"
        title="Painting"
        price="$40.00"
        quantity={1}
      />
      <CartItem
        imgSrc="https://i.ytimg.com/vi/Lxd80JnvDmo/maxresdefault.jpg"
        alt="Birthday card with and open accordion style. A birthday opens up with the card"
        title="Birthday Card"
        price="$20.00"
        quantity={3}
      />
      <CartTotalsInfo />
    </MainContentStyles>
  );
};

export default CartPage;
