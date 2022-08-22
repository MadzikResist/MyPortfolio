import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';
import resume from 'images/CV.pdf';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #130f1a;
  flex-direction: column;
`;
const CVContainer = styled.div`
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
const CV = () => {
  return (
    <>
      {/*<StarsComponent />*/}
      <Nav />
      <Container>
        <CVContainer>
          <Title>
            My <span style={{ color: '#caa1d6' }}>Resume </span>
          </Title>
          <embed src={resume} width="210mm" height="297mm" type="application/pdf" />
        </CVContainer>
      </Container>
    </>
  );
};

export default CV;
