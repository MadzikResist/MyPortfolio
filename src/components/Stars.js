import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const StarsAnimation = keyframes`
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 0.1;
  }
  30% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.1;
  }
`;

const Stars = styled.div`
  opacity: 0;
  width: 3px;
  height: 3px;
  position: fixed;
  background: white;
  border-radius: 50%;
  animation: ${StarsAnimation} 3s ease-in-out infinite;

  top: ${(props) => `${props.top}%`};
  left: ${(props) => `${props.left}%`};
  animation-duration: ${(props) => `${props.duration}s`};
`;

const StarsComponent = () => {
  let arrOfStars = Array(70)
    .fill()
    .map((_, i) => i + 1);
  arrOfStars = arrOfStars.map(() => {
    return {
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      duration: Math.floor(Math.random() * 10) + 5,
    };
  });
  return (
    <>
      {arrOfStars.map((item) => {
        return <Stars {...item} />;
      })}
    </>
  );
};

export default StarsComponent;
