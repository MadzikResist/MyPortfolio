import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import ReactAudioPlayer from 'react-audio-player';
import Magdalena from 'audio/Magdalena.mp3';
import Ori from 'audio/Ori.mp3';
import ThisLand from 'audio/ThisLand.mp3';
import impra from 'audio/impra.mp3';
import GoT from 'audio/GoT.mp3';
import EnterTheEast from 'audio/EnterTheEast.mp3';
import LaLaLand from 'audio/LaLaLand.mp3';
import RiverFlowsInYou from 'audio/RiverFlowsInYou.mp3';
import styled from 'styled-components';
import Footer from 'components/Footer';

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

const AudioContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 69px;

  @media (min-width: 768px) {
    padding: 5% 10%;
  }
`;
const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 16px;
  gap: 8px;
  text-align: center;
`;
const TitlePiano = styled.h2`
  color: #caa1d6;
  font-size: 1.8rem;
  text-align: center;
`;
const PianoBox = styled.div`
  border: 1px solid white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 8px 64px 8px;
  -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
  @media (min-width: 768px) {
    padding: 32px 32px 64px 32px;
    height: 100%;
  }
`;
const PianoBoxContainer = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  gap: 32px;
  z-index: 15;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    padding: 0;
    gap: 40px;
    grid-auto-rows: 1fr;
  }
`;

const Piano = () => {
  return (
    <>
      <Nav />
      <StarsComponent />
      <Container>
        <AudioContainer>
          <Title>
            Listen to my <span style={{ color: '#caa1d6' }}>Piano Covers </span>
          </Title>
          <PianoBoxContainer>
            <PianoBox>
              <TitlePiano>This Land</TitlePiano>
              <ReactAudioPlayer src={ThisLand} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>Ori and the Blind Forest</TitlePiano>
              <ReactAudioPlayer src={Ori} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>Magdalena</TitlePiano>
              <ReactAudioPlayer src={Magdalena} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>Enter The East</TitlePiano>
              <ReactAudioPlayer src={EnterTheEast} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>Game of Thrones</TitlePiano>
              <ReactAudioPlayer src={GoT} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>La La Land</TitlePiano>
              <ReactAudioPlayer src={LaLaLand} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>River Flows In You</TitlePiano>
              <ReactAudioPlayer src={RiverFlowsInYou} controls style={{ width: '95%' }} />
            </PianoBox>
            <PianoBox>
              <TitlePiano>Remix</TitlePiano>
              <ReactAudioPlayer src={impra} controls style={{ width: '95%' }} />
            </PianoBox>
          </PianoBoxContainer>
        </AudioContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Piano;
