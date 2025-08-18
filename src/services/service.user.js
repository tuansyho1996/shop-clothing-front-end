
import axios from '../config/axios';


// const createUser = async (data) => {
//   const response = await fetcher(`/api/user`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response
// }
// const login = async (data) => {
//   const response = await fetcher(`/api/user/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response
// }
const connectUser = async (address) => {
  const response = await axios.get(`/api/user/connect/${address}`);
  if (response.status !== 200) {
    return null;
  }
  return response.data;
}

export {
  connectUser
}