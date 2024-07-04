import React from "react";
import styled from "styled-components";

const UsefulLinksSection = () => {
  return (
    <Container>
      <HeaderDiv>
        <h3>Useful Links</h3>
      </HeaderDiv>
      <LinksContainer>
        <a href="#home">Home</a>
        <a href="#products">Products</a>

        <a href="#contact">Contact Us</a>
      </LinksContainer>
    </Container>
  );
};

export default UsefulLinksSection;

const Container = styled.div`
  padding: 1rem 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and (max-width: 900px) {
    padding: 1rem 0rem;
    margin: 0rem;
  }
`;

const HeaderDiv = styled.div`
  h3 {
    color: #fff;
    display: inline-block;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 0.1rem solid #4b5280;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      margin-left: 0rem;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: white;
    padding: 0.2rem;
    font-size: 1.1rem;
    width: max-content;
    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;
