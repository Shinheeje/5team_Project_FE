import React from "react";
import styled from "styled-components";

function List(title, id) {
  return (
    <ListWrap>
      <ImageBox>
        <Image>조선아</Image>
        <div>{title}</div>
      </ImageBox>
    </ListWrap>
  );
}

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

export default List;
