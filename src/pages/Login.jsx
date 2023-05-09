import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loginmock, getinga } from "../api/signup";
import { useMutation } from "react-query";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import { userlogin } from "../api/login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const cookies = new Cookies();

//쿠키저장
export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
//로그인되어있는지확인해야하는부분에 사용
export const getCookie = (name) => {
  return cookies.get(name);
};

//로그아웃용도
export const removeCookie = (name, option) => {
  return cookies.remove(name, { ...option });
};

//로그인로딩중일때
// const [loading, setLoading] = useState(false);
// const [msg, setMsg] = useState("");
// useEffect(() => {
//   if (msg) {
//     setTimeout(() => {
//       setMsg("");
//       setLoading(false);
//     }, 1500);
//   }
// }, [msg]);

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
  // const mockPostMutation = useMutation(loginmock, {
  //   onSuccess: (response) => {
  //     console.log("바보:", response);
  //   },
  // });

  //얘가 진짜정상작동된애
  // const userlogin = async (newLogin) => {
  //   const response = await axios.post(
  //     "http://3.37.22.175:8080/api/login",
  //     newLogin
  //   );
  //   console.log(response.headers.access_key);
  //   // return response.data;

  //   if (response.headers.access_key) {
  //     setCookie("token", `JWT ${response.headers.access_key}`, {
  //       path: "/",
  //       sameSite: "strict",
  //     });
  //   }
  // };

  const userlogin = async (newLogin) => {
    const response = await axios
      .post("http://3.37.22.175:8080/api/login", newLogin)
      .then((response) => {
        console.log("리스:", response.data);

        if ((response.data = "아이디 또는 비밀번호가 일치하지 않습니다.")) {
          alert("로그인실패");
        }
      });

    // console.log(response.status);
    // console.log(response.headers.access_key);
    // return response.data;

    //토큰담기
    if (response.headers.access_key) {
      setCookie("token", `${response.headers.access_key}`, {
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
    },
  });
  const testHandler = (e) => {
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

  // const IdInputOnChangeHandler = (e) => {
  //   e.preventDefault();

  //   // if (reply.write === '' || reply.content === '') {
  //   if (setLogin.id === "" || setLogin.password === "") {
  //     alert("양식을 모두 입력해주세요.");
  //     return;
  //   }

  //   const newPost = {
  //     // write: reply.write,
  //     userid: login.userid,
  //     password: login.password,
  //   };
  //   userIdMutation.mutate(newPost);
  // };
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
