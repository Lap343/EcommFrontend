import { BiInfoCircle } from "react-icons/bi";
import {
  MainContentStyles,
  MainHeaderSyles,
  SubContentStyles,
  SubHeaderSyles,
} from "../componentStyles";
import { MainWelcome } from "../reusable";
import InfoPic from "../../assets/Info_Pic.png";
import InstaIcon from "../../assets/Instagram_icon.png";
import TicTokIcon from "../../assets/Tiktok_icon.png";
import TwitterIcon from "../../assets/Twitter_icon.png";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

const InfoPage = () => {
  return (
    <MainContentStyles>
      <MainHeaderSyles>
        <BiInfoCircle />
        Info
      </MainHeaderSyles>
      <img
        src={InfoPic}
        alt="Me and my wife crossed arms looking like straight up G's"
        style={{
          width: "95%",
        }}
      />
      <MainWelcome content="Hello! Welcome to our shop! Here is where my wife and I sell all of our hobbies and crafts. We appreciate you checking our stuff out." />
      <SubContentStyles>
        <SubHeaderSyles>Socials:</SubHeaderSyles>
        <IconContainer>
          <img src={InstaIcon} alt="Instagram social link" />
          <img src={TicTokIcon} alt="Tic Tok social link" />
          <img src={TwitterIcon} alt="Twitter social link" />
        </IconContainer>
      </SubContentStyles>
    </MainContentStyles>
  );
};

export default InfoPage;
