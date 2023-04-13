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
  z-index: 1;
  position: relative;
`;

const AfterMainStyles = styled.div`
  width: 75%;
  height: 8.9em;
  background-color: #e1ff6b;
  position: absolute;
  padding: 2em 1.5em;
  border: solid black 1px;
  border-radius: 25px;
`;

export const MainWelcome: React.FC<Props> = ({ content }) => {
  return (
    <MainWelcomeSyles>
      <MainWelcomeContentSyles>{content}</MainWelcomeContentSyles>
      <AfterMainStyles />
    </MainWelcomeSyles>
  );
};
