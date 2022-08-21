import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';
import recipeFinderScreen from 'images/recipeFinderScreen.png';
import recipeFinderMobile from 'images/recipeFinderMobile.png';

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
`;
const ProjectBox = styled.div`
  border: 1px solid white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
`;

const TitleProject = styled.h2`
  color: #caa1d6;
  font-size: 1.8rem;
  text-align: center;
  padding: 0;
  margin: 16px 0 0;
`;
const ProjectImage = styled.div`
  background: url(${recipeFinderMobile}) center/cover no-repeat;
  height: 200px;
  width: 250px;
  margin-top: 16px;
`;
const Description = styled.p`
  color: white;
  font-size: 1.2rem;
  padding: 8px 16px;
  font-weight: 500;
`;
const Button = styled.button`
  background: #572866;
  color: white;
  height: 40px;
  border: none;
  font-size: 1.3rem;
  border-radius: 10%;
  margin-bottom: 16px;
  width: 100px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const Projects = () => {
  return (
    <>
      {/*<StarsComponent />*/}
      <Nav />
      <Container>
        <ProjectsContainer>
          <Title>
            My <span style={{ color: '#caa1d6' }}>Projects </span>
          </Title>
          <BoxContainer>
            <ProjectBox>
              <ProjectImage></ProjectImage>
              <TitleProject>Recipe Finder</TitleProject>
              <Description>
                {/*An application allows to find a recipe based on the owned ingredients.*/}
                An application that searches for a recipe based on the user's ingredients.
              </Description>
              <ButtonsContainer>
                <a
                  href="https://github.com/MadzikResist/Recipe-Finder-Front"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Github</Button>{' '}
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
              <TitleProject>Recipe Finder</TitleProject>
            </ProjectBox>
            <ProjectBox>
              <TitleProject>Recipe Finder</TitleProject>
            </ProjectBox>
          </BoxContainer>
        </ProjectsContainer>
      </Container>
    </>
  );
};

export default Projects;
