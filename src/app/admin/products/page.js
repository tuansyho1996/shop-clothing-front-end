'use client'
import { useState } from 'react';
import { TextField, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Product form state
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    category: ''
  });

  const categories = ['Electronics', 'Books', 'Clothing', 'Accessories'];

  // Handle modal open/close
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    resetForm();
  };

  // Reset form state
  const resetForm = () => {
    setForm({ name: '', price: '', description: '', category: '' });
    setIsEditing(false);
    setCurrentProduct(null);
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add new product
  const addProduct = () => {
    setProducts([...products, { ...form, id: Date.now() }]);
    handleClose();
  };

  // Edit existing product
  const editProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    setForm(product);
    handleOpen();
  };

  // Update product
  const updateProduct = () => {
    setProducts(products.map(p => (p.id === currentProduct.id ? { ...form, id: p.id } : p)));
    handleClose();
  };

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Product Manager</h1>

      {/* Add Product Button */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Product
      </Button>

      {/* Product List */}
      <div className="mt-4">
        {products.length > 0 ? (
          <ul className="space-y-2">
            {products.map(product => (
              <li key={product.id} className="flex justify-between items-center p-2 bg-gray-100 rounded">
                <div>
                  <span className="font-semibold">{product.name}</span> - ${product.price} ({product.category})
                  <p>{product.description}</p>
                </div>
                <div className="space-x-2">
                  <IconButton onClick={() => editProduct(product)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => deleteProduct(product.id)}>
                    <Delete />
                  </IconButton>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available</p>
        )}
      </div>

      {/* Product Modal */}
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent>
          {/* Name Input */}
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {/* Price Input */}
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
          />
          {/* Description Input */}
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            name="description"
            value={form.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          {/* Category Select */}
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            margin="normal"
            name="category"
            select
            value={form.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={isEditing ? updateProduct : addProduct}
            color="primary"
            variant="contained"
          >
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
