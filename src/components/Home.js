import * as React from 'react';
import StarsComponent from 'components/Stars';
import styled from 'styled-components';
import background2 from 'images/background2.png';
import photo2 from 'images/photo2.png';
import Nav from 'components/Nav';
import Typewriter from 'typewriter-effect';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    height: auto;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
const StyledWrapper = styled.div`
  margin-top: 69px;
  gap: 16px;
  background: url(${background2}) center/cover;
  width: 100%;
  padding: 0 10%;
  height: auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 0;
    background: url(${background2}) center/cover;
    height: 80vh;
  }
  @media (min-width: 1200px) {
    height: 70vh;
  }
  @media (min-width: 1400px) {
    height: 70vh;
  }
`;

const Title = styled.p`
  //color: #caa1d6;
  color: white;
  font-size: 1.2rem;
  position: relative;
  z-index: 10;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const Name = styled.h1`
  color: #caa1d6;
  font-size: 2rem;
  position: relative;
  z-index: 10;
`;
const TextContainer = styled.div`
  position: relative;
  width: 100%;
  background: none;
  z-index: 15;
  margin-top: 64px;
  @media (min-width: 768px) {
    position: relative;
    width: 50%;
    background: none;
    z-index: 15;
    margin-top: 0;
  }
  @media (min-width: 1200px) {
    position: relative;
    background: none;
    z-index: 15;
    margin-top: 0;
    width: 50%;
  }
  @media (min-width: 1400px) {
    position: relative;
    background: none;
    z-index: 15;
    margin-top: 0;
    width: 40%;
  }
`;
const TypeWriterStyle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 200;
  opacity: 40%;
  margin-top: 8vh;
  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;
const Photo = styled.div`
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: url(${photo2}) center/cover no-repeat;
  position: relative;
  z-index: 15;
  border-radius: 14px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    left: 0;
    transform: translateX(0);
    width: 350px;
    height: 350px;
    margin-top: 32px;
  }
  @media (min-width: 1200px) {
    margin-top: 96px;
    width: 400px;
    height: 400px;
  }
  @media (min-width: 1400px) {
    margin-top: 96px;
    width: 450px;
    height: 450px;
  }
`;
const Introduce = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;

  background: rgb(23, 6, 38);
  background: linear-gradient(
    187deg,
    rgba(23, 6, 38, 1) 0%,
    rgba(45, 13, 74, 1) 52%,
    rgba(98, 34, 145, 1) 98%
  );
  @media (min-width: 768px) {
    //background: rgb(43, 21, 70);
    //background: linear-gradient(0deg, rgba(43, 21, 70, 1) 0%, rgba(25, 7, 41, 1) 100%);
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
const About = styled.h1`
  color: #caa1d6;
  font-size: 2.5rem;
  position: relative;
  z-index: 10;
  text-align: center;
`;

const TextAbout = styled.p``;
const Home = () => {
  return (
    <>
      <StarsComponent />
      <Nav />
      <Container>
        <StyledWrapper>
          <TextContainer>
            <Title>Hi, my name is</Title>
            <Name>MAGDALENA SZPITALNA</Name>
            <TypeWriterStyle>
              <Typewriter
                options={{
                  strings: ['Frontend Developer'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'Writer',
                }}
              />
            </TypeWriterStyle>
          </TextContainer>
          <Photo />
        </StyledWrapper>
        <Introduce>
          <About>
            <span style={{ color: 'white' }}>About </span>me
          </About>
          <TextAbout></TextAbout>
        </Introduce>
      </Container>
    </>
  );
};

export default Home;
