import React, { useState } from 'react';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";


const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Navbar = styled.nav`
  height: 60px;
  background-color: #000219;
  position: sticky;
  z-index: 100;
  top: 0;
  color: white;
  padding: 4rem;
`;

const LogoContainer = styled.div`
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    cursor: pointer;
  }
`;

const NavElements = styled.div`
  &.active {
    width: 270px;
  }

  @media (max-width: 600px) {
    position: absolute;
    right: 0;
    top: 125px;
    background-color: #000219;
    width: 0;
    height: calc(100vh - 60px);
    transition: all 0.3s ease-in;
    overflow: hidden;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
    margin-right: 60px;

    @media (max-width: 768px) {
      margin-right: 30px;
    }

    @media (max-width: 600px) {
      margin-right: unset;
      margin-top: 1.5rem;
      margin-left: 1.5rem;
    }
`;

const NavElement = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;


  &:hover {
    font-weight: 500;
    border-bottom: 2px solid #fff;
  }
`;

const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <Navbar>
      <Container>
        <LogoContainer>
          <img src="https://via.placeholder.com/100x50" alt="" />
        </LogoContainer>
        <MenuIcon onClick={handleShowNavbar}>
          <RxHamburgerMenu style={{ fontSize: '1.5rem'}} />
        </MenuIcon>
        <NavElements className={showNavbar ? 'active' : ''}>
          <NavList>
            <NavItem>
            <NavElement href="#home">Home</NavElement>
            </NavItem>
            <NavItem>
              <NavElement href="#products">Products</NavElement>
            </NavItem>
            <NavItem>
              <NavElement href="#contact">Contact</NavElement>
            </NavItem>
          </NavList>
        </NavElements>
      </Container>
    </Navbar>
  );
};

export default Header;