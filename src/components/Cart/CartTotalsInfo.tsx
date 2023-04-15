import styled from "styled-components";

const CartTotalsInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 1.25em;
  border-top: solid 1px #5e5e5e;
  margin-top: 1em;
  padding-top: 1em;
`;

const NumandLetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & div {
    display: flex;
    justify-content: space-between;
    padding: 0.15em 0;
  }
`;

const CheckoutBtn = styled.div`
  background-color: white;
  color: black;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 25px;
  position: relative;
  isolation: isolate;
  padding: 0.5em 2.5em;
  margin: 1em;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: white;
    border: 1px solid black;
    border-radius: 25px;
    z-index: -1;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #e1ff6b;
    border: 1px solid black;
    border-radius: 25px;
    z-index: -1;
    bottom: -5px;
  }
`;

const CartTotalsInfo = () => {
  return (
    <CartTotalsInfoContainer>
      <NumandLetContainer>
        <div>
          <div>Subtotal</div>
          <div>$210.00</div>
        </div>
        <div>
          <div>Shipping</div>
          <div>$25.00</div>
        </div>
        <div>
          <div>Total</div>
          <div>$235.00</div>
        </div>
      </NumandLetContainer>
      <CheckoutBtn>Checkout</CheckoutBtn>
    </CartTotalsInfoContainer>
  );
};

export default CartTotalsInfo;
