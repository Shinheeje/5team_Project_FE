import axios from "axios";

// * 조회
const getmock = async () => {
  const response = await axios.get('http://3.38.191.164/');
  return response.data;
}

const getinga = async (newInga) => {
  const response = await axios.get('http://3.38.191.164/user', newInga);
  return response.data;
}

// * post
const addmock = async (newPost) => {
  await axios.post('http://3.38.191.164/register', newPost)
}

// * post
const loginmock = async (newLogin) => {
  const response = await axios.post('http://3.38.191.164/login', newLogin)
  return response.data
}

export { getmock, addmock, loginmock, getinga}