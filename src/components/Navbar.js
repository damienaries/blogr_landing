import React, { useState } from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowDimensions from '../hooks/useWindowDimensions';

/*************************************
@TODO
    - use window width hook to display full navbar or hamburger
    - create open / close states with different content for each dropdown
    - create mobile menu
    - publish to Front End Mentor && update live app
    - hide/shrink hero subtitle on small screens
****************************************/

/* 
    if window width < ~800 display burger
    if burger closed nothing
    if burger clicked => open display <MobileNav />
 */

/*
    Dropdowns
        for each create open-close state && toggle func    
*/

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
        console.log(e.target.innerText);
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
                { width > 768 ? (
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
                ) : null }
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
                        
                    {mobileOpen ? (
                            <div className="mobile-menu">
                                <ul className="mobile-menu-list">
                                <li onClick={e => toggleSubMenu(e)}>
                                    <span className="mobile-menu-item">
                                        Product
                                        <FontAwesomeIcon 
                                            icon="chevron-down"
                                            className="mobile-menu-chevron"/>
                                    </span>
                                    {!productOpen ? null : (
                                        <ul className="submenu-mobile">
                                            <li>Overview</li>
                                            <li>Pricing</li>
                                            <li>Marketplace</li>
                                            <li>Features</li>
                                            <li>Intergrations</li>
                                        </ul>
                                    )}

                                </li>
                                <li onClick={e => toggleSubMenu(e)}>
                                    <span className="mobile-menu-item">
                                        Company
                                        <FontAwesomeIcon 
                                            icon="chevron-down"
                                            className="mobile-menu-chevron"/>
                                    </span>
                                    {!companyOpen ? null : (
                                        <ul className="submenu-mobile">
                                            <li>About</li>
                                            <li>Team</li>
                                            <li>Blog</li>
                                            <li>Careers</li>
                                        </ul>
                                    )}

                                </li>
                                <li onClick={e => toggleSubMenu(e)}>
                                    <span className="mobile-menu-item">
                                        Connect
                                        <FontAwesomeIcon 
                                            icon="chevron-down"
                                            className="mobile-menu-chevron"/>
                                    </span>
                                    {!connectOpen ? null : (
                                        <ul className="submenu-mobile">
                                            <li>Contact</li>
                                            <li>Newsletter</li>
                                            <li>LinkedIn</li>
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

                        ) : null }
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


    .mobile-menu {
        background-color: #fff;
        height: fit-content;
        color: var(--title-primary);
        text-align: center;
        position: absolute;
        width: 85%;
        margin: 4rem auto;

        &-list {
            list-style: none;
            padding: 1rem;
        }

        &-item {

        }

        &-icon {
            position: fixed;
            font-size: 2rem;
            color: #fff;
            font-weight: 300;
            right: 2rem;

            &.hamburger {

            }

            &.close {

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

