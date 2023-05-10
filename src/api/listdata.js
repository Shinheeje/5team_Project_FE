import axios from "axios";
import Cookies from "js-cookie";

//* 유저조회
const getUser = async () => {
  const token = Cookies.get("token");
  const response = await axios.get("http://3.34.85.5:8080/api/user-info", {
    headers: {
      ACCESS_KEY: `Bearer ${token}`,
    },
  });
  return response.data;
};

// //*게시글조회
const getList = async () => {
  const response = await axios.get("http://3.34.85.5:8080/api/posts");
  return response.data;
};

//*게시글추가
const addList = async (newList) => {
  // console.log(newList)
  try {
    const token = Cookies.get("token");
    const response = await axios.post(
      "http://3.34.85.5:8080/api/posts",
      newList,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

// * 게시글삭제
const removeList = async (id) => {
  const token = Cookies.get("token");
  console.log(id);
  await axios.delete(`http://3.34.85.5:8080/api/posts/${id}`, {
    headers: {
      ACCESS_KEY: `Bearer ${token}`,
    },
  });
};

//* 개별게시글조회
const detailList = async (id) => {
  const response = await axios.get(`http://3.34.85.5:8080/api/posts/${id}`);
  return response.data;
};

//게시글수정 얘가 원래거
// const editList = async (editedList) => {
//     const { title, contents, image, id } = editedList;
//   try {
//     const token = Cookies.get("token");
//     const response = await axios.put(
//       `http://3.34.85.5:8080/api/posts/${id}`,editedList,
//       {
//         headers: {
//           ACCESS_KEY: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const editList = async (editedList, id) => {
//   try {
//     const token = Cookies.get("token");
//     const response = await axios.put(
//       // `http://3.34.85.5:8080/list/${editedList.id}`,
//       `http://3.34.85.5:8080/api/posts/${id}`,
//       editedList,
//       {
//         headers: {
//           ACCESS_KEY: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// * 댓글조회
// const getPosts = async () => {
//   await axios.post(`http://3.34.85.5:8080/api/posts/${id}/comments`)
// }

// * 댓글추가 얘가 원래꺼
// const token = Cookies.get("token");
// const addPosts = async (newPost) => {
//   const { id, content } = newPost;
//   await axios.post(`http://3.34.85.5:8080/api/posts/${id}/comments`, {
//     headers: {
//       ACCESS_KEY: `Bearer ${token}`,
//     },
//     body: {
//       content: content,
//     },
//   });
// };

//댓글
// const token = Cookies.get("token");
const addPosts = async (newPost) => {
  const token = Cookies.get("token");
  const { id, contents } = newPost;
  await axios.post(
    `http://3.34.85.5:8080/api/posts/${id}/comments`,
    {
      contents: contents,
    },
    {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    }
  );
  // console.log(token);
};

// 댓글삭제;
// const removePosts = async (id) => {
//   const token = Cookies.get("token");
//   // await axios.delete(`http://3.34.85.5:8080/api/posts/comments/${id}`);
//   try {
//     const response = await axios.delete(
//       `http://3.34.85.5:8080/api/posts/comments/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

//얘로 쭉했엇음
// const removePosts = async (id, postId) => {
//   const token = Cookies.get("token");

//   console.log("포스트:", postId);

//   try {
//     const response = await axios.delete(
//       `http://3.34.85.5:8080/api/posts/${postId}/comments/${id}`,
//       {
//         headers: {
//           ACCESS_KEY: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

//댓글삭제
const removePosts = async (deletePost) => {
  const token = Cookies.get("token");
  const { id, postId } = deletePost;
  console.log("포스트:", postId);

  try {
    const response = await axios.delete(
      `http://3.34.85.5:8080/api/posts/${postId}/comments/${id}`,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// // * 댓글삭제
// const removePosts = async (id) => {
//   await axios.delete(`http://3.34.85.5:8080/api/posts/comments/${id}`);
// }
// const editList = async (id, editedList) => {
//   try {
//   const response = await axios.patch(
//     `http://localhost:4000/list/${id}`,,
//     editedList
//   );
//   } catch (error) {
//     console.error(error);
//   }
//     // return response.data;
// };
// , addPosts, getPosts
export {
  getList,
  addList,
  detailList,
  getUser,
  removeList,
  removePosts,
  addPosts,
};
