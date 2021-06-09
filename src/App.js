import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Future from './components/Future';
import Infrastructure from './components/Infrastructure';
import Desktop from './components/Desktop';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';
import './App.css';

// Create Globally accesible icon library
library.add(faChevronDown);

export default function App() {
  return (
    <StyledApp>
      <Navbar />
      <Hero />
      <Future />
      <Infrastructure />
      <Desktop />
      <Footer />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`