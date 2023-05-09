import axios from "axios"

const addwrite = async (newPost) => {
  try {
    const response = await axios.post('http://3.34.85.5:8080/api/posts', newPost)
    console.log(response)
    return response.data
  }catch(error) {
    console.log(error)
  }
}

export {addwrite}