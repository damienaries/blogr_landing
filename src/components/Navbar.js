import React from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    return (
        <Navigation>
            <div className="nav-left">
                <img 
                className="nav-logo"
                alt="logo"
                src={Logo}
                />
                <ul className="nav-list">
                <li >
                    <span className="nav-list-item">
                        Product
                        <FontAwesomeIcon 
                            icon="chevron-down"
                            className="nav-list-item-icon"/>
                    </span>
                </li>
                <li >
                    <span className="nav-list-item">
                        Company
                        <FontAwesomeIcon 
                            icon="chevron-down"
                            className="nav-list-item-icon"/>
                    </span>
                </li>
                <li >
                    <span className="nav-list-item">
                        Connect
                        <FontAwesomeIcon 
                            icon="chevron-down"
                            className="nav-list-item-icon"/>
                    </span>
                </li>
                
            </ul>
            </div>

            <div className="nav-cta">
                <div className="nav-cta-item">
                    Login
                </div>
                <div className="nav-cta-item signup">
                    Sign up
                </div>
            </div>
            

        </Navigation>
    )

}

const Navigation = styled.nav`
    height: 4rem;
    width: 80%;
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    color: #fff;
    font-family: var(--ff-secondary);

    .nav-left {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding: .5rem;


        .nav-logo {
            width: 30%;
        }

        .nav-list {
            display: flex;
            list-style: none;
            margin-left: 2rem;

            &-item {
                display: flex;
                margin-right: 1rem;
                font-weight: 600;
                align-items: center;
                letter-spacing: 1px;
                padding: .5rem 1rem;
                transition: all .3s;

                &-icon {
                    margin-left: .5rem;
                    font-size: .8rem;
                }

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }

    }

    .nav-cta {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        display: flex;

        .nav-cta-item {
            display: block;
            padding: .75rem 1.5rem;
            border-radius: 50px;
            margin-right: .25rem;
            background-color: transparent;
            color: #fff;
            font-size: 1rem;
            font-weight: 600;

            &:hover {
                background-color: white;
                color: var(--button-hover);
                cursor: pointer;
            }

            &.signup {
                background-color: #fff;
                color: var(--button-text);

                &:hover {
                    background-color: var(--button-hover);
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }

    @media only screen and (max-width: 900px) {
        width: 95%;

        .nav-list {
            margin-left: 0;
            
            .nav-list-item {
                margin-right: .75rem;
                padding: 0;

                &-icon {
                    margin-left: .25rem;
                    font-size: .7rem;
                }
            }
        }

        
    }
    
`

