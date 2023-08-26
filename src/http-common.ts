import axios from "axios";

export default axios.create({
  baseURL: "https://be-aic.vercel.app/api",
  headers: {
    "Content-type": "application/json",
  },
});