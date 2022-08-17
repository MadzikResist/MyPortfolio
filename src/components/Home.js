import * as React from 'react';
import StarsComponent from 'components/Stars';
import styled from 'styled-components';
import background from 'images/background.png';
import Nav from 'components/Nav';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  // background: url(${background}) center/cover no-repeat;
  background: #120f26;
  margin-top: 80px;
  @media (min-width: 768px) {
    margin-top: 400px;
  }
`;
const Container = styled.div`
  width: 100vw;
`;
const Title = styled.h1`
  color: #caa1d6;
`;
const Home = () => {
  return (
    <>
      <StarsComponent />
      <Nav />
      <Container>
        <StyledWrapper>
          <Title>Hello noobs</Title>
        </StyledWrapper>
      </Container>
    </>
  );
};

export default Home;
