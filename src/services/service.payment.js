import axios from '../config/axios';
const fetchOrder = async (id = 'all') => {
  try {
    const response = await axios.get(`/api/payment/fetch-order/${id}`);
    if (response.status !== 200) {
      return null;
    }
    return response.data?.metadata;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

const completeOrder = async (data) => {
  try {
    const response = await axios.post('/api/payment/checkout/order-received/', data, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
    });
    if (response.status !== 201) {
      throw new Error('Failed to complete order');
    }
    return response.data?.metadata;
  } catch (error) {
    console.error('Error completing order:', error);
    throw error;
  }
}
// const fetcher = async (endpoint, options = {}) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return res.json();
// };

// const fetchOrder = async (id = 'all') => {
//   try {
//     const response = await fetcher(`/api/payment/fetch-order/${id}`);
//     if (!response.status === 200) {
//       return null
//     }
//     return response?.metadata
//   } catch (error) {
//     console.log(error)
//   }
// }
// const completeOrder = async (data) => {
//   try {
//     const response = await fetcher('/api/payment/checkout/order-received/',
//       {
//         method: 'POST',
//         body: data,
//         cache: "no-cache"
//       }
//     );
//     return response;
//   } catch (error) {
//     console.error('Error in completeOrder:', error);
//     throw error;
//   }
// };

export {
  fetchOrder,
  completeOrder
}