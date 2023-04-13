import styled from "styled-components";
import { Link } from "react-router-dom";
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
  position: fixed;
  bottom: 0;

  & svg {
    height: auto;
    width: 2em;
    color: #414141;
  }
`;

const IconRow = () => {
  return (
    <HomeRowStyles>
      <Link to="/">
        <BiHomeAlt style={{ color: "#E1FF6B" }} />
      </Link>
      <Link to="/search">
        <BiSearchAlt2 />
      </Link>
      <Link to="/cart">
        <BiCartAlt />
      </Link>
      <Link to="/info">
        <BiInfoCircle />
      </Link>
      <Link to="/user">
        <BiUser />
      </Link>
    </HomeRowStyles>
  );
};

export default IconRow;
