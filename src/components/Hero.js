import React from 'react';
import styled from '@emotion/styled';
import pattern from '../assets/images/bg-pattern-intro.svg';

export default function Hero() {
    return (
        <StyledHero>
            <section className="hero-content">
                <h1 className="hero-title">A modern publishing platform</h1>
                <h2 className="hero-subtitle">Grow your audience and build your online brand</h2>
                <div className="hero-cta-container">
                    <button className="hero-cta free">
                        Start for Free
                    </button>
                    <button className="hero-cta">
                        Learn More
                    </button>
                </div>
            </section>
        </StyledHero>
    )
}

const StyledHero = styled.div`
    height: 80vh;
    width: 100%; 
    background-image: linear-gradient(
        to right,
        rgba(255, 143, 112, .95),
        rgba(255, 61, 84, .95)
        ),
        url(${pattern});
    display: flex;
    justify-content: center;
    align-items: center; 
    background-position: center;
    background-size: 200%;
    text-align: center;
    border-bottom-left-radius: 100px;
    color: #fff;


    .hero-title {
        font-size: 4rem;
        font-weight: 600;
    }

    .hero-subtitle {
        font-weight: 100;
    }

    .hero-cta-container {
        width: fit-content;
        margin: 2rem auto;

        .hero-cta {
            display: inline-block;
            padding: .75rem 1.5rem;
            border-radius: 50px;
            margin: 1rem .5rem;
            background-color: transparent;
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            border: 1px solid #fff;

            &.free {
                color: var(--button-text);
                background-color: #fff;
                border: none;

                &:hover {
                    color: #fff;
                    background-color: var(--button-hover);
                }
            }

            &:hover {
                background-color: white;
                color: var(--button-text);
                cursor: pointer;
            }
        }
    }

    @media only screen and (max-width: 900px) {
        .hero-title {
            font-size: 3.5rem;
        }
    }

    @media only screen and (max-width: 500px) {
        height: 100vh;


        .hero-title {
            font-size: 2.5rem;
        }

        .hero-content {
            width: 85%;
        }
    }
`