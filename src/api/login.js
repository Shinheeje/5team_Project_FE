import axios from "axios";

// * post
const loginCertify = async (newLogin) => {
  console.log(newLogin)
  try {
    const response = await axios.post('http://3.34.85.5:8080/api/login', newLogin)
    return response
  } catch(error) {
    console.log(error)
  }
}

export { loginCertify };
