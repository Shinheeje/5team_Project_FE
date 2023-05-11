import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Modal from "./Modal";
import { getList, getUser } from "../api/listdata";
import { useQuery } from "react-query";
import List from "./List";
import Swal from "sweetalert2";

function Main() {
  const { data } = useQuery("getList", getList);
  const { userData } = useQuery("getUser", getUser);
  // console.log(userData)
  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <HeaderTitle />
      <MainContent>

        {/* {state !== "" >} */}
        <WriteBox onClick={showModal}>
          <p>작성하기</p>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
        </WriteBox>

        <ListWrap>
          {data &&
            data.map((item) => {
              return <List key={item.id} listdata={item} />;
            })}
        </ListWrap>

        {/* <VideoBox>캐릭터관련동영상</VideoBox> */}
      </MainContent>
    </>
  );
}

const MainContent = styled.div`
  position: relative;
  height: 1500px;
  display: flex;
  justify-content: center;
`

const ListWrap = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  width: 80%;
  height: 600px;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
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
  &:hover{
    background-color:  #FF9966;
    transition: all 0.3s;
    p{
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
        <p>CATCH <InlineTitle>CATCH</InlineTitle> CATCH <InlineTitle>CATCH</InlineTitle> CATCH <InlineTitle>CATCH</InlineTitle> CATCH <InlineTitle>CATCH</InlineTitle> CATCH <InlineTitle>CATCH</InlineTitle></p>
      </TitleContent>
    </TitleWrap>
  );
};

const InlineTitle = styled.span`
  color: red;
`

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
