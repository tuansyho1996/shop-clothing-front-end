
const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};


const getAllProducts = async () => {
  try {
    const response = await fetcher(`/api/product/all`, { cache: "no-cache" });
    if (!response.status === 200) {
      return null
    }
    return response.metadata
  } catch (error) {
    console.error(error)
  }
}

const getProduct = async (slug = 'all') => {
  try {
    const response = await fetcher(`/api/product/${slug}`, { cache: "no-cache" });
    if (!response.status === 200) {
      return null
    }
    return response.metadata
  } catch (error) {
    console.error(error)
  }
}

const getProductsOfCategory = async (slug) => {
  try {
    const response = await fetcher(`/api/product-category/${slug}`, { cache: 'no-cache' });
    if (!response.status === 200) {
      return null
    }
    return response.metadata
  } catch (error) {
    console.error(error)
  }
}
const getCategory = async (slug) => {
  try {
    const response = await fetcher(`/api/product/${slug}`);
    if (!response.status === 200) {
      return null
    }
    return response.metadata
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllProducts,
  getProduct,
  getProductsOfCategory
}

