import React, { useState } from "react";
import styled from "styled-components";
import { FaMapMarker, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Section = styled.section`
  padding: 50px;
  text-align: center;
`;

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && email) {
      window.alert('Thank you for contacting us');
      setEmail('');
      setName('');
    }

  };

  return (
    <Section id="contact">
        <Container>
          <FormContainer>
            <h4>Write Us</h4>
            <form onSubmit={handleSubmit}>
              <div className="form__element">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__element">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email or Phone number"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </FormContainer>
          <DetailsContainer>
            <div class="column-right">
              <h2 id="input-head1">Our contact details</h2>
              <div class="address">
                <div className="iconDiv">
                  <FaMapMarker className="icond" />
                </div>
                <div class="details">
                  <h3>Address</h3>
                  <p>623 xyz, USA</p>
                </div>
              </div>
              <div class="address">
                <div className="iconDiv">
                  <FaPhoneAlt className="icond" />
                </div>
                <div class="details">
                  <h3>Phone</h3>
                  <p>08997839823</p>
                </div>
              </div>
              <div class="address">
                <div className="iconDiv">
                  <FaEnvelope className="icond" />
                </div>
                <div class="details">
                  <h3>Email</h3>
                  <p>info@techinnovators.com</p>
                </div>
              </div>
            </div>
          </DetailsContainer>
        </Container>
    </Section>
  );
};

export default ContactSection;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5rem 0rem;
  background: #fff;
  h4 {
    margin-bottom: 1rem;
    color: white;
    font-size: 3rem;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  background: #fff;
  border-radius: 0.5rem;
  color: #1b1b1b;
  width: 70%;
  padding: 2rem 2rem;
  h4 {
    color: #000219;
    font-weight: 800;
    padding: 0.5rem 0rem;
    font-size: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 2rem 0rem; */
    width: 100%;
    height: 100%;
    .form__element {
      width: 100%;
    }
    input {
      appearance: none;
      outline: none;
      border: none;
      border: 1px solid #1b1b1b;
      width: 100%;
      padding: 0.8rem 0.4rem;
      border-radius: 0.3rem;
      margin-bottom: 1rem;
    }
    textarea {
      appearance: none;
      outline: none;
      resize: none;
      width: 100%;
      height: 5rem;
      border: none;
      border: 1px solid #1b1b1b;
      padding: 0.5rem 0.3rem;
      border-radius: 0.3rem;
    }
    button {
      cursor: pointer;
      width: 100%;
      padding: 0.6rem;
      font-size: 1.3rem;
      color: #fff;
      transition: 0.3s ease;
      margin: 1rem 1rem 0rem 1rem;
      /* border: 2px solid #23d997; */
      border: none;
      transition: all 0.5s ease;
      background: #e21f36;
      &:hover {
        background: orangered;
      }
      @media screen and (max-height: 900px) {
        padding: 0.6rem;
        font-size: 1.1rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 30vh;
    width: 98vw;
    h4 {
      padding: 0.2rem 0.3rem;
      text-align: center;
    }
  }
`;

const DetailsContainer = styled.div`
  color: black !important;
  padding: 2rem 2rem;
  h2 {
    color: #000219;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 800;
    padding: 1rem;
  }
  p {
    color: #000219;
  }
  h3 {
    color: #000219;
    text-align: left;
  }
  .address {
    display: flex;
    color: black;
    padding: 0.5rem 0rem;
  }

  .iconDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
  }

  .icond {
    font-size: 3rem;
    margin-right: 1rem;
    color: #e21f36;
  }
  .details {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
`;
