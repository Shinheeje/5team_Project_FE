import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";

function Modal({ setModalOpen }: ProsType) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  const Navigate = useNavigate();

  const NavigateToLogin = () => {
    Navigate("/login");
  };

  const NavigateToSignup = () => {
    Navigate("/signup");
  };

  return (
    <div>
      <ModalBackdrop>
        <Modalstyle>
          <div>게시글 작성은 로그인 후 가능합니다</div>
          <Buttonbox>
            <Button
              backgroundColor="#FFC4D0"
              color="#FCF5EE"
              onClick={NavigateToLogin}
            >
              로그인
            </Button>
            <Button
              backgroundColor="#FFC4D0"
              color="#FCF5EE"
              onClick={NavigateToSignup}
            >
              회원가입
            </Button>
            <Button
              backgroundColor="#FFC4D0"
              color="#FCF5EE"
              onClick={closeModal}
            >
              close
            </Button>
          </Buttonbox>
        </Modalstyle>
      </ModalBackdrop>
    </div>
  );
}
const Modalstyle = styled.div`
  width: 400px;
  height: 200px;
  position: fixed;
  align-items: center;
  border-radius: 5px;
  background-color: #fcf5ee;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

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
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: 8px;
  width: 85px;
  height: 35px;
  margin-right: 10px;
  font-weight: bold;
  border: none;
`;

const Buttonbox = styled.div`
  display: flex;
  gap: 5px;
`;
export default Modal;
