import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Headerbox = styled.header`
  background-color: #fbe8e7;

  div {
    float: right;
    margin-right: 10px;
  }
`;

function Header() {
  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  return location.pathname == "/" ? (
    <>
      <Headerbox>
        <image>로고</image>
        <div>
          <Link to="/login">로그인</Link>
        </div>
        <div>
          <Link to="/signup">회원가입</Link>
        </div>
      </Headerbox>
      <Outlet />
    </>
  ) : (
    <>
      <Headerbox>
        <image>로고</image>
        <div>로그아웃</div>
      </Headerbox>
      <Outlet />
    </>
  );
}

export default Header;
