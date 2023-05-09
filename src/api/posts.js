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
    const token = Cookies.get("token");
    const response = await axios.post(
      "http://3.34.85.5:8080/api/posts",
      newPost,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { addwrite };
