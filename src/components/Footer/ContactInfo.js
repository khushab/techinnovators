import React from 'react';
import styled from 'styled-components';

const ContactInfo = () => {
    return (
        <div>
            <Container>
                <HeaderDiv>
                    <h3>Contact Info</h3>
                </HeaderDiv>

                <p>
                    <span>Address:</span> 623 xyz, USA
                </p>
                <p>
                    <span>Phone:</span> 83558-978710 / 92310-48489
                </p>
                <p>
                    <span>Email:</span> info@techinnovators.com
                </p>
            </Container>
        </div>
    )
}

export default ContactInfo


const Container = styled.div`
    padding: 1rem 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    p{
        color: #fff;
        line-height: 1.2;
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
    @media screen and (max-width:900px){
        display: flex;
        align-items: center;
        justify-content: center;
        h3{
            margin-left: 0rem;
        }
    }
`