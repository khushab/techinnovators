import React from 'react';
import styled from 'styled-components';

const OpeningSection = () => {
  return (
    <Section id="home">
      <BannerImage src="https://cdn.pixabay.com/photo/2017/09/03/06/12/abstract-2709402_1280.png" alt="Banner" />
      <Container>
        <Headline>We work to make your dreams come true</Headline>
        <Description>Revolutionize Your Workflow with Tech Innovators’ Cutting-Edge Solutions</Description>
        <Button>Learn More</Button>
      </Container>
    </Section>
  );
};

export default OpeningSection;


const Section = styled.section`
  position: relative;
  text-align: center;
  color: white;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 90vh;

  @media (max-width: 1000px) {
    height: 50vh
  }
`;

const Headline = styled.h1`
  padding: 0 20px;
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0px;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 10px;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`