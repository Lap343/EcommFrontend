import styled from "styled-components";

export const MainContentStyles = styled.div`
  width: 85vw;
  margin: auto;
  display: flex;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`;

export const SubContentStyles = styled.div`
  margin: 1em 0;
  width: 100%;
`;

export const MainHeaderSyles = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  padding: 2.5em 0em 1.5em 0em;
  display: flex;
  align-items: center;

  & svg {
    padding-right: 0.25em;
  }
`;

export const SubHeaderSyles = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  text-align: start;
`;
