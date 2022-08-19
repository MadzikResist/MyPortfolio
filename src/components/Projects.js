import * as React from 'react';
import StarsComponent from 'components/Stars';
import Nav from 'components/Nav';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #130f1a;
  flex-direction: column;
  height: 100vh;
`;
const Projects = () => {
  return (
    <>
      <StarsComponent />
      <Nav />
      <Container></Container>
    </>
  );
};

export default Projects;
