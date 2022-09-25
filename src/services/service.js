import axios from "axios";

const api = axios.create({
  baseURL: "https://topdowntank-28176-default-rtdb.firebaseio.com/",
});


export default api;