import styled from "styled-components";
import {
  BiHomeAlt,
  BiSearchAlt2,
  BiCartAlt,
  BiInfoCircle,
  BiUser,
} from "react-icons/bi";

const HomeRowStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 10vh;
  background-color: #262626;
  border-radius: 0px 0px 25px 25px;

  & svg {
    height: auto;
    width: 2em;
    color: #414141;
  }
`;

const HomeRow = () => {
  return (
    <HomeRowStyles>
      <BiHomeAlt style={{ color: "#E1FF6B" }} />
      <BiSearchAlt2 />
      <BiCartAlt />
      <BiInfoCircle />
      <BiUser />
    </HomeRowStyles>
  );
};

export default HomeRow;
