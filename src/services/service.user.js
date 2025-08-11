
const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const createUser = async (data) => {
  const response = await fetcher(`/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response
}
const login = async (data) => {
  const response = await fetcher(`/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response
}
const connectUser = async (address) => {
  const response = await fetcher(`/api/user/connect/${address}`)
  return response
}

export {
  createUser,
  login,
  connectUser
}