import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>Buy & Sell</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/create">Create Post</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 10px;
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
`;

const NavLinks = styled.div``;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 15px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;