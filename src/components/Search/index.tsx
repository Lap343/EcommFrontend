import { BiSearchAlt2 } from "react-icons/bi";
import { MainHeaderSyles } from "../componentStyles";

const SearchPage = () => {
  return (
    <>
      <MainHeaderSyles>
        <BiSearchAlt2 />
        Search
      </MainHeaderSyles>
      <input placeholder="Search" />
      <div>
        <div>Price Range:</div>
      </div>
      <div>
        <div>Catagories:</div>
      </div>
    </>
  );
};

export default SearchPage;
