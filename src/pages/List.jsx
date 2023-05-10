import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/listdata";
import { useQuery } from "react-query";

function List(listdata) {
  const navigate = useNavigate();

  const data = listdata.listdata;
  console.log("리스트:", data);

  // const 변수 = true 변수가 ? 버튼보이는거 : 안보이는거
  return (
    <div>
      <ImageBox
        onClick={() => {
          navigate(`/detail/${data.id}`, {
            state: {
              currentUserInfo: data,
            },
          });
        }}
      >
        <Image src={data.imageUrl} alt="" />
        <div>{data.title}</div>
        <div>{data.userid}</div>
      </ImageBox>
    </div>
  );
}

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;

  div {
    margin-top: 10px;
  }
`;

const Image = styled.img`
  display: block;
  width: 270px;
  height: 250px;
  border: 1px solid #fbe8e7;
`;

export default List;
