import axios from "axios";
import Cookies from "js-cookie";
// import { Cookies, useCookies } from 'react-cookie';

//게시글조회
const getList = async () => {
  const response = await axios.get("http://localhost:8080/");
  return response.data;
};

//게시글추가
const addList = async (newList) => {
  try {
    const token = Cookies.get('token')
    const response = await axios.post("http://localhost:8080/api/posts", newList, {
      headers: {
        ACCESS_KEY: `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.log(error)
  }
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

export { getList, addList, deleteList, detailList };
