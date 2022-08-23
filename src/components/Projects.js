import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';
import recipeFinderMobile from 'images/recipeFinderMobile.png';
import recipeFinderScreen from 'images/recipeFinderScreen.png';
import nicePage2 from 'images/nicePage2.png';
import pianoGame from 'images/pianoGame.png';
import nicePage from 'images/nicepage.png';
import portfolioPhoto from 'images/portfolio.png';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #130f1a;
  flex-direction: column;
`;
const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 69px;
`;
const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 16px;
  text-align: center;
  @media (min-width: 769px) {
    margin-top: 64px;
  }
`;
const BoxContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 32px;
  z-index: 15;
  @media (min-width: 769px) {
    gap: 64px;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1400px) {
    width: 80%;
  }
`;
const ProjectBox = styled.div`
  border: 1px solid transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  transition: border ease-out 0.8s;

  :hover {
    border: 1px solid white;
  }
`;

const TitleProject = styled.h2`
  color: #caa1d6;
  font-size: 1.8rem;
  text-align: center;
  padding: 0;
  margin: 16px 0 0;
  @media (min-width: 1400px) {
    margin: 32px 0 0;
  }
`;
const ProjectImage = styled.div`
  height: 250px;
  width: 95%;
  margin-top: 16px;
  background: ${({ background }) => `url(${background}) center/cover no-repeat`};
  background-size: contain;

  @media (min-width: 400px) {
    height: 340px;
  }
  @media (min-width: 769px) {
    height: 500px;
    width: 95%;
  }
  @media (min-width: 1200px) {
    height: 275px;
    width: 95%;
    margin-top: 32px;
  }
  @media (min-width: 1400px) {
    height: 300px;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  padding: 8px 16px;
  font-weight: 500;
  text-align: center;
  @media (min-width: 1400px) {
    margin-top: 16px;
    width: 80%;
  }
`;
const Button = styled.button`
  background: #572866;
  color: white;
  height: 60px;
  border: none;
  font-size: 1rem;
  border-radius: 5%;
  margin-bottom: 16px;
  width: 80px;
  text-align: center;
  font-weight: 600;
  transition: ease-in 0.1s;

  @media (min-width: 400px) {
    width: 100px;
  }
  @media (min-width: 769px) {
    width: 200px;
    :hover {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 1200px) {
    width: 150px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (min-width: 1400px) {
    margin-top: 0;
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
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-top: 10%;
    padding-bottom: 8px;
  }
`;
const Projects = () => {
  return (
    <>
      <StarsComponent />
      <Nav />
      <Container>
        <ProjectsContainer>
          <Title>
            My <span style={{ color: '#caa1d6' }}>Projects </span>
          </Title>
          <BoxContainer>
            <ProjectBox>
              <ProjectImage background={recipeFinderScreen}></ProjectImage>
              <TitleProject>Recipe Finder</TitleProject>
              <Description>
                {/*An application allows to find a recipe based on the owned ingredients.*/}
                An application that searches for a recipe based on the user's ingredients
              </Description>
              <ButtonsContainer>
                <a
                  href="https://github.com/MadzikResist/Recipe-Finder-Front"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github Frontend</Button>
                </a>
                <a
                  href="https://github.com/MadzikResist/Recipe-Finder-API"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github Backend</Button>
                </a>
                <a
                  href="https://madzikresist.github.io/Recipe-Finder-Front/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Website</Button>
                </a>
              </ButtonsContainer>
            </ProjectBox>
            <ProjectBox>
              <ProjectImage background={pianoGame}></ProjectImage>
              <TitleProject>Piano Game</TitleProject>
              <Description>
                A game of remembering melodies, playing songs and allowing to play the piano freely
              </Description>
              <ButtonsContainer>
                <a
                  href="https://github.com/MadzikResist/PianoGame"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=NN1Ce-ug0aI&ab_channel=MagdalenaSz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>YouTube</Button>
                </a>
              </ButtonsContainer>
            </ProjectBox>
            <ProjectBox>
              <ProjectImage background={nicePage2}></ProjectImage>
              <TitleProject>Boost Your Brand</TitleProject>
              <Description>Website inspired by the found layout</Description>
              <ButtonsContainer>
                <a
                  href="https://github.com/MadzikResist/NicePage2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <a
                  href="https://madzikresist.github.io/NicePage2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Website</Button>
                </a>
              </ButtonsContainer>
            </ProjectBox>
            <ProjectBox>
              <ProjectImage background={nicePage}></ProjectImage>
              <TitleProject>Boost Your Brand</TitleProject>
              <Description>Website inspired by the found layout</Description>
              <ButtonsContainer>
                <a
                  href="https://github.com/MadzikResist/NicePage2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <a href="https://madzikresist.github.io/NicePage/" target="_blank" rel="noreferrer">
                  <Button>Website</Button>
                </a>
              </ButtonsContainer>
            </ProjectBox>
            <ProjectBox>
              <ProjectImage background={portfolioPhoto}></ProjectImage>
              <TitleProject>Portfolio</TitleProject>
              <Description>This site</Description>
              <ButtonsContainer>
                <a
                  href="https://github.com/MadzikResist/NicePage2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github</Button>
                </a>
                <a href="https://madzikresist.github.io/NicePage/" target="_blank" rel="noreferrer">
                  <Button>Website</Button>
                </a>
              </ButtonsContainer>
            </ProjectBox>
          </BoxContainer>
        </ProjectsContainer>
        <Footer>
          <IconFooter xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </IconFooter>
          <IconFooter xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </IconFooter>
        </Footer>
      </Container>
    </>
  );
};

export default Projects;
