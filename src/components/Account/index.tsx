import { BiUser } from "react-icons/bi";
import { MainContentStyles, MainHeaderSyles } from "../componentStyles";
import userImg from "../../assets/user.png";

const AccountPage = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>
        <BiUser />
        Account
      </MainHeaderSyles>
      <div>
        <img src={userImg} alt="user image" />
        <div>David Casanova</div>
      </div>
      <div>
        <div>Settings:</div>
        <div>
          <div>Favorites ❤️</div>
          <div>User 🧑</div>
          <div>Orders 🛒</div>
          <div>Other ⚙️</div>
        </div>
      </div>
    </MainContentStyles>
  );
};

export default AccountPage;
