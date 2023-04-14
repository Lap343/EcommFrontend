import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const SearchInputConatiner = styled.div`
  position: relative;
  margin: 1em 0;
`;

const SearchBoxIcon = styled(BiSearchAlt2)`
  height: auto;
  width: 2em;
  position: absolute;
  color: grey;
  top: 22%;
  left: 7%;
  z-index: 2;
`;

const SearchBox = styled.input`
  position: relative;
  width: 78%;
  padding: 0.5em 1em 0.5em 2em;
  color: black;
  background-color: white;
  border: solid black 1px;
  border-radius: 25px;
  font-size: 1.5em;
  z-index: 1;
`;

const AfterSearchBox = styled.div`
  width: 100%;
  background-color: #e1ff6b;
  position: absolute;
  padding: 1.75em 0em;
  border: solid black 1px;
  border-radius: 25px;
  top: 0;
`;

const SearchInput = () => {
  return (
    <SearchInputConatiner>
      <SearchBoxIcon />
      <SearchBox placeholder="" />
      <AfterSearchBox />
    </SearchInputConatiner>
  );
};

export default SearchInput;
