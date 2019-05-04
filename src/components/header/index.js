import React from 'react';

import { Navbar, Container } from 'rbx';
import LogoImage from '../../assets/images/logo-v1-horizontal.png';
import SearchBox from '../search_box_component';

import "../../styles/header.scss";

const Header = () => (
  <div className="top-navbar">
    <Container>
      <Navbar>
          <Navbar.Brand>
            <img src={LogoImage} alt="OneBitCode" />
          </Navbar.Brand>

          <Navbar.Menu>
            <Navbar.Segment as="div" className="navbar-item navbar-center" align="left">
              <SearchBox />
            </Navbar.Segment>
          </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
);

export default Header;