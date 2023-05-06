import axios from "axios";

// * 조회
const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/comments');
  return response.data;
}

// * 추가
const addPosts = async (newPost) => {
  await axios.post('http://localhost:4000/comments', newPost)
}

export { getPosts, addPosts }