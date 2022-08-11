import * as React from 'react';
import StarsComponent from 'components/Stars';
import styled from 'styled-components';
import background from 'images/background.png';
import Nav from 'components/Nav';

const StyledWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background: url(${background}) center/cover no-repeat;
`;
const Container = styled.div`
  width: 100vw;
`;
const Home = () => {
  return (
    <>
      <StarsComponent />
      <Nav />
      <Container>
        <StyledWrapper></StyledWrapper>
      </Container>
    </>
  );
};

export default Home;
