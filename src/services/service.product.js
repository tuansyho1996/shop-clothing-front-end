
// const fetcher = async (endpoint, options = {}) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
//   if (!res.ok) {
//     throw new Error('Network response was not ok');
//   }

//   return res.json();
// };


// const getAllProducts = async () => {
//   try {
//     const response = await fetcher(`/api/product/all`, { cache: "no-cache" });
//     if (!response.status === 200) {
//       return null
//     }
//     return response.metadata
//   } catch (error) {
//     console.error(error)
//   }
// }

// const getProduct = async (slug = 'all') => {
//   try {
//     const response = await fetcher(`/api/product/${slug}`, { cache: "no-cache" });
//     if (!response.status === 200) {
//       return null
//     }
//     return response.metadata
//   } catch (error) {
//     console.error(error)
//   }
// }

// const getProductsOfCategory = async (slug) => {
//   try {
//     const response = await fetcher(`/api/product-category/${slug}`, { cache: 'no-cache' });
//     if (!response.status === 200) {
//       return null
//     }
//     return response.metadata
//   } catch (error) {
//     console.error(error)
//   }
// }
// const getCategory = async (slug) => {
//   try {
//     const response = await fetcher(`/api/product/${slug}`);
//     if (!response.status === 200) {
//       return null
//     }
//     return response.metadata
//   } catch (error) {
//     console.error(error)
//   }
// }

// export {
//   getAllProducts,
//   getProduct,
//   getProductsOfCategory
// }

import useSWR from 'swr';

const fetcher = async (endpoint) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data.metadata; // Lưu ý trả luôn metadata
};

const getAllProducts = () => {
  const { data, error, isLoading } = useSWR('/api/product/all', fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
};
const getProduct = async (slug) => {
  const { data, error, isLoading } = useSWR(`/api/product/${slug}`, fetcher);
  return {
    product: data,
    isLoading,
    isError: error,
  };
}
const getProductsOfCategory = async (slug) => {
  const { data, error, isLoading } = useSWR(`/api/product-category/${slug}`, fetcher);
  return {
    products: data,
    isLoading,
    isError: error,
  };
}
const getCategory = async (slug) => {
  const { data, error, isLoading } = useSWR(`/api/product/${slug}`, fetcher);
  return {
    category: data,
    isLoading,
    isError: error,
  };
}

export {
  getAllProducts,
  getProduct,
  getProductsOfCategory,
  getCategory
}