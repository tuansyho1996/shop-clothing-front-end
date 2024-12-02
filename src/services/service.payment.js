
const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const fetchOrder = async (id = 'all') => {
  try {
    const response = await fetcher(`/api/payment/fetch-order/${id}`);
    if (!response.status === 200) {
      return null
    }
    return response?.metadata
  } catch (error) {
    console.log(error)
  }
}

export {
  fetchOrder
}