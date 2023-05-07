import axios from "axios";

const getList = async () => {
  const response = await axios.get("http://localhost:4000/list");
  // const response = await axios.get("http://3.37.22.175:8080");

  return response.data;
};

export { getList };
