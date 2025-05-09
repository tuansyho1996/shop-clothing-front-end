const fetcher = async (endpoint, options = {}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}${endpoint}`, options);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

const postReview = async (formData) => {
  try {
    const response = await fetcher('/api/review', {
      method: 'POST',
      body: formData,
      cache: "no-cache"
    });
    return response
  } catch (err) {
    console.error(err);
    toast.error('Something went wrong. Please try again later.');
  }

}
const getReview = async (slug) => {
  try {
    const response = await fetcher(`/api/review/${slug}`, {
      method: 'GET',
      cache: "no-cache"
    });
    return response
  } catch (err) {
    console.error(err);
    toast.error('Something went wrong. Please try again later.');
  }
}

export {
  postReview, getReview
}

