import axios from "axios";

const apiUri =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://vercel-api-pi.vercel.app/api";

export const getAdsByUid = async uid => {
  const response = await axios
    .get(apiUri + `/ad/get?id=${uid}`)
    .then(data => data.data)
    .catch(err => err.response);
  return response.allData;
};

export const postNewAd = async data => {
  const response = await axios
    .post(apiUri + "/ad/create", data)
    .then(data => data.data)
    .catch(err => err.response);
  console.log(response);
};
