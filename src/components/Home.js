import * as React from 'react';
import StarsComponent from 'components/Stars';
import styled from 'styled-components';
import background2 from 'images/background2.png';
import myPhoto from 'images/myPhoto.jpg';
import Nav from 'components/Nav';
import Typewriter from 'typewriter-effect';

const Container = styled.div`
  width: 100vw;
  background: url(${background2}) center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    background: url(${background2}) center/cover;
    height: 100vh;
  }
  @media (min-width: 1400px) {
    height: 60vh;
  }
`;
const StyledWrapper = styled.div`
  width: 80%;
  margin-top: 16vh;
  gap: 16px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 90%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
  @media (min-width: 1400px) {
    width: 80%;
    margin-top: 0;
  }
`;

const Title = styled.p`
  //color: #caa1d6;
  color: white;
  font-size: 1.2rem;
  font-family: 'Roboto Slab', serif;
  position: relative;
  z-index: 10;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const Name = styled.h1`
  color: #caa1d6;
  font-size: 2rem;
  font-family: 'Roboto Slab', serif;
  position: relative;
  z-index: 10;
`;
const TextContainer = styled.div`
  @media (min-width: 768px) {
    position: relative;
    width: 80%;
    background: none;
    z-index: 15;
    margin-top: 10vh;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (min-width: 1400px) {
    position: relative;
    background: none;
    z-index: 15;
    margin-top: 0;
    width: 50%;
  }
`;
const TypeWriterStyle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 200;
  opacity: 40%;
  margin-top: 8vh;
  @media (min-width: 768px) {
    font-size: 2.9rem;
  }
`;
const Photo = styled.div`
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 260px;
  height: 400px;
  background: url(${myPhoto}) center/cover no-repeat;
  position: relative;
  z-index: 15;
  border-radius: 14px;
  @media (min-width: 768px) {
    left: 0;
    transform: translateX(0);
    width: 500px;
    height: 500px;
    margin-top: 32px;
  }
  @media (min-width: 1400px) {
    margin-top: 0;
  }
`;
const Introduce = styled.div`
  width: 100%;
  margin-top: 20%;
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
  @media (min-width: 1400px) {
    margin-top: 10%;
  }
`;
const About = styled.h1`
  color: #caa1d6;
  font-size: 2.5rem;
  font-family: 'Roboto Slab', serif;
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
