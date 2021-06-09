import React from 'react';
import styled from '@emotion/styled';
import circles from '../assets/images/bg-pattern-circles.svg';
import phones from '../assets/images/illustration-phones.svg';

export default function Infrastructure() {
    return (
        <StyledInf>
            <img 
                src={phones} 
                alt="phone mockup"
                className="inf-phones" />
            <div className="inf-text">
                <h4 className="inf-text-title">
                    State of the Art Infrastructure
                </h4>
                <p className="inf-text-body">
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
                </p>
            </div>
        </StyledInf>
    )
}

const StyledInf = styled.section`
    height: 40vh;
    width: 100%;
    background-image: linear-gradient(
        to top right,
        rgba(44, 45, 63, .9),
        rgba(63, 65, 100, 0.9)
        ),
        url(${circles});
    background-position: revert;
    background-repeat: no-repeat;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .inf-phones {
        height: 150%;
 
    }

    .inf-text {
        width: 40%;
        margin-right: 3rem;
        color: #fff;
        font-family: var(--ff-main);

        &-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }
    }

    @media only screen and (max-width: 900px) {
        height: 60vh;
        flex-direction: column;
        margin-top: 6rem;
        position: relative;
        background-position: bottom;
        text-align: center;

        .inf-phones {
            position: absolute;
            max-width: 60%;
            height: auto;
            top: -60%;
        }

        .inf-text {
            width: 70%;
            margin: 10rem auto 0;
        }
    }

    @media only screen and (max-width: 768px) {
        margin-top: 12rem;
        
        .inf-phones {
            top: -55%;
            max-width: 65%;
        }
    }

    @media only screen and (max-width: 500px) {
        margin-top: 5rem;

        .inf-phones {
            top: -30%;
        }
    }
`