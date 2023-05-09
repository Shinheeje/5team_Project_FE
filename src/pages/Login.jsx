import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "react-query";
import { loginCertify } from "../api/login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";


function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    userid: "",
    password: "",
  });

  const onChangeLoginContent = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //TODO  토큰 보낼때 Cookies.get('token') 으로 보내기

  const LoginMutation = useMutation(loginCertify, {
    onSuccess: (response) => {
      const token = response.headers.get('access_key').split(' ')[1]
      Cookies.set('token', token)
    },
  });

  const loginHandler = (e) => {
    e.preventDefault();

    if (!login.userid) {
      alert("아이디 입력");
    } else if (!login.password) {
      alert("비밀번호 입력");
    }

    const newlogin = {
      userid: login.userid,
      password: login.password,
    };
    LoginMutation.mutate(newlogin);
  };

  return (
    <LoginWrap>
      <Loginbox>
        <LoginTitle>Login</LoginTitle>
        <IdBox>
          <IdText>아이디</IdText>
          <IdInput
            type="text"
            placeholder="아이디"
            name="userid"
            onChange={onChangeLoginContent}
          />
        </IdBox>
        <IdBox>
          <IdText>비밀번호</IdText>
          <IdInput
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={onChangeLoginContent}
          />
        </IdBox>
        
        <LoginBtnWrap>
          {/* <LoginBtn onClick={IdInputOnChangeHandler}>로그인</LoginBtn> */}
          <LoginBtn onClick={loginHandler}>로그인</LoginBtn>
          <LoginBtn color="#FBE8E7" to={"/signup"}>
            회원가입
          </LoginBtn>
        </LoginBtnWrap>
      </Loginbox>
    </LoginWrap>
  );
}
const LoginWrap = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Loginbox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LoginTitle = styled.h1`
  font-size: 54px;
  margin-bottom: 60px;
`;
const IdBox = styled.div`
  margin-bottom: 40px;
`;
const IdText = styled.p`
  font-size: 14px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const IdInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  outline: none;
  &::placeholder {
    font-weight: 900;
  }
`;
const LoginBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const LoginBtn = styled(Link)`
  width: 50%;
  height: 50px;
  border: none;
  background-color: ${(props) => {
    return props.color ? "#FFC4D0" : "#F7DDDE";
  }};
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    filter: brightness(90%);
    transition: all 0.5s;
  }
`;
export default Login;
