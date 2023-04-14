import { BiSearchAlt2 } from "react-icons/bi";
import { MainContentStyles, MainHeaderSyles } from "../componentStyles";
import SearchInput from "./SearchInput";
import PriceRange from "./PriceRange";
import Catagories from "./Catagories";

const SearchPage = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>
        <BiSearchAlt2 />
        Search
      </MainHeaderSyles>
      <SearchInput />
      <PriceRange />
      <Catagories />
    </MainContentStyles>
  );
};

export default SearchPage;
