import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Headerbox = styled.header`
  padding: 10px;
  background-color: #fbe8e7;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  float: right;
  margin-right: 10px;

  &:hover {
    color: #ffaaa4;
  }
`;

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  return !token ? (
    <>
      <Headerbox>
        <image>로고</image>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/">Signup</StyledLink>
      </Headerbox>
      <Outlet />
    </>
  ) : (
    <>
      <Headerbox>
        <image>로고</image>
        <StyledLink to="/">Logout</StyledLink>
      </Headerbox>
      <Outlet />
    </>
  );
}

export default Header;
