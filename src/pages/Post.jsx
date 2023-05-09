import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addList } from "../api/listdata";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useCookies } from 'react-cookie';
import { Image } from "cloudinary-react";
import axios from "axios";


function Post() {
  const [fileAttach, setFileAttach] = useState('')
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");
  const navigate = useNavigate(`/`);
  const queryClient = useQueryClient();

  const mutation = useMutation(addList, {
    onSuccess: (response) => {
      console.log(response)
      // queryClient.invalidateQueries("list");
    },
  });

  const [cookies] = useCookies(['token']); //* 'token'이라는 이름의 쿠키를 가져옵니다.
  const token = cookies.token; //* 토큰 값을 변수에 할당합니다.

  const submitButtonHandler = () => {
    const newList = new FormData()

    newList.append("title", title);
    newList.append("content", content);
    newList.append("image", preview);

    console.log(newList)
    mutation.mutate(newList);
    navigate("/");
  };
  console.log(fileAttach)
  const handleFileChange = (event) => {
    setFileAttach(event.target.files[0])
    const file = event.target.files[0];
    const fileName = file ? file.name : "";
    setFileName(fileName);

    //set preview image
    // const objectUrl = URL.createObjectURL(event.target.files[0]);
    // setPreview(objectUrl);
  };

  const [imageSelected, setImageSelected] = useState('')

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'bss24hwh')

    axios.post("https://api.cloudinary.com/v1_1/dgqi38rqo/image/upload", formData)
      .then((response) => {
        setPreview(response.data.secure_url)
      })
  }
  return (
    <PostWrap>
      <PostItemWrap method="post" encType="multipart/form-data" onSubmit={(e) => {
        e.preventDefault()
      }}>
        <PostItemTitle
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FileWrap>
          <Image cloudName='dgqi38rqo' publicId={preview} style={{
            height: '200px'
          }} />
          <input type="file" onChange={(event) => { setImageSelected(event.target.files[0]) }} />
          <button onClick={uploadImage}>Upload</button>
        </FileWrap>
        <PostBody value={content} onChange={(e) => setContent(e.target.value)}>
          파닥파닥몬
        </PostBody>
        <PostBtnWrap>
          <PostBtn
            onClick={submitButtonHandler}>
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
  /* height: 400px; */
`

const ImageHeight = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; */
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
