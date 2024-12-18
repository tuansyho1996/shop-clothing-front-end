
const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};

const getCategory = async (slug) => {
  try {
    const response = await fetcher(`/api/category/${slug}`);
    if (!response.status === 200) {
      return null
    }
    return response.metadata
  } catch (error) {
    console.error(error)
  }
}

export {
  getCategory
}