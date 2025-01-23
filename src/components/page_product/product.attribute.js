'use client'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/context.app";
import Modal from "@/components/page_product/product.modal.size.guide";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const colorsObject = [
  { name: "Charcoal", hex: "#333333" },
  { name: "Midnight Blue", hex: "#2C3E50" }, //
  { name: "Deep Olive", hex: "#3B5323" },
  { name: "Steel Blue", hex: "#4682B4" }, //
  { name: "Dark Slate", hex: "#2F4F4F" }, //
  { name: "Burnt Umber", hex: "#8A3324" },
  { name: "Wine", hex: "#722F37" }, //
  { name: "Forest Green", hex: "#2E4E3F" }, //
  { name: "Gunmetal", hex: "#2A3439" },
  { name: "Smoky Gray", hex: "#505050" }, //
  { name: "black", hex: "#000000" },
  { name: "white", hex: "#ffffff" }, //
]
const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

const ProductAttribute = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1)
  const { currentImageDetail, setCurrentImageDetail, currentColor, setCurrentColor, productsInCart, setProductsInCart, setDrawerOpen } = useContext(AppContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setCurrentColor(product.product_colors[0])
    setSelectedSize(sizes[0])
  }, [])
  useEffect(() => {
    const colorOject = colorsObject.find(el => el.hex === currentColor)
    if (colorOject) {
      setSelectedColor(colorOject.name)
    }
  }, [currentColor])


  const handleSelectColor = (color) => {
    setCurrentColor(color)
    const indexColor = product.product_colors.findIndex(el => el === color)
    if (indexColor !== -1) {
      setCurrentImageDetail(product.product_color_images[indexColor])
    }
  }
  const handleAddToCart = () => {
    const isProductInCart = productsInCart.find(el => el.product_slug === product.product_slug)
    if (isProductInCart && isProductInCart.product_size === selectedSize && isProductInCart.product_color === colorsObject.find(el => el.hex === currentColor).name) {
      const mutateProductsInCart = productsInCart.map(el => {
        if (el.product_slug === product.product_slug) {
          el.product_count += quantity
        }
        return el
      })
      setProductsInCart(mutateProductsInCart)
      setDrawerOpen(true)
    }
    else {
      const copyProduct = { ...product }
      copyProduct.product_count = quantity
      copyProduct.product_size = selectedSize
      copyProduct.product_color = colorsObject.find(el => el.hex === currentColor).name
      copyProduct.product_image = product.product_color_images[product.product_colors.findIndex(el => el === currentColor)]
      setProductsInCart([...productsInCart, copyProduct])
      setDrawerOpen(true)
    }


  }
  const handleMinusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <div className="text-orange-600 text-xl font-bold">$23</div>
      <div className="mt-4">
        <span className="font-medium">Color: </span>
        <span className="text-gray-700">{selectedColor}</span>
        <div className="flex gap-2 mt-2">
          {product?.product_colors?.map((color, index) => (
            <div
              key={index}
              onClick={() => handleSelectColor(color)}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${currentColor === color ? "border-black" : "border-gray-200"
                }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center">
        <span className="font-medium">Select size:</span>
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-4 underline text-accent-color ml-2"
        >
          Size Guide
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          category={product.product_list_categories_name[product.product_list_categories_name.length - 1]}
          category_2={product.product_list_categories_name[product.product_list_categories_name.length - 2]}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 md:mt-4">
        <span className="mb-2 font-medium">Quantity:</span>
        <div className="flex gap-2">
          <button className="border rounded-sm px-4 py-2 " onClick={handleMinusQuantity}>
            <RemoveIcon sx={{ color: '#999' }} />
          </button>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-10 text-center border rounded-sm pl-3 text-lg" />
          <button className="border rounded-sm px-4 py-2 " onClick={() => setQuantity(quantity + 1)}>
            <AddIcon sx={{ color: '#999' }} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(size)}
            className={`border-2 rounded-sm py-1 ${selectedSize === size ? "bg-gray-200 border-black" : "border-gray-200"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button className="w-full p-3 mt-4 bg-accent-color rounded-sm" onClick={handleAddToCart}>
        <span className="text-xl font-bold text-white capitalize ">Add To Cart</span>
      </button>
    </>

  );
};

export default ProductAttribute;
