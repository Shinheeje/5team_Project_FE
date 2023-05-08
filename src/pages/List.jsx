import React from "react";
import styled from "styled-components";

function List(listdata) {
  // console.log(listdata.listdata);
  const data = listdata.listdata;
  return (
    <div>
<<<<<<< HEAD
      <ListWrap>
        <ImageBox>
          {/* <Image src={data.files} alt="" /> */}
          <img src={data.files} alt="" />
          <div>{data.title}</div>
          <div>{data.id}</div>
        </ImageBox>
      </ListWrap>
=======
      <ImageBox>
        <Image src={data.files} alt="" />
        <div>{data.title}</div>
        <div>{data.id}</div>
      </ImageBox>
>>>>>>> 5a294215ae76790347e85b38798a4e271be97ee7
    </div>
  );
}

<<<<<<< HEAD
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

=======
>>>>>>> 5a294215ae76790347e85b38798a4e271be97ee7
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
