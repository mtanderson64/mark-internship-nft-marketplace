import axios from "axios";

const API_URL = "https://us-central1-nft-cloud-functions.cloudfunctions.net";

export const getHotCollections = () => {
  return axios.get(`${API_URL}/hotCollections`);
};