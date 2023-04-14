import { BiSearchAlt2 } from "react-icons/bi";
import {
  MainContentStyles,
  MainHeaderSyles,
  SubContentStyles,
  SubHeaderSyles,
} from "../componentStyles";
import SearchInput from "./SearchInput";
import PriceRange from "./PriceRange";

const SearchPage = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>
        <BiSearchAlt2 />
        Search
      </MainHeaderSyles>
      <SearchInput />
      <PriceRange />
      <SubContentStyles>
        <SubHeaderSyles>Catagories:</SubHeaderSyles>
      </SubContentStyles>
    </MainContentStyles>
  );
};

export default SearchPage;
