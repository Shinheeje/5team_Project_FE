import axios from "axios";

const getList = async () => {
  const response = await axios.get("http://localhost:4000/list");
  return response.data;
};

export { getList };
