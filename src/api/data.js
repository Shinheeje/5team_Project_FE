import axios from "axios";

// * 조회
const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/comments');
  return response.data;
}

// * 댓글추가
const addPosts = async (newPost) => {
  await axios.post('http://localhost:4000/comments', newPost)
}

// * 댓글삭제
const removePosts = async (id) => {
  await axios.delete(`http://localhost:4000/comments/${id}`);
}

export { getPosts, addPosts, removePosts}