import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';
import resume from 'images/Magdalena Szpitalna CV.pdf';
import resumePL from 'images/Magdalena Szpitalna CV_PL.pdf';
import cvPhotoMobile from 'images/cvPhotoMobile.png';
import cvPhotoMobilePL from 'images/cvPhotoMobilePL.png';
import Footer from 'components/Footer';
import { useState, useEffect } from 'react';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #130f1a;
  flex-direction: column;
  padding-bottom: 16px;
`;
const CVContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 69px;
  margin-bottom: 32px;
`;
const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 32px;
  text-align: center;
  margin-bottom: 16px;
  @media (min-width: 769px) {
    margin-top: 72px;
    font-size: 2rem;
    margin-bottom: 0;
  }
`;
const Resume = styled.object`
  height: 513pt;
  width: 200pt;
  display: none;
  -webkit-box-shadow: -1px -4px 77px -1px rgba(103, 11, 133, 1);
  -moz-box-shadow: -1px -4px 77px -1px rgba(103, 11, 133, 1);
  box-shadow: -1px -4px 77px -1px rgba(103, 11, 133, 1);
  z-index: 15;

  @media (min-width: 769px) {
    height: 613pt;
    width: 435pt;
    display: block;
    margin-top: 16px;
  }
`;
const ResumeMobile = styled.div`
  background: ${(props) =>
    props.cvChecked
      ? `url('${cvPhotoMobile}') center/cover no-repeat`
      : `url('${cvPhotoMobilePL}') center/cover no-repeat`};
  background-size: contain;
  width: 300px;
  height: 450px;
  @media (min-width: 600px) {
    width: 400px;
    height: 550px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
const TitleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
  margin: 0;
  @media (min-width: 769px) {
    justify-content: space-evenly;
    flex-direction: row;
    width: 60%;
    margin-top: 40px;
    margin-bottom: 32px;
    gap: 16px;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
  @media (min-width: 1400px) {
  }
`;
const Button = styled.button`
  height: 60px;
  border: none;
  font-size: 1.4rem;
  width: 200px;
  text-align: center;
  font-weight: 600;
  transition: ease-in 0.1s;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 0.6em 2em;
  outline: none;
  color: #caa1d6;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 15;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff00c8,
      #7a00ff,
      #002bff,
      #ff00c8,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #130f1a;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @media (min-width: 600px) {
    margin-bottom: 32px;
  }
  @media (min-width: 769px) {
    margin-bottom: 8px;
    margin-top: 32px;
  }
  @media (min-width: 1400px) {
    width: 200px;
    font-size: 1.4rem;
    margin-top: 32px;
  }
`;

const CV = () => {
  const [cvChecked, setCvChecked] = useState(true);
  const handleClick = () => {
    setCvChecked((current) => !current);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StarsComponent />
      <Nav />
      <Container>
        <CVContainer>
          <Title>
            My <span style={{ color: '#caa1d6' }}>Resume </span>
          </Title>
          <TitleButton>
            <Button onClick={handleClick}>{cvChecked ? 'Polish' : 'English'}</Button>
            <a
              download={'Magdalena Szpitalna CV'}
              href={cvChecked ? resume : resumePL}
              target="_blank"
              rel="noreferrer"
            >
              <Button>Download</Button>
            </a>
          </TitleButton>
          <Resume
            aria-label={'Magdalena Szpitalna CV'}
            data={`${cvChecked ? resume : resumePL}#toolbar=0&navpanes=0&scrollbar=0`}
            type="application/pdf"
          />
          <ResumeMobile cvChecked={cvChecked} />
        </CVContainer>
      </Container>
      <Footer />
    </>
  );
};

export default CV;
