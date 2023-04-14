import { BiSearchAlt2 } from "react-icons/bi";
import {
  MainContentStyles,
  MainHeaderSyles,
  SubContentStyles,
  SubHeaderSyles,
} from "../componentStyles";
import SearchInput from "./SearchInput";

const SearchPage = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>
        <BiSearchAlt2 />
        Search
      </MainHeaderSyles>
      <SearchInput />
      <SubContentStyles>
        <SubHeaderSyles>Price Range:</SubHeaderSyles>
      </SubContentStyles>
      <SubContentStyles>
        <SubHeaderSyles>Catagories:</SubHeaderSyles>
      </SubContentStyles>
    </MainContentStyles>
  );
};

export default SearchPage;
