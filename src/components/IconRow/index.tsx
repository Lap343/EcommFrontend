import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
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
`;

interface StyledSvgPropsInterface {
  path: string;
  location: string;
}

const StyledSvg = styled.div<StyledSvgPropsInterface>`
  & svg {
    height: auto;
    width: 2em;
    color: ${(props) =>
      props.path === props.location ? "#E1FF6B" : "#414141"};
  }
`;

const IconRow = () => {
  const location = useLocation();
  return (
    <HomeRowStyles>
      <Link to="/">
        <StyledSvg path="/" location={location.pathname}>
          <BiHomeAlt />
        </StyledSvg>
      </Link>
      <Link to="/search">
        <StyledSvg path="/search" location={location.pathname}>
          <BiSearchAlt2 />
        </StyledSvg>
      </Link>
      <Link to="/cart">
        <StyledSvg path="/cart" location={location.pathname}>
          <BiCartAlt />
        </StyledSvg>
      </Link>
      <Link to="/info">
        <StyledSvg path="/info" location={location.pathname}>
          <BiInfoCircle />
        </StyledSvg>
      </Link>
      <Link to="/user">
        <StyledSvg path="/user" location={location.pathname}>
          <BiUser />
        </StyledSvg>
      </Link>
    </HomeRowStyles>
  );
};

export default IconRow;
