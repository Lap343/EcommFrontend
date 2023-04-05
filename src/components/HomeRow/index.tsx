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
  justify-content: space-evenly;
  width: 100vw;
  height: 10vh;
`;

const HomeRow = () => {
  return (
    <HomeRowStyles>
      <BiHomeAlt />
      <BiSearchAlt2 />
      <BiCartAlt />
      <BiInfoCircle />
      <BiUser />
    </HomeRowStyles>
  );
};

export default HomeRow;
