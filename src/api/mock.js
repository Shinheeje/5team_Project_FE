import axios from "axios";

// * 조회
// const getmock = async () => {
//   const response = await axios.get('');
//   return response.data;
// }

// const getinga = async (newInga) => {
//   const response = await axios.get('http://3.38.191.164/user', newInga);
//   return response.data;
// }

// * post
const addmock = async (newPost) => {
  try {
    const response = await axios.post('http://3.37.22.175:8080/api/signup', newPost)
    return response
  }catch(error) {
    console.log(error)
  }
}

// // * post
// const loginmock = async (newLogin) => {
//   const response = await axios.post('/api/login', newLogin)
//   return response.data
// }

export {addmock}