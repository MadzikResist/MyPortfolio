import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';
import recipeFinderScreen from 'images/recipeFinderScreen.png';
import nicePage2 from 'images/nicePage2.png';
import pianoGame from 'images/pianoGame.png';
import nicePage from 'images/nicepage.png';
import portfolioPhoto from 'images/portfolio.png';
import Footer from 'components/Footer';

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
  margin-bottom: 32px;
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
  cursor: pointer;

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
      </Container>
      <Footer />
    </>
  );
};

export default Projects;
