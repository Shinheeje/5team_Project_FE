import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loginmock, getinga } from "../api/signup";
import { useMutation } from "react-query";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import { userlogin } from "../api/login";
const cookies = new Cookies();
export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name) => {
  return cookies.get(name);
};
function Login() {
  // export const removeCooki
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
  // const mockPostMutation = useMutation(loginmock, {
  //   onSuccess: (response) => {
  //     cookies.set("cookie", response.token);
  //   },
  // });
  // const mockingaMutation = useMutation(getinga, {
  //   onSuccess: (response) => {
  //     console.log(response);
  //   },
  // });
  const userIdMutation = useMutation(login, {
    onSuccess: (response) => {
      console.log("바보:", response);
    },
  });
  const userlogin = async (newLogin) => {
    const response = await axios.post(
      "http://3.37.22.175:8080/api/login",
      newLogin
    );
    console.log(response.headers.access_key);
    // return response.data;
    if (response.headers.access_key) {
      Cookies("token", `${response.headers.access_key}`, {
        path: "/",
        sameSite: "strict",
      });
    }
  };
  const LoginMutation = useMutation(userlogin, {
    onSuccess: (data) => {
      const responseData = data || {}; // 응답 데이터가 없을 경우 빈 객체로 초기화
      const responseHeaders = responseData.headers.get("ACCESS_KEY") || {};
      console.log(responseHeaders);
      // ACCESS_KEY 추출
      const accessKey = responseHeaders["ACCESS_KEY"];
      // console.log(accessKey);
    },
  });
  const testHandler = (e) => {
    e.preventDefault();
    const newlogin = {
      userid: login.userid,
      password: login.password,
    };
    LoginMutation.mutate(newlogin);
  };
  //쿠키핸들러
  // const cookiesHandler = (e) => {
  //   e.preventDefault();
  //   // if (reply.write === '' || reply.content === '') {
  //   const newCookie = cookies.get("cookie");
  //   const newHeaders = {
  //     headers: {
  //       Authorization: `Bearer ${newCookie}`,
  //     },
  //   };
  //   mockingaMutation.mutate(newHeaders);
  // };
  const IdInputOnChangeHandler = (e) => {
    e.preventDefault();
    // axios.post("http://3.37.22.175:8080/api/login", {
    //   userid: login.userid,
    //   password: login.password,
    // });
    //얘가 원래거
    // const response = axios.post("http://3.37.22.175:8080/api/login", {
    //   userid: login.userid,
    //   password: login.password,
    // });
    //얘가 원래거2
    // const response = axios
    //   .post("http://3.37.22.175:8080/api/login", {
    //     userid: login.userid,
    //     password: login.password,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    //희제ㅣ님
    // const response = axios
    //   .post("http://3.37.22.175:8080/api/login", {
    //     userid: login.userid,
    //     password: login.password,
    //   })
    //   .then((response) => {
    //     console.log(response.data["ACCESS_KEY"]);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log(response.data["refresh-token"]);
    // const login = async (newLogin) => {
    //   const response = await axios.post(
    //     "http://3.37.22.175:8080/api/login",
    //     newLogin
    //   );
    //   return response.data;
    // };
    // const accessToken = response.ACCESS_TOKEN;
    // console.log(accessToken);
    // if (reply.write === '' || reply.content === '') {
    if (setLogin.id === "" || setLogin.password === "") {
      alert("양식을 모두 입력해주세요.");
      return;
    }
    const newPost = {
      // write: reply.write,
      userid: login.userid,
      password: login.password,
    };
    userIdMutation.mutate(newPost);
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
        x
        <LoginBtnWrap>
          {/* <LoginBtn onClick={IdInputOnChangeHandler}>로그인</LoginBtn> */}
          <LoginBtn onClick={testHandler}>로그인</LoginBtn>
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





