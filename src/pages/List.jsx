import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api/listdata";
import { useQuery } from "react-query";

function List(listdata) {
  const navigate = useNavigate();

  const data = listdata.listdata;
  console.log("리스트:", data);


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

        <ListItemTitle>{data.title}</ListItemTitle>
        <ListItemUserid>{data.userid}</ListItemUserid>
      </ImageBox>
    </div>
  );
}

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 30px;
  width: 300px;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 6, 0.4);
  &:hover{
    transform: translateY(-10px);
    transition: all 0.5s;
  }
`;

const ListItemUserid = styled.p`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 900;
`

const ListItemTitle = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 900;
`

const Image = styled.img`
  display: block;
  height: 250px;
`;

export default List;
