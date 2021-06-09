import React from 'react';
import styled from '@emotion/styled';
import editor from '../assets/images/illustration-editor-desktop.svg';

export default function Future() {
    return (
        <StyledFuture>
            <h2 className="future-title">
                Designed for the future
            </h2>
            <div className="future-container">
                <div className="future-left">
                    <div className="future-text">
                        <article className="future-item">
                            <h4 className="future-item-title">
                                Introducing an extensible editor
                            </h4>
                            <p className="future-item-body">
                                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                                change the looks of a blog.
                            </p>
                        </article>

                        <article className="future-item">
                            <h4 className="future-item-title">
                                Robust content management
                            </h4>
                            <p className="future-item-body">
                                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                            </p>
                        </article>
                    </div>
            
                </div>
                <div className="future-images">
                    <img src={editor} alt="editor graphic"/>
                </div>
            </div>
            
        </StyledFuture>
    )
}

const StyledFuture = styled.section`
    width: 100%;
    position: relative;

    .future-title {
        position: absolute;
        top: 8rem;
        left: 50%;
        transform: translate(-50%);
        font-size: 3rem;
        color: var(--title-primary);
        width: fit-content;
    }

    .future-container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .future-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;

            .future-text {
                width: 90%;
                margin: 20rem auto 12rem;
            }

            .future-item {
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

    }
    
    .future-images {
        overflow: hidden;
        width: 50%;
        
        & > img {
            margin: 9rem 0 0;
            width: 150%;
        }
    }

    @media only screen and (max-width: 768px) {

        .future-title {
            top: 3rem;
            width: fit-content;
        }

        .future-container {
            flex-direction: column-reverse;
            align-items: center;

            .future-left {
                width: 100%;
                text-align: center;

                .future-text {
                    width: 85%;
                    margin: 3rem auto;
                }
            }
        }

        


        .future-images {
            width: 100%;
            text-align: center;

            & > img {
                width: 90%;
                margin: 9rem auto 0;
            }
        }
    }

    @media only screen and (max-width: 500px) {
        .future-title {
            font-size: 2.5rem;
        }
        
    }

`