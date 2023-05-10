import axios from "axios";
import Cookies from "js-cookie";

// const addwrite = async (newPost) => {
//   try {
//     const response = await axios.post('http://3.34.85.5:8080/api/posts', newPost)
//     console.log(response)
//     return response
//   }catch(error) {
//     console.log(error)
//   }
// }

const addwrite = async (newPost) => {
  try {
    const response = await axios.post(
      "http://3.34.85.5:8080/api/posts",
      newPost
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { addwrite };
