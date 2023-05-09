import axios from "axios";

const loginCertify = async (newlogin) => {
  const response = await axios.post(
    "http://3.37.22.175:8080/api/login",
    newlogin
  );
  return response;
};

export { loginCertify };
