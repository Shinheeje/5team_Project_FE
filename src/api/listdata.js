import axios from "axios";

//게시글조회
const getList = async () => {
  // const SERVER_URI = "http://localhost:4000";
  const response = await axios.get("http://localhost:4000/list");
  // const response = await axios.get("http://localhost:8080/");

  return response.data;
};

//게시글추가
const addList = async (newList) => {
  const response = await axios.post("http://localhost:4000/list", newList);
  // const response = await axios.post("http://3.37.22.175:8080", newList);
  // const response = await axios.post(
  //   "http://3.37.22.175:8080/api/posts",
  //   newList
  // );

  return response;
};

//게시글삭제
const deleteList = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/list/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//개별게시글조회
const detailList = async (id) => {
  const response = await axios.get(`http://localhost:4000/list/${id}`);
  return response.data;
};

//게시글수정
const editList = async (id, editedList) => {
  const response = await axios.patch(
    `http://localhost:4000/list/${id}`,
    editedList
  );
  return response.data;
};

export { getList, addList, deleteList, detailList, editList };
