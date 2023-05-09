import React from "react";
import { useState } from "react";
import { useMutation, useQueryClient, useQuery } from "react-query";
import styled from "styled-components";
import { addPosts, getPosts, removePosts } from "../api/data";
import { useParams } from "react-router-dom";
import { deleteList } from "../api/listdata";
import { detailList } from "../api/listdata";
import { useNavigate } from "react-router-dom";
import Modify from "./Modify";

function Detail() {
  const params = useParams();
  const { data } = useQuery("comments", getPosts);
  // const params = useParams()
  const [reply, setReply] = useState({
    // write: '',
    content: "",
  });

  const navigate = useNavigate();

  console.log(params);
  const detaildata = useQuery("list", () => detailList(params.id));
  console.log(detaildata);
  // const detaillist = detaildata.data;
  // console.log(detaillist);

  const queryClient = useQueryClient();

  // * 댓글추가
  const addMutation = useMutation(addPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const onChangeReplyContent = (e) => {
    setReply({
      ...reply,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    // if (reply.write === '' || reply.content === '') {
    if (reply.content === "") {
      alert("양식을 모두 입력해주세요.");
      return;
    }

    const newPost = {
      // write: reply.write,
      content: reply.content,
    };
    addMutation.mutate(newPost);
  };

  // * 댓글삭제
  const removeMutation = useMutation(removePosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
  });

  const removeReplyHandler = (event, id) => {
    event.preventDefault();
    removeMutation.mutate(id);
  };

  //게시글 삭제
  const deleteListMutation = useMutation(deleteList, {
    onSuccess: () => {
      queryClient.invalidateQueries("list");
    },
  });

  const onDeleteClickHandler = (id) => {
    deleteListMutation.mutate(id);
  };

  if (detaildata.isLoading == true) {
    return null;
  }

  const detaillist = detaildata.data;
  console.log(detaillist.files);

  return (
    <div
      style={{
        marginTop: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DetailWrap>
        {
          <DetailFirstItemWrap>
            <DetailFirstItemTitle>{detaillist.title}</DetailFirstItemTitle>
            {/* {detaillist.files && (
              // <DetailFirstItem
              //   // src={`${process.env.PUBLIC_URL}/토코몬.png`}
              //   src={{
              //     uri: "data:image/png;base64,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",
              //   }}
              //   alt="조선아"
              // />
            )} */}
            <DetailBody>{detaillist.content}</DetailBody>
            <DetailBtnWrap>
              <DetailBtn
                onClick={() => {
                  navigate(`/modify/${detaillist.id}`);
                }}
              >
                수정하기
              </DetailBtn>
              <DetailBtn color="#FBE8E7" onClick={onDeleteClickHandler}>
                삭제하기
              </DetailBtn>
            </DetailBtnWrap>
          </DetailFirstItemWrap>
        }

        <DetailSecondItemWrap>
          {data &&
            data.map((e, i) => {
              return (
                <>
                  <DetailSecondItemtext key={i}>
                    {e.write} {e.content}{" "}
                    <button
                      onClick={(event) => {
                        removeReplyHandler(event, e.id);
                      }}
                    >
                      삭제
                    </button>
                  </DetailSecondItemtext>
                </>
              );
            })}
          <DetailSecondItemInput
            type="text"
            value={reply.content}
            onChange={onChangeReplyContent}
            name="content"
          />
          <DetailSecondItemBtn onClick={onSubmitClickHandler}>
            등록
          </DetailSecondItemBtn>
        </DetailSecondItemWrap>
      </DetailWrap>
    </div>
  );
}

const DetailWrap = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const DetailFirstItemWrap = styled.div`
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const DetailFirstItemTitle = styled.h1`
  font-size: 24px;
  font-weight: 900;
`;

const DetailFirstItem = styled.img`
  width: 200px;
  display: flex;
  height: 200px;
  margin: 0 auto;
`;

const DetailBody = styled.p`
  width: 100%;
  height: 200px;
  line-height: 24px;
  background-color: #fbe8e7;
  border-radius: 8px;
  padding: 10px;
  letter-spacing: 1.4px;
  margin-bottom: 20px;
`;

const DetailBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const DetailBtn = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => {
    return props.color ? "#FFC4D0" : "#F7DDDE";
  }};
  &:hover {
    background-color: ${(props) => {
      return props.color
        ? "rgba(255, 196, 208, 0.8)"
        : "rgba(247, 221, 222, 0.8)";
    }};
    transition: all 0.3s;
  }
`;

const DetailSecondItemWrap = styled.form`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const DetailSecondItemtext = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7ddde;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const DetailSecondItemInput = styled.input`
  margin-top: 50px;
  height: 30px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const DetailSecondItemBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 25px;
  right: 25px;
  bottom: 28px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #f7ddde;
    transition: all 0.3s;
  }
`;
export default Detail;
