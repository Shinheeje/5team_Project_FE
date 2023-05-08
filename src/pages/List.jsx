import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function List(listdata) {
  const navigate = useNavigate();
  // console.log(listdata.listdata);
  const data = listdata.listdata;

  console.log(data.files);

  return (
    <div>
      <ImageBox
        onClick={() => {
          navigate(`/detail/${data.id}`);
        }}
      >
        <Image src={data.files} alt="" />
        <div>{data.title}</div>
        <div>{data.id}</div>
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
