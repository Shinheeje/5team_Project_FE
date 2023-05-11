import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { getList, getUser } from "../api/listdata";
import { useQuery } from "react-query";
import List from "./List";
import Postmodal from "./Postmodal";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import Character from "./Character";
import MainFooter from "./Footer";

function Main() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const { data } = useQuery("getList", getList);
  const { userData } = useQuery("getUser", getUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const NavigateToPost = () => {
    navigate("/post");
  };

  return (
    <>
      <HeaderTitle />
      <MainContent>
        {/* //로그인되어있을때 */}
        {token ? (
          <WriteBox onClick={NavigateToPost}>
            <p>작성하기</p>
          </WriteBox>
        ) : (
          <WriteBox onClick={openModal}>
            <p>로그인 후 작성</p>
            <Postmodal isOpen={isModalOpen} closeModal={closeModal} />
          </WriteBox>
        )}

        <ListWrap>
          {data &&
            data.map((item) => {
              return <List key={item.id} listdata={item} />;
            })}
        </ListWrap>
        <Character />
      </MainContent>
      <MainFooter />
    </>
  );
}

const MainContent = styled.div`
  position: relative;
  height: 1500px;
  display: flex;
  justify-content: center;
`;

const ListWrap = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  height: 600px;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
  position: absolute;
  top: 100px;
`;

const WriteBox = styled.div`
  border-radius: 14px;
  width: 10%;
  background-color: white;
  height: 60px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 130px;
  border: 2px solid black;
  font-size: 900;
  &:hover {
    background-color: #ff9966;
    transition: all 0.3s;
    p {
      font-size: 20px;
      color: white;
      transition: all 0.3s;
    }
  }
  p {
    font-weight: 900;
  }
`;

const HeaderTitle = () => {
  return (
    <TitleWrap>
      <TitleContent>
        <p>
          CATCH <InlineTitle>CATCH</InlineTitle> CATCH{" "}
          <InlineTitle>CATCH</InlineTitle> CATCH{" "}
          <InlineTitle>CATCH</InlineTitle> CATCH{" "}
          <InlineTitle>CATCH</InlineTitle> CATCH{" "}
          <InlineTitle>CATCH</InlineTitle>
        </p>
      </TitleContent>
    </TitleWrap>
  );
};

const InlineTitle = styled.span`
  color: red;
`;

const TitleAnimation = keyframes`
  0% { margin-left: 100%; }
  100% { margin-left: -100%;  }
`;

const TitleWrap = styled.div`
  width: 100%; /* 바깥 사이즈 설정 */
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 180px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  background-color: white;
`;

const TitleContent = styled.div`
  white-space: nowrap;
  animation: ${TitleAnimation} 15s linear infinite;
`;


export default Main;
