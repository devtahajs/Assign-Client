import axios from "axios";

//?Axios Service Get Assignments
export const sendpend = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    "https://assign-server.onrender.com/assign/pending",
    data,
    config
  );
  return response.data;
};

//?Axios Service Get Assignments
export const getPending = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    "https://assign-server.onrender.com/assign/getpends",
    config
  );
  return response.data;
};
