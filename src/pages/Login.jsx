import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loginmock, getinga} from "../api/mock";
import { useMutation } from "react-query";
import {Cookies, useCookies} from 'react-cookie'


function Login() {  
  const cookies = new Cookies()

  const [login, setLogin] = useState({
    id:'',
    password:'',
  })
  const onChangeLoginContent = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }


  const mockPostMutation = useMutation(loginmock, {
    onSuccess: (response) => {
      cookies.set('cookie',response.token)
    }
  })

  const mockingaMutation = useMutation(getinga, {
    onSuccess: (response) => {
      console.log(response)
    }
  })
  const cookiesHandler = (e) => {
    e.preventDefault();
    // if (reply.write === '' || reply.content === '') {
    const newCookie = cookies.get('cookie')
    const newHeaders = {
      headers:{
        Authorization : `Bearer ${newCookie}`
      }
    }
    mockingaMutation.mutate(newHeaders);
  }

  const IdInputOnChangeHandler = (e) => {
    e.preventDefault();
    // if (reply.write === '' || reply.content === '') {
    if (setLogin.id === '' || setLogin.password === '') {
      alert('양식을 모두 입력해주세요.');
      return;
    };

    const newPost = {
      // write: reply.write,
      id: login.id,
      password: login.password
    }
    mockPostMutation.mutate(newPost);
  }
  return (
    <LoginWrap>
      <Loginbox>
        <LoginTitle>Login</LoginTitle>
        <IdBox>
          <IdText>아이디</IdText>
          <IdInput type="text" placeholder="아이디" name="id" onChange={onChangeLoginContent}/>
        </IdBox>

        <IdBox>
          <IdText>비밀번호</IdText>
          <IdInput type="password" placeholder="비밀번호" name="password" onChange={onChangeLoginContent}/>
        </IdBox>

        <LoginBtnWrap>
          <LoginBtn onClick={IdInputOnChangeHandler}>로그인</LoginBtn>
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
