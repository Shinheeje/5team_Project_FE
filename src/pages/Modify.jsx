import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { editList, getList, detailList } from "../api/listdata";
import { useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function Modify() {
  const params = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState("");

  const [modifyTitle, setModifyTitle] = useState("");
  const [modifybody, setModifyBody] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileName = file ? file.name : "";
    setFileName(fileName);

    //set preview image
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(objectUrl);
  };

  //게시글수정하기

  const modifylist = useQuery("modifylist", () => detailList(params.id));
  console.log("전데이터: ", modifylist.data);
  // console.log(modifylist.data.id);

  const mutation = useMutation(editList, {
    onSuccess: () => {
      queryClient.invalidateQueries("modifylist");
    },
  });

  const modifyButtonHandler = () => {
    const editedList = {
      id: modifylist.data.id,
      title: modifyTitle,
      content: modifybody,
      files: modifylist.data.files,
    };

    // console.log(editedList);

    mutation.mutate({ editedList });
    navigate(`/detail/${modifylist.data.id}`);
    console.log(editedList);
  };

  // const testHandler = () => {
  //   navigate(`/detail/${modifylist.data.id}`);
  //   console.log("바보");
  // };

  return (
    <>
      <ModifyWrap>
        <ModifyItemWrap
          method="post"
          encType="multipart/form-data"
          name="files"
        >
          <ModifyItemTitle
            value={modifyTitle}
            placeholder="수정할 제목"
            onChange={(e) => setModifyTitle(e.target.value)}
          />
          <ModifyImg src={preview} alt="" />
          <FileWrap>
            <FileTextInput value={fileName} placeholder="첨부파일" readOnly />
            <FileButton for="file">파일찾기</FileButton>
            <FileInput type="file" id="file" onChange={handleFileChange} />
          </FileWrap>
          <ModifyBody
            value={modifybody}
            onChange={(e) => setModifyBody(e.target.value)}
          >
            파닥파닥몬
          </ModifyBody>
          <ModifyBtnWrap>
            <ModifyBtn
              onClick={() => {
                modifyButtonHandler();
              }}
            >
              수정완료
            </ModifyBtn>
          </ModifyBtnWrap>
        </ModifyItemWrap>
      </ModifyWrap>
    </>
  );
}

const ModifyWrap = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModifyItemWrap = styled.form`
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const ModifyItemTitle = styled.input`
  font-size: 24px;
  font-weight: 900;
  width: 100%;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
`;

const ModifyImg = styled.img`
  display: flex;
  height: 200px;
  margin: 0 auto;
`;

const ModifyBody = styled.textarea`
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

const ModifyBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const ModifyBtn = styled.button`
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
export default Modify;
