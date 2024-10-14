import axios from '../../utils/axios'

const getAllProducts = async () => {
  try {
    const response = await axios.get('/api/product')
    return response.data.metadata
  } catch (error) {
    console.log(error)
  }
}
const createProduct = async (data) => {
  try {
    const response = await axios.post('/api/product', data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
const updateProduct = async (data, _id) => {
  try {
    const response = await axios.post(`/api/product/update/${_id}`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`api/product/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
}