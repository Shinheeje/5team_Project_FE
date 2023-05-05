import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  background: #fbe8e7;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: fixed;
    right: 0;
    margin-right: 10px;
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
  background-color: red;
  margin-top: 30px;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

const ImageBox = styled.div`
  flex-direction: column;
`;

const Image = styled.image`
  width: 30px;
  height: 30px;
  border: 1px solid red;
`;

const VideoBox = styled.video`
  float: right;
  height: 100%;
  width: 20%;
  background-color: red;
  margin-right: 50px;
`;

function Main() {
  return (
    <>
      <Header>
        사이트 이름 및 소개
        <div>로그인</div>
        <div>회원가입</div>
      </Header>

      <WriteBox>
        작성하기
        <button>click</button>
      </WriteBox>

      <ListWrap>
        <ImageBox>
          <Image>조선아</Image>
          <div>타이틀</div>
        </ImageBox>
      </ListWrap>

      <VideoBox>캐릭터관련동영상</VideoBox>
    </>
  );
}

export default Main;
