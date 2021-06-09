import React from 'react';
import styled from '@emotion/styled';
import laptop from '../assets/images/illustration-laptop-desktop.svg';

export default function Desktop() {
    return (
        <StyledDesktop>
            <div className="desktop-images">
                    <img src={laptop} alt="laptop graphic"/>
            </div>
            <div className="desktop-right">

                <div className="desktop-text">
                    <article className="desktop-item">
                        <h4 className="desktop-item-title">
                            Free, open, simple
                        </h4>
                        <p className="desktop-item-body">
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </p>
                    </article>

                    <article className="desktop-item">
                        <h4 className="desktop-item-title">
                            Powerful tooling
                        </h4>
                        <p className="desktop-item-body">
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.
                        </p>
                    </article>
                </div>
            </div>
            
        </StyledDesktop>
    )
}

const StyledDesktop = styled.section`
    height: 900px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    .desktop-images {
        overflow: hidden;
        width: 70%;
        position: absolute;
        left: -21%;

        & > img {
            width: 100%;
            height: auto;
        }
    }

    .desktop-right {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 3rem;

        .desktop-text {
            width: 90%;
            margin: 8rem auto;
        }

        .desktop-item {
            margin-bottom: 3rem;

            &-title {
                color: var(--title-primary);
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            &-body {
                color: var(--text-primary);
                line-height: 2;
            }
        }

    }

    @media only screen and (max-width: 900px) {
        margin-top: 3rem;
        flex-direction: column;
        height: fit-content;

        .desktop-images {
            display: block;
            position: static;
            width: 90%;
        }

        .desktop-right {
            margin: 2rem auto;
            width: 100%;
            text-align: center;

            .desktop-text {
                margin: 3rem auto;
            }
        }
    }

`
