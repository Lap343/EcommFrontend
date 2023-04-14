import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const SearchInputConatiner = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  border: solid black 1px;
  border-radius: 25px;
  padding: 0.5em;
  width: 90%;
  z-index: 2;
  position: relative;
  margin: 1em 0;

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

const SearchBoxIcon = styled(BiSearchAlt2)`
  height: auto;
  width: 2em;
  color: grey;
  top: 22%;
  left: 7%;
`;

const SearchBoxInput = styled.input`
  position: relative;
  height: 2em;
  color: black;
  background-color: white;
  border: none;
  font-size: 1.5em;
  border-radius: 25px;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

const SearchInput = () => {
  return (
    <SearchInputConatiner>
      <SearchBoxIcon />
      <SearchBoxInput placeholder="Search" />
    </SearchInputConatiner>
  );
};

export default SearchInput;
