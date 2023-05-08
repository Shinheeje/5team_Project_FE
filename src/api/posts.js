import axios from "axios"

const addwrite = async (newPost) => {
  try {
    const response = await axios.post('http://3.37.22.175:8080/api/posts', newPost)
    return response
  }catch(error) {
    console.log(error)
  }
}

export {addwrite}