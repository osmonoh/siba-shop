import axios from "axios";

const mova = axios.create({
  baseURL: "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/",
});

export default mova;
