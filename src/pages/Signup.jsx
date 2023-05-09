import React, { useState, useRef } from "react";
import styled from "styled-components";
import { addmock } from "../api/signup";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
function Signup() {
  const navigate = useNavigate();
  const pwRef = useRef(null);
  const [signUp, setSignUp] = useState({
    userid: "",
    password: "",
    pwCheck: "",
  });
  const [idConfirm, setIdConfirm] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [pwAccord, setPwAccord] = useState("");
  const idConfirmHandler = () => {
    if (signUp.userid !== "" && /[a-zA-z0-9]{4,15}$/g.test(signUp.userid)) {
      setIdConfirm(false);
    } else {
      setIdConfirm(true);
    }
  };
  const pwConfirmHandler = () => {
    if (
      signUp.password !== "" &&
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,15}$/g.test(
        signUp.password
      )
    ) {
      setPwConfirm(false);
    } else {
      setPwConfirm(true);
    }
    pwRef.current.focus();
  };
  const pwAccordHandler = () => {
    if (signUp.pwCheck !== "" && signUp.password !== signUp.pwCheck) {
      setPwAccord(true);
    } else {
      setPwAccord(false);
    }
  };
  const onChangeSignUpContent = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };
  const mockPostMutation = useMutation(addmock, {
    onSuccess: (response) => {
      console.log(response);
      navigate("/login");
    },
  });
  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    if (signUp.userid === "" || signUp.password === "") {
      alert("양식을 모두 입력해주세요.");
      return;
    }
    const newPost = {
      userid: signUp.userid,
      password: signUp.password,
    };
    mockPostMutation.mutate(newPost);
  };
  console.log(signUp.password);
  return (
    <SignupWrap>
      <Signupbox>
        <SignupTitle>Sign Up</SignupTitle>
        <IdBox>
          <IdText>아이디</IdText>
          <IdInput
            type="text"
            placeholder="아이디"
            name="userid"
            onChange={onChangeSignUpContent}
            onBlur={idConfirmHandler}
          />
          {idConfirm && (
            <TextComfirm>
              영문자, 숫자가 각각 1자 이상 포함된 4~15자 이내 문자여야 합니다.
            </TextComfirm>
          )}
        </IdBox>
        <IdBox>
          <IdText>비밀번호</IdText>
          <IdInput
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={onChangeSignUpContent}
            onBlur={pwConfirmHandler}
          />
          {pwConfirm && (
            <TextComfirm>
              영문자, 숫자, 특수문자가 각각 1자 이상 포함된 8~15자 이내 문자여야
              합니다.
            </TextComfirm>
          )}
        </IdBox>
        <IdBox>
          <IdText>비밀번호 확인</IdText>
          <IdInput
            type="password"
            placeholder="비밀번호 확인"
            name="pwCheck"
            onChange={onChangeSignUpContent}
            onBlur={pwAccordHandler}
            ref={pwRef}
          />
          {pwAccord && (
            <TextComfirm>작성한 비밀번호가 일치하지않습니다.</TextComfirm>
          )}
        </IdBox>
        {/* <IdBox>
          <IdText>닉네임</IdText>
          <IdInput type="text" placeholder="닉네임" />
        </IdBox> */}
        <SignupBtnWrap>
          <SignupBtn color="#FBE8E7" onClick={onSubmitClickHandler}>
            회원가입
          </SignupBtn>
        </SignupBtnWrap>
      </Signupbox>
    </SignupWrap>
  );
}
const SignupWrap = styled.div`
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Signupbox = styled.form`
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
const SignupTitle = styled.h1`
  font-size: 54px;
  margin-bottom: 60px;
`;
const IdBox = styled.div`
  margin-bottom: 20px;
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
const TextComfirm = styled.p`
  font-size: 14px;
  color: red;
  margin-top: 20px;
  padding-left: 20px;
  font-weight: 700;
`;
const SignupBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const SignupBtn = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  background-color: ${(props) => {
    return props.color ? "#FFC4D0" : "#F7DDDE";
  }};
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    filter: brightness(90%);
    transition: all 0.5s;
  }
`;
export default Signup;