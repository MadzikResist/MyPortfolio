import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StarsComponent from 'components/Stars';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;

  }

  *, * ::before, *::after {
    box-sizing: border-box;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

const About = () => {
  return (
    <Container>
      <StarsComponent />
    </Container>
  );
};

export default About;
