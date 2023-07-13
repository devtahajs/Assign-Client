import axios from "axios";

//?Axios Service Send Completed Data
export const sendComps = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    "https://assign-server.onrender.com/assign/complete",
    data,
    config
  );
  return response.data;
};

//?Axios Service Get Completed Data
export const getComps = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    "https://assign-server.onrender.com/assign/getcomps",
    config
  );
  return response.data;
};


