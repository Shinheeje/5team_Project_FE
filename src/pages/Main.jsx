import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function Main() {
  //민트색모달오픈
  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <Header>
        <image>로고</image>
        <div>로그인</div>
        <div>회원가입</div>
      </Header>

      <InfoBox>사이트 이름 및 소개</InfoBox>

      <WriteBox>
        작성하기
        <button onClick={showModal}>click</button>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </WriteBox>

      <ListWrap>
        <ImageBox>
          <Image>조선아</Image>
          <div>타이틀</div>
        </ImageBox>
        <ImageBox>
          <Image>조선아</Image>
          <div>타이틀</div>
        </ImageBox>
        <ImageBox>
          <Image>조선아</Image>
          <div>타이틀</div>
        </ImageBox>
        <ImageBox>
          <Image>조선아</Image>
          <div>타이틀</div>
        </ImageBox>
        <ImageBox>
          <Image>조선아</Image>
          <div>타이틀</div>
        </ImageBox>
      </ListWrap>

      <VideoBox>캐릭터관련동영상</VideoBox>
    </>
  );
}
const InfoBox = styled.div`
  width: 100%;
  background: #fbe8e7;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  background-color: #fbe8e7;

  div {
    float: right;
  }
`;

const WriteBox = styled.div`
  width: 70%;
  margin-left: 50px;
  background-color: #fbe8e7;
  height: 100px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 20px;
  }
`;

const ListWrap = styled.div`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 30px;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
`;

const ImageBox = styled.div`
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const Image = styled.image`
  display: block;
  width: 270px;
  height: 250px;
  border: 1px solid red;
`;

const VideoBox = styled.video`
  height: 100%;
  width: 20%;
  position: absolute;
  right: 0;
  top: 230px;
  background-color: red;
  margin-right: 50px;
`;
export default Main;
