
const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};


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
const getProductShop = async (slug) => {
  try {
    const response = await fetcher(`/api/product/shop/${slug}`, { cache: 'no-cache' });
    if (!response.status === 200) {
      return null
    }
    return response.metadata
  } catch (error) {
    console.error(error)
  }
}
const getProductBestSelling = async (slug) => {
  try {
    const response = await fetcher(`/api/product/best-seller`, { cache: 'no-cache' });
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


export {
  getProductShop,
  getProduct,
  getProductsOfCategory,
  getProductBestSelling
}

