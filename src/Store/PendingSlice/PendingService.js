import axios from "axios";

//?Axios Service Send Pending Data
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

//?Axios Service Get Pending Data
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

//?Axios Service Delete Pending Data
export const deletePending = async (id) => {
  const response = await axios.delete(
    `https://assign-server.onrender.com/assign/deletepend/${id}`
  );
  return response.data;
};

