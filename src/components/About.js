import * as React from 'react';
import styled from 'styled-components';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import myPhoto from 'images/myPhoto.jpg';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #130f1a;
  flex-direction: column;
`;
const KnowMeContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 0 10%;
  margin-top: 69px;
`;
const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: lighter;
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  color: white;
  font-size: 1.5rem;
`;
const TitleExperience = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  padding: 0;
  margin: 16px 0 0;
`;
const TextPractice = styled.h1`
  color: #caa1d6;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  font-weight: 600;
`;
const TitleCity = styled.h2`
  padding: 0;
  margin: 0 0 16px;
  color: white;
  font-weight: 500;
`;
const MyPhoto = styled.div`
  background: url(${myPhoto}) center/cover no-repeat;
  margin-top: 32px;
  width: 150px;
  height: 250px;
  position: relative;
  z-index: 15;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;
const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 0 10%;
  align-items: center;
`;

const ExperienceBox = styled.div`
  border: 1px solid white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
`;
const TextBox = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;
const InfoJobContainer = styled.div`
  width: 100%;
  border-top: 1px solid white;
`;
const InfoJob = styled.p`
  color: white;
`;

const About = () => {
  return (
    <>
      {/*<StarsComponent />*/}
      <Nav />
      <Container>
        <KnowMeContainer>
          <Title>
            Know Who <span style={{ color: '#caa1d6' }}>I am </span>
          </Title>
          <TextPhotoContainer>
            <Text>
              Hi! I am <span style={{ color: '#caa1d6' }}>Magdalena Szpitalna </span>from
              <span style={{ color: '#caa1d6' }}> Poznań.</span>
            </Text>
            <Text>I am 22 years old ICT student at University of Technology in Poznań. </Text>
            <MyPhoto></MyPhoto>
          </TextPhotoContainer>
        </KnowMeContainer>
        <ExperienceContainer>
          <Title>
            My <span style={{ color: '#caa1d6' }}>Experience </span>
          </Title>
          <ExperienceBox>
            <TextBox>
              <TitleExperience>Internship </TitleExperience>
              <TextPractice>Full-Stack Developer</TextPractice>
              <TitleCity>Poznań- 2022</TitleCity>
              <InfoJobContainer>
                <InfoJob>Backend and Frontend website development.</InfoJob>
              </InfoJobContainer>
            </TextBox>
          </ExperienceBox>
          <ExperienceBox>
            <TextBox>
              <TitleExperience>Codeally </TitleExperience>
              <TextPractice>Full-Stack Developer</TextPractice>
              <TitleCity>Remote- 2022</TitleCity>
              <InfoJobContainer>
                <InfoJob>Supporting development of software engineers hiring platform</InfoJob>
              </InfoJobContainer>
            </TextBox>
          </ExperienceBox>
        </ExperienceContainer>
      </Container>
    </>
  );
};

export default About;
