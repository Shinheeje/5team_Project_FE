import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Headerbox = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
background-color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  float: right;
  margin-right: 10px;
  font-size: 30px;
  font-weight: 900;

  &:hover {
    color: red;
    transition: all 0.4s;
    transform: scale(0.9);
  }
`;

const HeaderLogo = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;

  border-radius: 8px;
  &:hover {
    background-color: #d1b9ee;
    transition: all 0.4s;
    transform: scale(0.9);
  }
`

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("token");

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  return !token ? (
    <>
      <Headerbox>
        <HeaderLogo src={`${process.env.PUBLIC_URL}/img/Logo.png`} alt="" onClick={() => {
          navigate('/')
        }} />
        <div style={{
          display: "flex",
          gap: '10px'
        }}>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/">Signup</StyledLink>
        </div>
      </Headerbox>
      <Outlet />
    </>
  ) : (
    <>
      <Headerbox>
        <HeaderLogo src={`${process.env.PUBLIC_URL}/img/Logo.png`} alt="" onClick={() => {
          navigate('/')
        }} />
        <img src="" alt="" />
        <StyledLink to="/">Logout</StyledLink>
      </Headerbox>
      <Outlet />
    </>
  );
}


export default Header;
