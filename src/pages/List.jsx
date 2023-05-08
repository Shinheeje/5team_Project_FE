import React from "react";
import styled from "styled-components";

function List(listdata) {
  // console.log(listdata.listdata);
  const data = listdata.listdata;
  return (
    <div>
      <ListWrap>
        <ImageBox>
          {/* <Image src={data.files} alt="" /> */}
          <img src={data.files} alt="" />
          <div>{data.title}</div>
          <div>{data.id}</div>
        </ImageBox>
      </ListWrap>
    </div>
  );
}

const ListWrap = styled.div`
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
