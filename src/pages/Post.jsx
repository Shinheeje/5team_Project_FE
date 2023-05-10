import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addList } from "../api/listdata";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { Image } from "cloudinary-react";
import axios from "axios";
function Post() {
  const [fileAttach, setFileAttach] = useState("");
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(`/`);

  const mutation = useMutation(addList, {
    onSuccess: (response) => {
      navigate("/");
      // queryClient.invalidateQueries("list");
    },
  });
  const handleFileChange = (event) => {
    setFileAttach(event.target.files[0]);
    const file = event.target.files[0];
    const fileName = file ? file.name : "";
    setFileName(fileName);
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(objectUrl);
  };

  const submitButtonHandler = () => {
    const newList = new FormData();
    newList.append("title", title);
    newList.append("contents", content);
    newList.append("image", fileAttach);
    mutation.mutate(newList);
  };
  return (
    <PostWrap>
      <PostItemWrap
        method="post"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <PostItemTitle
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ImageWrapper>
          <PostImg src={preview} alt="" />
        </ImageWrapper>
        <FileWrap>
          <FileTextInput value={fileName} placeholder="첨부파일" readOnly />
          <FileButton for="file">파일찾기</FileButton>
          <FileInput type="file" id="file" onChange={handleFileChange} />
        </FileWrap>
        <PostBody value={content} onChange={(e) => setContent(e.target.value)}>
          파닥파닥몬
        </PostBody>
        <PostBtnWrap>
          <PostBtn
            onClick={() => {
              submitButtonHandler();
            }}
          >
            제출하기
          </PostBtn>
        </PostBtnWrap>
      </PostItemWrap>
    </PostWrap>
  );
}
const PostWrap = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const PostItemWrap = styled.form`
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`;
const PostItemTitle = styled.input`
  font-size: 24px;
  font-weight: 900;
  width: 100%;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
`;
const ImageWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostImg = styled.img`
  height: 250px;
`;

const PostBody = styled.textarea`
  width: 100%;
  height: 200px;
  line-height: 24px;
  background-color: #fbe8e7;
  border-radius: 8px;
  padding: 10px;
  letter-spacing: 1.4px;
  margin-bottom: 20px;
  resize: none;
  outline: none;
  border: 1px solid #dddddd;
  box-sizing: border-box;
`;
const PostBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;
const PostBtn = styled.button`
  width: 200px;
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
const FileWrap = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FileTextInput = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
  outline: none;
`;
const FileInput = styled.input.attrs({ type: "file" })`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;
const FileButton = styled.label`
  display: inline-block;
  padding: 14px 20px;
  color: black;
  background-color: #f7ddde;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
  box-sizing: border-box;
  &:hover {
    background-color: ${(props) => {
      return props.color
        ? "rgba(255, 196, 208, 0.8)"
        : "rgba(247, 221, 222, 0.8)";
    }};
    transition: all 0.3s;
  }
`;
export default Post;
