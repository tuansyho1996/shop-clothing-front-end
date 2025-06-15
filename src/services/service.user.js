
const fetcher = async (endpoint, options = {}) => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_BACK_END_URL}${endpoint}`, {
      ...options,
      credentials: 'include', // Include credentials such as cookies
    });

    // Check for HTTP errors and handle response
    if (!res.ok) {
      const errorData = await res.json(); // Parse error response
      const error = new Error(`Error ${res.status}: ${res.statusText}`);
      error.status = res.status; // Attach status code
      error.data = errorData; // Attach error response body
      throw error; // Throw the error for the caller to handle
    }
    return await res.json(); // Return parsed JSON for successful responses
  } catch (error) {
    console.error('Fetcher Error:', error);
    throw error; // Ensure errors are re-thrown to be caught by the caller
  }
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

export {
  createUser,
  login
}