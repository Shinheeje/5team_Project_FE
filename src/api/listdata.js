import axios from "axios";

//게시글조회
const getList = async () => {
  // const SERVER_URI = "http://localhost:4000";
  const response = await axios.get("http://localhost:4000/list");
  // const response = await axios.get("http://3.37.22.175:8080");

  return response.data;
};

//게시글추가
const addList = async (newList) => {
  const response = await axios.post("http://localhost:4000/list", newList);
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

export { getList, addList, deleteList };
