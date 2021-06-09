import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.svg';

export default function Footer() {
    return (
        <StyledFooter>
            <img 
                src={logo} 
                alt="footer logo"
                className="footer-logo"
            />
            <div className="footer-col">
                <h4 className="footer-list-title">Product</h4>
                <ul className="footer-list">
                    <li className="footer-list-item">
                        Overview
                    </li>
                    <li className="footer-list-item">
                        Pricing
                    </li>
                    <li className="footer-list-item">
                        Marketplace
                    </li>
                    <li className="footer-list-item">
                        Features
                    </li>
                    <li className="footer-list-item">
                        Integrations
                    </li>
                </ul>
            </div>
            <div className="footer-col">
                <h4 className="footer-list-title">Company</h4>
                <ul className="footer-list">
                    <li className="footer-list-item">
                        About
                    </li>
                    <li className="footer-list-item">
                        Team
                    </li>
                    <li className="footer-list-item">
                        Blog
                    </li>
                    <li className="footer-list-item">
                        Careers
                    </li>
                </ul>
            </div>
            <div className="footer-col">
                <h4 className="footer-list-title">Connect</h4>
                <ul className="footer-list">
                    <li className="footer-list-item">
                        Contact
                    </li>
                    <li className="footer-list-item">
                        Newsletter
                    </li>
                    <li className="footer-list-item">
                        LinkedIn
                    </li>
                </ul>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: var(--bg-dark);
    color: var(--text-secondary);
    height: 40vh;
    border-top-right-radius: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding: 3rem 5rem;
    font-family: var(--ff-secondary);

    .footer-logo {
        width: 50%;
    }

    .footer-list-title {
        font-weight: 600;
        margin-bottom: 2rem;
    }

    .footer-list {
        list-style-type: none;
        line-height: 2;
    }

    .footer-list-item:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        text-align: center;
        height: fit-content;
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
        
        .footer-logo {
            margin: 0 auto 1rem;
        }
    }

`