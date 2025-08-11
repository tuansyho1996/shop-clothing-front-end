
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
const completeOrder = async (data) => {
  try {
    const response = await fetcher('/api/payment/checkout/order-received/',
      {
        method: 'POST',
        body: data,
        cache: "no-cache"
      }
    );
    return response;
  } catch (error) {
    console.error('Error in completeOrder:', error);
    throw error;
  }
};

export {
  fetchOrder,
  completeOrder
}