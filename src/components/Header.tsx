import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #fff;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #ddd;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>My Store</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cart">Cart</StyledLink>
        <StyledLink to="/checkout">Checkout</StyledLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
