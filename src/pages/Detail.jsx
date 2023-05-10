import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addPosts, detailList, removeList, removePosts } from "../api/listdata";
function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathId = location.pathname.slice(8);
  // console.log(pathId);
  // console.log(typeof pathId);
  //댓글
  // const { data } = useQuery("getReply", getList);

  const { data, isLoading, isError, error } = useQuery("getReply", () => detailList(pathId),{
    enabled: true,
    staleTime: 0,
  });

  const queryClient = useQueryClient(); 

  const test = location.state.currentUserInfo.commentList;
  const removeListMutation = useMutation(removeList, {
    onSuccess: () => {
      navigate("/");
    },
  });
  const removeButtonHandler = (id) => {
    removeListMutation.mutate(id);
  };
  const params = useParams();
  //* 댓글 데이터 가져오기
  const [reply, setReply] = useState({
    // write: '',
    contents: "",
  });
  const onChangeReplyContent = (e) => {
    setReply({
      ...reply,
      [e.target.name]: e.target.value,
    });
  };
  // * 댓글추가
  const addMutation = useMutation(addPosts, {
    onSuccess: () => {
      // queryClient.invalidateQueries(`/api/posts/${params.id}`);
      // queryClient.invalidateQueries("addPosts");
      queryClient.invalidateQueries("getReply")
    },
  });
  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    // if (reply.write === '' || reply.content === '') {
    if (reply.contents === "") {
      alert("양식을 모두 입력해주세요.");
      return;
    }
    const newPost = {
      id: pathId,
      contents: reply.contents,
    };
    addMutation.mutate(newPost);
  };
  // console.log(reply.content);
  // * 댓글삭제
  const removeMutation = useMutation(removePosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("getReply")
    },
  });
  const removeReplyHandler = (event, id, postId) => {
    event.preventDefault();
    console.log(postId);
    // const postId = location.state.currentUserInfo.id;
    // console.log("댓글 ID:", id);
    removeMutation.mutate({ id, postId });
  };
  // * 댓글수정
  const editReplyHandler = (event) => {
    event.preventDefault();
    alert("수정하기");
  };

  useEffect(() => {
    queryClient.invalidateQueries("getReply");
  }, []);
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
        <DetailFirstItemWrap>
          <DetailFirstItemTitle>
            {location.state.currentUserInfo.title}
          </DetailFirstItemTitle>
          <DetailFirstItem
            src={location.state.currentUserInfo.imageUrl}
            alt=""
          />
          <DetailBody>{location.state.currentUserInfo.contents}</DetailBody>
          <DetailBtnWrap>
            <DetailBtn
              onClick={() => {
                navigate(`/modify/${pathId}`);
              }}
            >
              수정하기
            </DetailBtn>
            <DetailBtn
              color="#FBE8E7"
              onClick={() => {
                removeButtonHandler(pathId);
              }}
            >
              삭제하기
            </DetailBtn>
          </DetailBtnWrap>
        </DetailFirstItemWrap>
        <DetailSecondItemWrap>
          {data && data.commentList &&
            data.commentList.map((item) => {
              return (
                <>
                  <DetailSecondItemtext key={item.id}>
                    {item.contents}
                    <button
                      onClick={(event) =>
                        removeReplyHandler(
                          event,
                          item.id,
                          location.state.currentUserInfo.id
                        )
                      }
                    >
                      삭제
                    </button>
                  </DetailSecondItemtext>
                </>
              );
            })}
          <DetailSecondItemInput
            type="text"
            value={reply.contents}
            onChange={onChangeReplyContent}
            name="contents"
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
  background-color: #FBE8E7;
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
  background-color: #F7DDDE;
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
    background-color: #F7DDDE;
    transition: all 0.3s;
  }
`;
export default Detail;