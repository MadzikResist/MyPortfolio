import React, { useRef, useEffect, useState } from 'react';
import StarsComponent from 'components/Stars';
import Footer from 'components/Footer';
import styled from 'styled-components';
import background2 from 'images/background2.png';
import photo2 from 'images/photo2.png';
import aboutPhoto from 'images/aboutPhoto.png';
import Nav from 'components/Nav';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    height: auto;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
const StyledWrapper = styled.div`
  margin-top: 69px;
  gap: 16px;
  // background: url(${background2}) center/contain;
    background:  rgba(23, 6, 38, 1) 0%;
  width: 100%;
  padding: 0 10%;
  height: auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 0;
    background: url(${background2}) center/contain;
    height: 80vh;
  }
  @media (min-width: 1200px) {
    height: 70vh;
  }
  @media (min-width: 1400px) {
    height: 70vh;
  }
`;

const Title = styled.p`
  //color: #caa1d6;
  color: white;
  font-size: 1.2rem;
  position: relative;
  z-index: 10;
    margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 2.5rem;
      
      
  }
`;
const Name = styled.h1`
  color: #caa1d6;
  font-size: 2rem;
  position: relative;
  z-index: 10;
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;
const TextContainer = styled.div`
  position: relative;
  width: 100%;
  background: none;
  z-index: 15;
  margin-top: 64px;
  @media (min-width: 768px) {
    position: relative;
    width: 50%;
    background: none;
    z-index: 15;
    margin-top: 0;
  }
  @media (min-width: 1200px) {
    position: relative;
    background: none;
    z-index: 15;
    margin-top: 0;
    width: 50%;
  }
  @media (min-width: 1400px) {
    position: relative;
    background: none;
    z-index: 15;
    margin-top: 0;
    width: 40%;
  }
`;
const TypeWriterStyle = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 200;
  opacity: 40%;
  margin-top: 4vh;
  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;
const Photo = styled.div`
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: url(${photo2}) center/cover no-repeat;
  position: relative;
  z-index: 15;
  border-radius: 14px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    left: 0;
    transform: translateX(0);
    width: 350px;
    height: 350px;
    margin-top: 32px;
  }
  @media (min-width: 1200px) {
    margin-top: 96px;
    width: 400px;
    height: 400px;
  }
  @media (min-width: 1400px) {
    margin-top: 96px;
    width: 450px;
    height: 450px;
  }
`;
const Introduce = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 64px;
  background: rgb(23, 6, 38);
  background: linear-gradient(
    176deg,
    rgba(23, 6, 38, 1) 0%,
    rgba(45, 13, 74, 1) 52%,
    rgba(98, 34, 145, 1) 98%
  );
  @media (min-width: 768px) {
    width: 100%;
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 64px;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
const About = styled.h1`
  color: #caa1d6;
  font-size: 2.5rem;
  position: relative;
  z-index: 15;
  text-align: center;
`;

const TextAbout = styled.p`
  color: white;
  font-size: 1.3rem;
  width: 80%;
  position: relative;
  z-index: 15;
  @media (min-width: 768px) {
    width: 60%;
    font-size: 1.5rem;
  }
`;
const TextPhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    margin-top: 32px;
    gap: 0;
  }
  @media (min-width: 1200px) {
    gap: 16px;
    width: 65%;
  }
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 72px;
  position: relative;
  z-index: 15;
`;
const PhotoAbout = styled.div`
  background: url(${aboutPhoto}) center/cover;
  width: 200px;
  height: 200px;
  @media (min-width: 400px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const StyledContactForm = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 80%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      -webkit-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
      -moz-box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);
      box-shadow: 0 1px 12px -2px rgba(135, 70, 144, 1);

      &:focus {
        border: 2px solid #707bd4;
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid #707bd4;
      }
    }

    label {
      margin-top: 1rem;
      color: white;
      font-size: 1.3rem;
    }

    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      background: #e04c8e;
      color: white;
      border: none;
      font-size: 1.5rem;
      font-weight: 600;
      padding-bottom: 32px;
      transition: background ease-out 0.5s;

      :hover {
        background: #707bd4;
      }
    }
  }

  @media (min-width: 768px) {
    width: 500px;
    form {
      width: 100%;
    }
  }
`;
const Icon = styled.svg`
  fill: white;
  width: 30px;
  height: 30px;
`;
const Home = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false)
  const [fillData, setFillData] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current.user_email.value)
    if(form.current.user_email.value && form.current.user_name.value && form.current.message.value){
      emailjs.sendForm('service_97md4wc', 'template_bvivkch', form.current, 'J8sozXzUAlWcNHh6S').then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          setEmailSent(true)
          setFillData(false)
          form.current.reset()
        },
        (error) => {
          console.log(error.text);
        },
      );
    }
    else{
      setFillData(true)
    }
  };

  return (
    <>
      <StarsComponent />
      <Nav />
      <Container>
        <StyledWrapper>
          <TextContainer>
            <Title>Hi, my name is</Title>
            <Name>MAGDALENA SZPITALNA</Name>
            <TypeWriterStyle>
              <Typewriter
                options={{
                  strings: ['Full-Stack Developer'],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'Writer',
                }}
              />
            </TypeWriterStyle>
          </TextContainer>
          <Photo />
        </StyledWrapper>
        <Introduce>
          <About>
            <span style={{ color: 'white' }}>About </span>me
          </About>
          <TextPhotoContainer>
            <TextAbout>
              I am fluent in <span style={{ color: '#caa1d6' }}>JavaScript</span>, especially
              <span style={{ color: '#caa1d6' }}> React.</span> <br /> <br />I am interested in
              building websites and mobile applications. <br />
              Whenever possible, I improve my programming skills and create new projects. <br />
              <br />
              Following technological trends allows me to update my knowledge.
            </TextAbout>
            <PhotoAbout />
          </TextPhotoContainer>
          <Contact>
            <About>
              Contact <span style={{ color: 'white' }}>with me </span>
            </About>
            <Icons>
              <a
                href="https://github.com/MadzikResist"
                target="_blank"
                rel="noreferrer"
                style={{ zIndex: '15' }}
              >
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </Icon>
              </a>
              <a
                href="https://www.linkedin.com/in/magdalena-szpitalna-/"
                target="_blank"
                rel="noreferrer"
                style={{ zIndex: '15' }}
              >
                <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </Icon>
              </a>
            </Icons>
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value={emailSent ? "Email Sent" : "Send"} />
              </form>
            </StyledContactForm>
            {fillData ? <h3 style={{color: '#B2B2B2'}}>Fields cannot be empty</h3> : emailSent && !fillData ? <h3 style={{color: 'white'}}>Thank you!</h3> : <></>}

          </Contact>
        </Introduce>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
