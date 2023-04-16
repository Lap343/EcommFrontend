import { BiUser } from "react-icons/bi";
import {
  MainContentStyles,
  MainHeaderSyles,
  SubContentStyles,
  SubHeaderSyles,
} from "../componentStyles";
import userImg from "../../assets/user.png";
import styled from "styled-components";

const AccountMainContentStyles = styled(MainContentStyles)`
  width: 100%;
  padding-bottom: 0;
`;

const AccountInfoContainer = styled.div`
  width: 100%;
  color: black;
  background-color: #e1ff6b;
  border: solid black 1px;
  border-radius: 25px 25px 0 0;
  padding-bottom: 3em;
  display: flex;
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  width: 90%;
  border-bottom: solid black 1.4px;
  display: flex;
  align-items: end;
  font-weight: bold;
  font-size: 1.5em;

  & img {
    padding: 1em 0.5em 0.5em 0em;
  }

  & div {
    margin-bottom: 0.5em;
  }
`;

const AccountOptionsContainer = styled(SubContentStyles)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #414141;
  margin: 0;
  border: solid black 1px;
  border-radius: 25px 25px 0 0;
  position: relative;
  top: -1.5em;
  padding-bottom: 10vh;

  & div {
    width: 80%;
  }
`;

const AccountSubHeaderSyles = styled(SubHeaderSyles)`
  padding: 2em 0 1em 0;
`;

const OptionStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div {
    padding: 1em;
    text-align: center;
    font-weight: bold;
    font-size: 1.25em;
    background-color: white;
    color: black;
    border: solid black 1px;
    border-radius: 25px;
    margin: 0.5em;
  }
`;

const AccountPage = () => {
  return (
    <AccountMainContentStyles>
      <MainHeaderSyles>
        <BiUser />
        Account
      </MainHeaderSyles>
      <AccountInfoContainer>
        <InfoContainer>
          <img src={userImg} alt="user image" />
          <div>David Casssssanova</div>
        </InfoContainer>
      </AccountInfoContainer>
      <AccountOptionsContainer>
        <AccountSubHeaderSyles>Settings:</AccountSubHeaderSyles>
        <OptionStyles>
          <div>Favorites ❤️</div>
          <div>User 🧑</div>
          <div>Orders 🛒</div>
          <div>Other ⚙️</div>
        </OptionStyles>
      </AccountOptionsContainer>
    </AccountMainContentStyles>
  );
};

export default AccountPage;
