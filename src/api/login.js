import axios from "axios";

// * post
const loginCertify = async (newLogin) => {
  console.log(newLogin)
  try {
    const response = await axios.post('http://3.37.22.175:8080/api/login', newLogin)
    return response
  } catch(error) {
    console.log(error)
  }
}

export { loginCertify };
