import React, { useState } from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowDimensions from '../hooks/useWindowDimensions';

/*************************************
@TODO
    - publish to Front End Mentor && update live app
    - add dropdowns to full screen nav
****************************************/

export default function Navbar() {
    const { width } = useWindowDimensions();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [connectOpen, setConnectOpen] = useState(false);


    // toggle mobile menu state
    const toggleMobile = () => {
        setMobileOpen(!mobileOpen);
    }

    // toggle sub menus
    const toggleSubMenu = (e) => {
        console.log(e.target.innerText)
        if (e.target.innerText === 'Product') {
            setProductOpen(!productOpen);
            
        } else if (e.target.innerText === 'Company') {
            setCompanyOpen(!companyOpen);
        } else {
            setConnectOpen(!connectOpen);
        }
    }
 
    return (
        <Navigation>
            <div className="nav-left">
                <img 
                className="nav-logo"
                alt="logo"
                src={Logo}
                />
                {/* Left side either list or empty if mobile */}
                { width > 768 && (
                    <ul className="nav-list">
                        <li onClick={e => toggleSubMenu(e)}>
                            <span className="nav-list-item">
                                Product
                                <FontAwesomeIcon 
                                    icon="chevron-down"
                                    className="nav-list-item-icon"
                                    style={{
                                        transform: productOpen ? 'rotateX(180deg)' : ''
                                    }}/>
                            </span>
                            {productOpen && (
                                <ul className="submenu">
                                    <li className="submenu-item">Overview</li>
                                    <li className="submenu-item">Pricing</li>
                                    <li className="submenu-item">Marketplace</li>
                                    <li className="submenu-item">Features</li>
                                    <li className="submenu-item">Intergrations</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={e => toggleSubMenu(e)}>
                            <span className="nav-list-item">
                                Company
                                <FontAwesomeIcon 
                                    icon="chevron-down"
                                    className="nav-list-item-icon"
                                    style={{
                                        transform: companyOpen ? 'rotateX(180deg)' : ''
                                    }}/>
                            </span>
                            {companyOpen && (
                                <ul className="submenu">
                                    <li className="submenu-item">About</li>
                                    <li className="submenu-item">Team</li>
                                    <li className="submenu-item">Blog</li>
                                    <li className="submenu-item">Careers</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={e => toggleSubMenu(e)}>
                            <span className="nav-list-item">
                                Connect
                                <FontAwesomeIcon 
                                    icon="chevron-down"
                                    className="nav-list-item-icon"
                                    style={{
                                        transform: connectOpen ? 'rotateX(180deg)' : ''
                                    }}/>
                            </span>
                            {connectOpen && (
                                <ul className="submenu">
                                    <li className="submenu-item">Contact</li>
                                    <li className="submenu-item">Newsletter</li>
                                    <li className="submenu-item">LinkedIn</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                )}
            </div>
                
            {/* Right side either buttons or mobile menu icons */}
            { 
                width > 768 ? (
                    <div className="nav-cta">
                    <div className="nav-cta-item">
                            Login
                        </div>
                        <div className="nav-cta-item signup">
                            Sign up
                        </div>
                    </div>
                ) : !mobileOpen ? (
                        <FontAwesomeIcon 
                            icon="bars" 
                            className="mobile-menu-icon hamburger"
                            onClick={toggleMobile}
                        />
                    ) : (
                        <FontAwesomeIcon 
                            icon="times" 
                            className="mobile-menu-icon close"
                            onClick={toggleMobile}     
                        />
                    ) 
            }                        
                        
                    {mobileOpen && (
                            <div className="mobile-menu">
                                <ul className="mobile-menu-list">
                                <li 
                                    className="mobile-menu-item" 
                                    onClick={e => toggleSubMenu(e)}
                                    >
                                    <span>
                                        Product
                                        <FontAwesomeIcon 
                                            icon="chevron-down"
                                            className="mobile-menu-chevron"
                                            style={{
                                                transform: productOpen ? 'rotateX(180deg)' : ''
                                            }}/>
                                    </span>
                                    {productOpen && (
                                        <ul className="submenu-mobile">
                                            <li className="submenu-mobile-item">Overview</li>
                                            <li className="submenu-mobile-item">Pricing</li>
                                            <li className="submenu-mobile-item">Marketplace</li>
                                            <li className="submenu-mobile-item">Features</li>
                                            <li className="submenu-mobile-item">Intergrations</li>
                                        </ul>
                                    )}

                                </li>
                                <li 
                                    className="mobile-menu-item"
                                    onClick={e => toggleSubMenu(e)}
                                    >
                                    <span>
                                        Company
                                        <FontAwesomeIcon 
                                            icon="chevron-down"
                                            className="mobile-menu-chevron"
                                            style={{
                                                transform: companyOpen ? 'rotateX(180deg)' : ''
                                            }}/>
                                    </span>
                                    {companyOpen && (
                                        <ul className="submenu-mobile">
                                            <li className="submenu-mobile-item">About</li>
                                            <li className="submenu-mobile-item">Team</li>
                                            <li className="submenu-mobile-item">Blog</li>
                                            <li className="submenu-mobile-item">Careers</li>
                                        </ul>
                                    )}

                                </li>
                                <li 
                                    className="mobile-menu-item"
                                    onClick={e => toggleSubMenu(e)}
                                    >
                                    <span>
                                        Connect
                                        <FontAwesomeIcon 
                                            icon="chevron-down"
                                            className="mobile-menu-chevron"
                                            style={{
                                                transform: connectOpen ? 'rotateX(180deg)' : ''
                                            }}/>
                                    </span>
                                    {connectOpen && (
                                        <ul className="submenu-mobile">
                                            <li className="submenu-mobile-item">Contact</li>
                                            <li className="submenu-mobile-item">Newsletter</li>
                                            <li className="submenu-mobile-item">LinkedIn</li>
                                        </ul>
                                    )}

                                </li>
                            </ul>
                            
                            <div className="nav-cta-mobile">
                                <div className="nav-cta-item">
                                    Login
                                </div>
                                <div className="nav-cta-item signup">
                                    Sign up
                                </div>
                            </div>
                        </div>

                    )}
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
                    transition: all .3s ease;
                }

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }

            .submenu {
                    background-color: #fff;
                    color: var(--text-primary);
                    list-style: none;
                    text-align: left;
                    padding: 1rem;
                    position: absolute;
                    border-radius: 6px;
                    box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.3);

                    &-item {
                        padding: .5rem;

                        &:hover {
                            cursor: pointer;
                            color: var(--title-secondary);
                            font-weight: 500;
                        }
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


    .mobile-menu {
        background-color: #fff;
        height: fit-content;
        color: var(--title-primary);
        font-size: 1.2rem;
        width: 85%;
        position: relative;
        max-width: 400px;
        margin: 4rem auto;
        border-radius: 6px;
        padding: 1rem;
        box-shadow: 0px 7px 15px 0px rgba(0,0,0,0.3);
        z-index: 10;


        &-list {
            list-style: none;
            padding: 1rem;
            border-bottom: 1px solid #eee;
            width: 100%;
            text-align: center;

        }

        &-item {
            width: 100%;
            padding: .25rem .5rem;
            margin-bottom: 1rem;
            
            &:hover {
                font-weight: 500;
                filter: brightness(110%);
                cursor: pointer;
            }

            .mobile-menu-chevron {
                margin-left: 1rem;
                color: var(--bg-gradient-red-2);
                transition: all .3s ease;
                font-size: .7rem;
            }

            .submenu-mobile {
                list-style: none;
                font-weight: 400;
                padding: 1rem;
                margin-top: 1rem;
                background-color: #ddd;
                color: var(--text-primary);
                border-radius: 6px;

                &-item {
                    padding: .5rem 0;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
        }

        &-icon {
            position: fixed;
            font-size: 2rem;
            color: #fff;
            font-weight: 300;
            right: 2rem;

            &:hover {
                cursor: pointer;
            }
        }

        .nav-cta-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem;

            .nav-cta-item {
            display: block;
            padding: .75rem 1.5rem;
            border-radius: 50px;
            margin-right: .25rem;
            background-color: transparent;
            color: var(--bg-dark);
            font-size: 1.2rem;
            
            &:first-of-type {
                margin-bottom: .5rem;
            }

            &:hover {
                background-color: white;
                color: var(--button-hover);
                cursor: pointer;
                border: 1px solid var(--button-hover);
            }

            &.signup {
                color: #fff;
                background-image: linear-gradient(
                        to right, 
                        var(--bg-gradient-red-1),
                        var(--bg-gradient-red-2));

                &:hover {
                    background-color: var(--button-hover);
                    filter: brightness(110%);
                    cursor: pointer;
                }
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

