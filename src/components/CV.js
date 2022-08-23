import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';
import resume from 'images/CV.pdf';
import cvPhotoMobile from 'images/cvPhotoMobile.png';

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
`;
const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 32px;
  text-align: center;
  margin-bottom: 16px;
  @media (min-width: 769px) {
    margin-top: 40px;
    font-size: 2rem;
  }
`;
const Resume = styled.object`
  height: 513pt;
  width: 200pt;
  display: none;
  -webkit-box-shadow: -1px -4px 77px -1px rgba(103, 11, 133, 1);
  -moz-box-shadow: -1px -4px 77px -1px rgba(103, 11, 133, 1);
  box-shadow: -1px -4px 77px -1px rgba(103, 11, 133, 1);

  @media (min-width: 769px) {
    height: 613pt;
    width: 435pt;
    display: block;
    margin-top: 16px;
  }
`;
const ResumeMobile = styled.div`
  background: url('${cvPhotoMobile}') center/cover no-repeat;
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
  z-index: 0;
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
const IconFooter = styled.svg`
  fill: white;
  width: 30px;
  height: 30px;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: auto;
  background-color: #131019;
  @media (min-width: 768px) {
    position: static;
    //margin-top: 10%;
    padding-top: 64px;
    padding-bottom: 8px;
  }
`;
const CV = () => {
  return (
    <>
      {/*<StarsComponent />*/}
      <Nav />
      <Container>
        <CVContainer>
          <TitleButton>
            <Title>
              My <span style={{ color: '#caa1d6' }}>Resume </span>
            </Title>
            <a download={'Magdalena Szpitalna CV'} href={resume} target="_blank" rel="noreferrer">
              <Button>Download</Button>
            </a>
          </TitleButton>
          <Resume
            aria-label={'Magdalena Szpitalna CV'}
            data={`${resume}#toolbar=0&navpanes=0&scrollbar=0`}
            type="application/pdf"
          />
          <ResumeMobile />
        </CVContainer>
      </Container>
      <Footer>
        <IconFooter xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </IconFooter>
        <IconFooter xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </IconFooter>
      </Footer>
    </>
  );
};

export default CV;
