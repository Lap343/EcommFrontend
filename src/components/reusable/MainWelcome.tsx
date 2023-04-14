import React from "react";
import styled from "styled-components";

interface Props {
  content: string;
}

const MainWelcomeSyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0;
`;

const MainWelcomeContentSyles = styled.div`
  width: 75%;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 4em 1.5em;
  border: 1px solid black;
  border-radius: 25px;
  z-index: 2;
  position: relative;

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

export const MainWelcome: React.FC<Props> = ({ content }) => {
  return (
    <MainWelcomeSyles>
      <MainWelcomeContentSyles>{content}</MainWelcomeContentSyles>
      {/* <AfterMainStyles /> */}
    </MainWelcomeSyles>
  );
};
