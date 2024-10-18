import axios from '../utils/axios'

const getProduct = async (id = 'all') => {
  try {
    const response = await axios.get(`/api/product/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export {
  getProduct
}