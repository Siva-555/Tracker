import axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const getAllComicsApi = async () => {
  try {
    const response = await axios.get(`${apiUrl}/comics/getAllComics`);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

const updateComicApi = async (id, formData) => {
  try {
    const response = await axios.put(`${apiUrl}/comics/${id}`, formData);

    return response;
  } catch (err) {
    console.log("err", err);
  }
};

const deleteComicApi = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/comics/${id}`);

    return response;
  } catch (err) {
    console.log("err", err);
  }
};
const addComicApi = async (payload) => {
  try {
    const response = await axios.post(`${apiUrl}/comics`, payload);

    return response;
  } catch (err) {
    console.log("err", err);
    return err.response;
  }
};

export { getAllComicsApi, updateComicApi, deleteComicApi, addComicApi };
