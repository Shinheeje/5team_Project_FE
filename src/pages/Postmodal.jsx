import React from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

function Postmodal({ isOpen, closeModal }) {
  const Navigate = useNavigate();

  const NavigateToLogin = () => {
    Navigate("/login");
  };

  const NavigateToSignup = () => {
    Navigate("/signup");
  };
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <ModalBackdrop onClick={closeModal}>
        <Modalstyle onClick={(e) => e.stopPropagation()}>
          <ModalTitle>게시글 작성은 로그인 후 가능합니다</ModalTitle>
          <Buttonbox>
            <Button
              backgroundColor="#FF9966"
              color="#FCF5EE"
              onClick={NavigateToLogin}
            >
              로그인
            </Button>
            <Button
              backgroundColor="#FF9966"
              color="#FCF5EE"
              onClick={NavigateToSignup}
            >
              회원가입
            </Button>
            <Button
              id="closeModal"
              backgroundColor="transparent"
              color="#FCF5EE"
              onClick={closeModal}
            >
              ❌
            </Button>
          </Buttonbox>
        </Modalstyle>
      </ModalBackdrop>
    </div>
  );
}

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.8);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Button = styled.button`
  background-color: #dcefb5;
  /* background-color: ${(props) => props.backgroundColor}; */

  color: black;
  border-radius: 8px;
  width: 185px;
  height: 50px;
  margin-right: 10px;
  font-weight: 900;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
    transition: all 0.5s;
  }

  &:last-child {
    background-color: "#FFC4D0";
    position: absolute;
    color: white;
    top: 15px;
    right: 10px;
    width: 30px;
    height: 30px;
  }
`;

const Buttonbox = styled.div`
  display: flex;
  gap: 5px;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const Modalstyle = styled.div`
  width: 600px;
  height: 400px;
  position: fixed;
  align-items: center;
  border-radius: 16px;
  background-color: #fcf5ee;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default Postmodal;
