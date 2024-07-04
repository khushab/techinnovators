import React from 'react';
import styled from 'styled-components';

const AboutusSection = () => {
    return (
        <Container>
            <HeaderDiv>
                <h3>About Us</h3>
            </HeaderDiv>
            <p style={{ color: "white" }}>Tech Innovators empowers businesses with cutting-edge software solutions designed to enhance productivity and drive innovation.</p>
        </Container>
    )
}

export default AboutusSection

const Container = styled.div`
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    p{
        color: #fff;
        line-height: 1.5;
        font-size: 1.1rem;
        span{
            font-weight: bold;
        }
    }
    @media screen and (max-width:900px){
        padding: 1rem 0rem;
        margin: 0rem;
        text-align: center;
    }
`

const HeaderDiv = styled.div`
    h3{
        color: #fff;
        display: inline-block;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 0.1rem solid #4b5280;
    }
    /* margin-left: 0; */
    @media screen and (max-width:900px){
        display: flex;
        align-items: center;
        justify-content: center;
        h3{
            margin-left: 0rem;
        }
    }
`