import React from 'react'
import styled from 'styled-components'
import AboutusSection from './AboutusSection'
import ContactInfo from './ContactInfo'
import UsefulLinksSection from './UsefulLinksSection'

const FooterSection = () => {
    return (
        <StyledFooter>
            <Container>
                <AboutusSection />
                <UsefulLinksSection />
                <ContactInfo />
            </Container>
            <Copyright>
                {/* <hr /> */}
                <p>Copyright © 2024 Tech Innovators. All rights reserved.</p>
            </Copyright>
        </StyledFooter>
    )
}

export default FooterSection

const StyledFooter = styled.footer`
    background-color: #000219;
    background-repeat: no-repeat;
    background-size: cover;
    /* z-index: 1; */
    background-position: -150%;
`


const Container = styled.div`
    display: flex;
    padding: 0rem 5rem;
    @media screen and (max-width:900px){
        flex-direction: column;
        padding: 2rem;
    }
`;

const Copyright = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    color: white;
    font-size: 1.1rem;
    p{
        color: #fff;
    }
    @media screen and (max-width:900px){
        font-size: 0.7rem
    }
`