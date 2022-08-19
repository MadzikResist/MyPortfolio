import * as React from 'react';
import styled from 'styled-components';
// import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import myPhoto from 'images/myPhoto.jpg';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #130f1a;
  flex-direction: column;
  @media (min-width: 1400px) {
    display: flex;
    padding: 0 15%;
  }
`;
const KnowMeContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 5% 10%;
  margin-top: 69px;
  @media (min-width: 768px) {
    display: flex;
    padding: 8% 10%;
  }
`;
const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const TitleKnowMe = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 16px;
  gap: 8px;
  //text-align: center;
`;
const TextPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1400px) {
    flex-direction: row;
    align-items: normal;
  }
`;
const TextContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const Text = styled.p`
  color: white;
  font-size: 1.4rem;
  padding: 0;
  margin: 16px 0 0;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
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
const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MyPhoto = styled.div`
  background: url(${myPhoto}) center/cover no-repeat;
  margin-top: 32px;
  width: 150px;
  height: 250px;
  position: relative;
  border-radius: 10%;
  z-index: 15;

  @media (min-width: 768px) {
    left: 0;
    transform: translateX(0);
    margin-top: 0;
    margin-left: 32px;
    width: 200px;
    height: 300px;
  }
  @media (min-width: 1000px) {
    left: 0;
    transform: translateX(0);
    margin-left: 32px;
    width: 300px;
    height: 400px;
  }
`;
const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  padding: 0 10%;
  align-items: center;
  margin-top: 16px;
`;

const ExperienceBox = styled.div`
  border: 1px solid white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  margin-top: 16px;

  -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);

  @media (min-width: 1400px) {
    padding: 2% 0;
  }
`;
const TextBox = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1400px) {
    width: 90%;
  }
`;
const InfoJobContainer = styled.div`
  width: 100%;
  border-top: 1px solid white;
`;
const InfoJob = styled.p`
  color: white;
  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;
const Icon = styled.svg`
  fill: white;
  width: 60px;
  height: 60px;
`;
const IconFooter = styled.svg`
  fill: white;
  width: 30px;
  height: 30px;
`;
const TitleSkill = styled.h2`
  color: white;
  text-align: center;
`;
const SkillSetContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: auto;
  padding: 0 10%;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    width: 90%;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
    width: 100%;
  }
`;
const SkillBox = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.7);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30% 0;
  -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  @media (min-width: 768px) {
    padding: 15% 0;
    width: 100%;
  }
  @media (min-width: 1400px) {
    padding: 20% 0;
  }
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
  }
`;
const About = () => {
  return (
    <>
      {/*<StarsComponent />*/}
      <Nav />
      <Container>
        <KnowMeContainer>
          <TextPhotoContainer>
            <TextContainer>
              <TitleKnowMe>
                Know Who <span style={{ color: '#caa1d6' }}>I am </span>
              </TitleKnowMe>
              <Text>
                Hi! I am <span style={{ color: '#caa1d6' }}>Magdalena Szpitalna </span>from
                <span style={{ color: '#caa1d6' }}> Poznań.</span> <br />I am 22 years old ICT
                student at University of Technology in Poznań.
              </Text>
            </TextContainer>
            <PhotoContainer>
              <MyPhoto />
            </PhotoContainer>
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
        <Title>
          My <span style={{ color: '#caa1d6' }}>Skills </span>
        </Title>
        <SkillSetContainer>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M1.734 32l15.068-15.333 15.198 15.333zM0 0h16l-16 16.667zM17.865 0l-17.865 18.667v13.333l32-32z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M435.2793884,113.2840881L247.1911163,4.6924829c-10.8347626-6.2566438-28.5671387-6.2566438-39.4019012,0L19.7009449,113.2840881C8.864645,119.5393753,0,134.8957062,0,147.4076385v217.1847382c0.8429857,14.5713501,8.2855635,26.6393127,19.7009449,34.1234741l188.0882721,108.5915833c10.8347626,6.2567749,28.5671387,6.2567749,39.4019012,0l188.0882721-108.5915833c12.2479248-8.1462708,19.2193298-20.4076233,19.7009277-34.1234741V147.4076385C454.5403748,134.2429352,446.6565552,120.9648895,435.2793884,113.2840881z M75.8300552,256.0007019c-0.8911743-148.0888062,197.459137-213.4790344,282.9962769-75.8776245l-65.6346436,37.9804688c-39.6215057-65.5336304-138.0008087-42.1011963-141.5315704,37.8971558c1.0603333,73.7290649,97.7535858,107.9782104,141.536026,37.8927917L358.83078,331.872406C283.4476624,462.7354736,79.6317978,415.6530457,75.8300552,256.0007019z M379.1502686,264.425293h-16.8520813v16.8521729h-16.8491821V264.425293h-16.8521118v-16.850647h16.8521118v-16.8505554h16.8491821v16.8505554h16.8520813V264.425293z M442.34198,264.425293h-16.8520813v16.8521729h-16.8490906V264.425293h-16.8522034v-16.850647h16.8522034v-16.8505554h16.8490906v16.8505554H442.34198V264.425293z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32">
              <path d="M28.057 6.53L17.952.532a3.8 3.8 0 0 0-3.88 0L3.965 6.53A4.03 4.03 0 0 0 2 10.002v11.996a4.03 4.03 0 0 0 1.948 3.472l10.105 5.998a3.8 3.8 0 0 0 3.88 0L28.04 25.47a4.03 4.03 0 0 0 1.948-3.472V10.002a4.03 4.03 0 0 0-1.93-3.472zM20.23 25.262v.86c-.001.108-.057.207-.148.265l-.512.293c-.08.042-.148 0-.148-.113v-.847a1.66 1.66 0 0 1-1.164.113c-.062-.042-.086-.122-.056-.2l.183-.78c.016-.066.05-.125.102-.17a.18.18 0 0 1 .05-.035.11.11 0 0 1 .08 0 1.41 1.41 0 0 0 1.059-.134 1.41 1.41 0 0 0 .79-1.21c0-.438-.24-.62-.82-.625-.734 0-1.4-.14-1.43-1.224.017-.937.452-1.817 1.186-2.4v-.872c-.001-.1.056-.2.148-.268l.494-.314c.08-.042.148 0 .148.116v.872a1.61 1.61 0 0 1 .967-.116c.07.04.098.128.064.2l-.173.773c-.015.06-.045.113-.088.155-.014.015-.03.028-.05.04s-.05.008-.074 0a1.28 1.28 0 0 0-.931.152 1.17 1.17 0 0 0-.706 1.037c0 .395.208.515.907.53.935 0 1.337.423 1.348 1.362-.018.983-.467 1.908-1.228 2.53zm5.293-1.45c.012.074-.018.15-.078.194L22.9 25.558c-.024.02-.06.023-.087.007s-.04-.05-.033-.08v-.66c.003-.072.05-.136.116-.162l2.516-1.507c.024-.02.06-.023.087-.007s.04.05.033.08v.582zM27.288 9.06l-9.562 5.906c-1.193.706-2.07 1.478-2.07 2.914v11.778c0 .86.353 1.4.882 1.58a3.14 3.14 0 0 1-.53.053 3.13 3.13 0 0 1-1.595-.441L4.308 24.853C3.3 24.25 2.702 23.165 2.706 22V10.002C2.7 8.834 3.3 7.75 4.308 7.144l10.105-5.998c.98-.58 2.196-.58 3.176 0l10.105 5.998c.833.504 1.4 1.35 1.552 2.3-.328-.713-1.083-.9-1.962-.395h.003z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <TitleSkill>Assembly</TitleSkill>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781-0.469-0.661-0.974-1.911-0.974-1.911-0.005 0.026-0.005 0.042-0.010 0.068v0.016c0 0.021-0.005 0.031-0.005 0.052v0.021h-0.005c0 0.010 0 0.021 0 0.031v0.036h-0.005c0 0.010 0 0.026-0.005 0.031v0.031c0 0.010 0 0.021-0.005 0.026v0.026c0 0.016 0 0.031-0.005 0.042v0.005c0 0.021-0.005 0.047-0.010 0.068v0.010c-0.005 0.005-0.005 0.010-0.005 0.016v0.021h-0.005v0.031h-0.005v0.021h-0.010v0.031h-0.005v0.026h-0.005v0.021h-0.005v0.021h-0.005v0.021h-0.005v0.021h-0.005v0.016h-0.005v0.021h-0.005c0 0 0 0.005 0 0.005v0.016h-0.005c-0.005 0-0.005 0.005-0.005 0.005v0.010c0 0-0.005 0.010-0.005 0.010 0 0.010-0.005 0.021-0.010 0.031-0.005 0.005-0.005 0.005-0.005 0.010v0.010h-0.005v0.010h-0.010v0.026h-0.010v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.016h-0.005v0.010h-0.010v0.016h-0.005v0.010h-0.005v0.010h-0.005v0.016h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.010v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.016h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.016h-0.010v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.005c0 0.005 0 0.005 0 0.005v0.005c-0.005 0-0.005 0.005-0.005 0.005v0.005h-0.005c-0.005 0.010-0.010 0.016-0.016 0.026 0 0-0.010 0.010-0.010 0.016-0.005 0-0.005 0.005-0.005 0.005v0.005h-0.005v0.005h-0.005c0 0 0 0 0 0.005v0.005h-0.010v0.005c0 0-0.005 0-0.005 0v0.005h-0.005c0 0 0 0.005 0 0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.005v-0.010h-0.010v0.005h-0.005v0.010h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.010v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.016h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.010v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.010v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.010v0.005h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.010v0.005c-0.005 0-0.005 0.005-0.005 0.005l-0.005 0.005c0 0-0.005 0.005-0.005 0.005v0.010h-0.005v0.005h-0.005v0.005h-0.005v0.005h-0.005l-0.010 0.010v0.005c-0.010 0.005-0.010 0.010-0.021 0.021 0 0-0.010 0.010-0.016 0.010-0.016 0.010-0.036 0.031-0.052 0.047-0.010 0.005-0.021 0.016-0.031 0.021-0.021 0.021-0.042 0.036-0.063 0.052-0.031 0.031-0.063 0.052-0.099 0.083h-0.005c-0.073 0.063-0.156 0.135-0.245 0.214h-0.005c-0.224 0.198-0.49 0.453-0.792 0.755l-0.026 0.026c-1.813 1.875-4.672 5.786-4.969 12.104-0.031 0.521-0.026 1.031 0.005 1.526v0.010c0.146 2.49 0.927 4.615 1.906 6.344 0.385 0.688 0.807 1.313 1.234 1.875 1.469 1.938 2.969 3.089 3.349 3.37 0.589 1.359 0.536 3.703 0.536 3.703l0.859 0.286c0 0-0.177-2.266 0.068-3.365 0.078-0.339 0.255-0.63 0.464-0.88 0.146-0.099 0.563-0.401 1.063-0.859 0.026-0.026 0.042-0.047 0.063-0.073 2.026-1.891 5.813-6.547 4.516-14.13z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img">
              <path d="M511.936 1024a78.563 78.563 0 01-39.338-10.539l-125.268-74.11c-18.688-10.454-9.557-14.166-3.414-16.342 24.96-8.661 29.995-10.666 56.661-25.77 2.773-1.579 6.443-.982 9.301.725l96.255 57.13a12.407 12.407 0 0011.606 0l375.25-216.574a11.82 11.82 0 005.716-10.154V295.304a12.088 12.088 0 00-5.845-10.326L517.781 68.575a11.863 11.863 0 00-11.562 0L131.225 285.021a12.112 12.112 0 00-5.93 10.283v433.062a11.489 11.489 0 005.93 10.026l102.783 59.392c55.765 27.903 89.94-4.95 89.94-37.973V332.253a10.781 10.781 0 0110.923-10.795h47.573a10.853 10.853 0 0110.88 10.795V759.81c0 74.452-40.533 117.119-111.103 117.119-21.674 0-38.783 0-86.442-23.51l-98.473-56.618a79.18 79.18 0 01-39.339-68.436V295.304a79.15 79.15 0 0139.339-68.394l375.25-216.83c23.764-13.44 55.295-13.44 78.846 0L926.61 226.91a79.191 79.191 0 0139.424 68.394v433.062a79.365 79.365 0 01-39.424 68.436l-375.207 216.66A78.333 78.333 0 01511.936 1024zm302.973-426.96c0-81.067-54.784-102.656-170.11-117.888-116.522-15.402-128.383-23.38-128.383-50.644 0-22.528 10.027-52.608 96.34-52.608 77.098 0 105.514 16.597 117.204 68.565a10.822 10.822 0 0010.539 8.49h48.682a11.078 11.078 0 007.936-3.456 10.952 10.952 0 002.859-8.362c-7.552-89.514-67.029-131.242-187.22-131.242-107.006 0-170.835 45.141-170.835 120.874 0 82.132 63.487 104.83 166.185 114.985 122.879 12.032 132.393 29.995 132.393 54.144 0 41.94-33.663 59.818-112.724 59.818-99.284 0-121.13-24.917-128.468-74.325a10.883 10.883 0 00-10.795-9.173h-48.511a10.762 10.762 0 00-10.837 10.795c0 63.23 34.389 138.58 198.611 138.58 118.953.042 187.134-46.763 187.134-128.554z" />
            </Icon>
          </SkillBox>
        </SkillSetContainer>
        <Title>
          <span style={{ color: '#caa1d6' }}>Tools </span> I use
        </Title>
        <SkillSetContainer>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M0 0v32h32v-32zM23.855 3.855c1.921 0 3.552 0.588 4.885 1.703l-1.48 2.224c-1.187-0.817-2.296-1.333-3.405-1.333-1.115 0-1.709 0.516-1.709 1.183v0.072c0 0.891 0.595 1.188 2.819 1.781 2.667 0.74 4.145 1.704 4.145 4v0.073c0 2.667-2 4.145-4.812 4.145-2-0.072-4-0.812-5.557-2.219l1.703-2.077c1.188 0.963 2.443 1.629 3.927 1.629 1.183 0 1.849-0.443 1.849-1.255v-0.079c0-0.739-0.443-1.109-2.667-1.703-2.667-0.667-4.292-1.407-4.292-4.073v-0.077c0-2.443 1.923-4 4.589-4zM2.369 4.145h3.037l2 7.709 2.296-7.709h2.224l2.224 7.709 2-7.709h3.109l-3.776 13.261h-2.52l-2.147-7.704-2.224 7.704h-2.443zM3.036 26h12v2h-12z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon viewBox="-11.9 -2 1003.9 995.6" xmlns="http://www.w3.org/2000/svg">
              <path d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z" />
              <path d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z" />
              <path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" />
              <path d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              width="1152"
              height="1024"
              viewBox="0 0 576 512"
              role="img"
            >
              <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M201.8752747,54.0782433c0,0,21.4364471-65.1338196,41.223938-52.4368515c6.1011505,3.9575005,28.0322571,52.7666397,28.0322571,52.7666397s23.4152222-13.686348,26.0534973-8.5745697c30.5354309,93.0720596,2.4105835,158.6967163-37.9259949,211.0665588c53.6490173,50.0983582,62.9822998,101.431427,52.6017456,166.3797913c50.4697571,0.1078491,76.4499512-49.0812988,140.8209229-52.1070251c28.8567505-0.4946594,30.3408203,33.30896,8.574585,38.5856018c-44.7495422,6.3168335-88.8800964,56.2367859-179.0767517,81.6233826c-11.635437,17.7080078-81.1482391,15.7282104-135.8740845,20.611969c-57.9025269,0.6156921-42.9440689-44.4796753-22.0960312-52.1070557c-13.596283-7.4075623-14.1499481-14.7953186-16.8193588-14.0161438c-14.4808578,77.126709-53.9806519,53.6268311-78.1605988,46.9953003c-18.6332264-9.8937683,1.31917-33.1440735,1.31917-33.1440735c-18.1390076,7.7757568-32.4563866-26.5033264-30.340807-60.1869202c1.9787439-26.8780212,31.9897671-52.9315491,31.9897671-52.9315491c-1.788063-67.1047668,17.8139153-110.7582245,69.9158096-147.4168091c-18.204155-21.437439-39.2040443-55.9372559-11.5069275-96.1267624C126.6589584,92.9995117,133.6589203,50.249733,201.8752747,54.0782433z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M128,204.6666718C145.0624084,136.2265015,187.7375946,102,256,102c102.3999939,0,115.2000122,77,166.3999939,89.8333282c34.1376038,8.5598297,64-4.2734985,89.6000061-38.5C494.9375916,221.7734985,452.2623901,256,384,256c-102.3999939,0-115.2000122-77-166.3999939-89.8333282C183.4624023,157.606842,153.6000061,170.4401703,128,204.6666718z M0,358.6666565C17.0623989,290.2265015,59.7375984,256,128,256c102.3999939,0,115.1999969,77,166.3999939,89.8333435c34.1376038,8.5598145,64-4.2734985,89.6000061-38.5C366.9375916,375.7734985,324.2623901,410,256,410c-102.3999939,0-115.1999969-77-166.3999939-89.8333435C55.4624023,311.606842,25.6000004,324.440155,0,358.6666565z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              viewBox="0 0 24 24"
            >
              <path d="M11,2H13V4H13.5A1.5,1.5 0 0,1 15,5.5V9L14.56,9.44L16.2,12.28C17.31,11.19 18,9.68 18,8H20C20,10.42 18.93,12.59 17.23,14.06L20.37,19.5L20.5,21.72L18.63,20.5L15.56,15.17C14.5,15.7 13.28,16 12,16C10.72,16 9.5,15.7 8.44,15.17L5.37,20.5L3.5,21.72L3.63,19.5L9.44,9.44L9,9V5.5A1.5,1.5 0 0,1 10.5,4H11V2M9.44,13.43C10.22,13.8 11.09,14 12,14C12.91,14 13.78,13.8 14.56,13.43L13.1,10.9H13.09C12.47,11.5 11.53,11.5 10.91,10.9H10.9L9.44,13.43M12,6A1,1 0 0,0 11,7A1,1 0 0,0 12,8A1,1 0 0,0 13,7A1,1 0 0,0 12,6Z" />
            </Icon>
          </SkillBox>
          <SkillBox>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M13.989 0.011c-3.219-0.12-6.208 0.953-8.375 3.312-1.735 1.885-2.697 4.339-2.969 7.032h-0.557c-1.151 0-2.088 0.937-2.088 2.083v6.323c0 1.152 0.937 2.089 2.083 2.089h2.787c0.917 1.781 2.073 3.432 3.428 4.911 5.943 6.459 14.249 8.043 19.4 4.021h2.797c0.771 0 1.401-0.636 1.401-1.401v-3.817c0-0.333-0.125-0.645-0.344-0.891 1.145-4.579-0.057-10.188-3.355-14.953 0-0.021 0.011-0.041 0.011-0.063v-2.683c0-0.599-0.484-1.088-1.083-1.093h-2.271c-3.349-3.052-7.245-4.735-10.865-4.869zM16.317 2.917c2.376-0.016 4.923 0.828 7.229 2.463-0.12 0.172-0.192 0.38-0.197 0.593v2.683c0 0.599 0.489 1.093 1.088 1.093h2.688c0.181-0.004 0.364-0.061 0.52-0.156 2.995 4.401 3.647 9.756 1.652 13.563h-2.615c-0.771 0-1.401 0.636-1.401 1.401v2.391c-3.989 1.735-9.333 0.297-13.276-3.984-0.787-0.86-1.479-1.797-2.068-2.797 0.344-0.369 0.552-0.864 0.552-1.407v-6.323c0-1.145-0.932-2.083-2.083-2.083h-0.547c0.317-1.819 1.041-3.48 2.249-4.792 1.631-1.771 3.839-2.636 6.208-2.645zM24.437 5.593h2.688c0.213 0 0.375 0.161 0.375 0.38v2.683c0 0.219-0.161 0.38-0.375 0.38h-2.688c-0.213 0.005-0.385-0.167-0.38-0.38v-2.683c-0.005-0.213 0.167-0.385 0.38-0.38zM2.083 11.063h6.324c0.771 0 1.375 0.609 1.375 1.375v6.323c0 0.767-0.604 1.376-1.375 1.376h-6.319c-0.765 0.004-1.385-0.615-1.38-1.376v-6.323c0-0.765 0.609-1.369 1.375-1.369zM26.683 23.869h3.812c0.391 0 0.699 0.303 0.699 0.688v3.817c0 0.385-0.313 0.699-0.699 0.693h-3.812c-0.385 0.005-0.699-0.308-0.693-0.693v-3.812c-0.005-0.385 0.308-0.699 0.693-0.693z" />
            </Icon>
          </SkillBox>
        </SkillSetContainer>
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

export default About;
