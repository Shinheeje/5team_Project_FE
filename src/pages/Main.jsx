import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { getList } from "../api/listdata";
import { useQuery } from "react-query";
import List from "./List";

function Main() {
  const { data } = useQuery("listdata", getList);

  const [modalOpen, setModalOpen] = useState(false);
  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <InfoBox>사이트 이름 및 소개</InfoBox>

      <WriteBox>
        작성하기
        <button onClick={showModal}>click!</button>
        {modalOpen && <Modal setModalOpen={setModalOpen} />}
      </WriteBox>

      <ListWrap>
        {data &&
          data.map((item) => {
            return <List key={item.id} listdata={item} />;
          })}
      </ListWrap>

      <VideoBox>캐릭터관련동영상</VideoBox>
    </>
  );
}
const ListWrap = styled.div`
  display: grid;
  grid-auto-flow: row;

  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 65px;
`;

const InfoBox = styled.div`
  width: 100%;
  background: #fbe8e7;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WriteBox = styled.div`
  border-radius: 20px;
  width: 70%;
  margin-left: 50px;
  background-color: #fbe8e7;
  height: 80px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 20px;
    background-color: #ffcceb;
    border: none;
  }
`;

// const VideoBox = styled.video`
//   height: 100%;
//   width: 20%;
//   position: absolute;
//   /* float: right; */
//   right: 0;
//   top: 230px;
//   background-color: red;
//   margin-right: 50px;
//   /* https://developing-move.tistory.com/145 얘를다시보자 */
// `;

const VideoBox = styled.video`
  height: 100%;
  width: 20%;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 300px;
  background-color: red;
  margin-right: 50px;
`;
export default Main;
