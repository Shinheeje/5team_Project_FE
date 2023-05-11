import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { addPosts, detailList, removeList, removePosts } from "../api/listdata";
import { getUser } from "../api/listdata";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathId = location.pathname.slice(8);

  //게시글권한위한것들
  const nowdata = useQuery("user", getUser);
  // console.log("현재로그인한애!", data.data);
  const nowLoginUser = nowdata.data;
  const postUser = location.state.currentUserInfo.userid;
  // console.log("지금로그인", nowLoginUser);

  //댓글권한위한것들
  //item.userid 얘랑 nowLoginUser 얘 비교

  const { data, isLoading, isError, error } = useQuery(
    "getReply",
    () => detailList(pathId),
    {
      enabled: true,
      staleTime: 0,
    }
  );

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
      queryClient.invalidateQueries("getReply");
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
      queryClient.invalidateQueries("getReply");
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
          <ImageWrapper>
            <DetailFirstItem
              src={location.state.currentUserInfo.imageUrl}
              alt=""
            />
          </ImageWrapper>
          <DetailBody>{location.state.currentUserInfo.contents}</DetailBody>

          {nowLoginUser == postUser ? (
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
          ) : (
            <></>
          )}
        </DetailFirstItemWrap>

        <DetailSecondItemWrap>
          {data &&
            data.commentList &&
            data.commentList.map((item) => {
              return (
                <>
                  <DetailSecondItemtext key={item.id}>
                    {item.contents}

                    {item.userid == nowLoginUser ? (
                      <DetailReplyDeleteBtn
                        onClick={(event) =>
                          removeReplyHandler(
                            event,
                            item.id,
                            location.state.currentUserInfo.id
                          )
                        }
                      >
                        삭제
                      </DetailReplyDeleteBtn>
                    ) : (
                      <></>
                    )}
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
  margin-top: 40px;
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

const ImageWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 60px;
  height: 25px;
  right: 25px;
  bottom: 28px;
  font-weight: 900;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #f7ddde;
    transition: all 0.3s;
  }
`;

const DetailReplyDeleteBtn = styled.button`
    width: 60px;
  height: 25px;
  background-color: white;
  font-weight: 900;
  border: 1px solid black;
  &:hover {
    background-color: #f79191;
    transition: all 0.3s;
    color: white;
  }
`
export default Detail;
