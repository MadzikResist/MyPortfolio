import * as React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: block;
  opacity: 1;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  position: fixed;
  z-index: 20;
  @media (min-width: 768px) {
    display: flex;
    position: fixed;
    background: transparent;
    padding: 40px;
    z-index: 1;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 1400px) {
    display: flex;
    width: 80%;
    background: transparent;
  }
`;
const Logo = styled.div``;

const Button = styled.button`
  display: flex;
  height: 40px;
  background: transparent;
  position: relative;
  border: none;
  gap: 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: block;
    height: 60px;
    position: relative;
    border: none;
    margin-top: 16px;
    :after {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      width: 0;
      height: 4px;
      background: #caa1d6;
      transition: width 0.3s;
    }

    :hover::after {
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-top: 0;
  }
`;
const Icon = styled.svg`
  fill: white;
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1200px) {
    width: 30px;
    height: 30px;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: #201c2b;
  position: relative;
  z-index: 1;
  transition: ease-in-out 0.4s;
  transform: ${(props) => (props.open ? `translateY(0)` : 'translateY(-100%)')};

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    gap: 16px;
    padding: 16px;
    transform: translateY(0);
    background: transparent;
    width: 70%;
  }
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;
const Text = styled.p`
  color: white;
  font-size: 1.1rem;
  margin-top: 8px;
  @media (min-width: 768px) {
    margin-top: 3px;
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
`;
const Title = styled.p`
  color: #caa1d6;
  font-size: 1.3rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const ContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  position: relative;
  z-index: 2;
  background: rgb(32, 28, 43);
  background: linear-gradient(0deg, rgba(32, 28, 43, 1) 73%, rgba(54, 25, 75, 1) 100%);
  @media (min-width: 768px) {
    background: transparent;
    width: 30%;
  }
`;
const HamburgerButton = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  @media (min-width: 768px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #caa1d6;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
const BackgroundContainerNav = styled.div`
  @media (min-width: 768px) {
    position: fixed;
    height: 80px;
    width: 100vw;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 50;
    background: ${(props) => (props.show ? `rgba(32, 28, 43, 0.6)` : 'transparent')};
    backdrop-filter: ${(props) => (props.show ? `blur(3px)` : 'none')};
    transition: background 0.5s ease;
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <BackgroundContainerNav show={show}>
      <Navbar>
        <ContainerNav>
          <Logo>
            <Title>MadzikResist</Title>
          </Logo>
          <HamburgerButton
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div />
            <div />
            <div />
          </HamburgerButton>
        </ContainerNav>
        <Buttons open={open}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button>
              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
              </Icon>
              <Text>Home</Text>
            </Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button>
              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
              </Icon>
              <Text>About</Text>
            </Button>
          </Link>

          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button>
              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
              </Icon>
              <Text>Projects</Text>
            </Button>
          </Link>
          <Link to="/piano" style={{ textDecoration: 'none' }}>
            <Button>
              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z" />
              </Icon>
              <Text>Piano</Text>
            </Button>
          </Link>
          <Link to="/cv" style={{ textDecoration: 'none' }}>
            <Button>
              <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z" />
              </Icon>
              <Text>Resume</Text>
            </Button>
          </Link>
        </Buttons>
      </Navbar>
    </BackgroundContainerNav>
  );
};

export default Nav;
