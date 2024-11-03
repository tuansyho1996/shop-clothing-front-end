// components/Drawer.js
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

export default function Drawer({ isOpen, onClose, items }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[640px] transform bg-white transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center border-b pb-4">
            <p className="text-xl font-bold">Cart</p>
            <button onClick={onClose}>
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex space-x-4">
                <Image
                  src={item.product_image}
                  alt=''
                  width={140}
                  height={140}
                  style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
                  loadding='lazy'
                />
                <div className="flex-1 text-lg">
                  <p className="font-semibold">{item.product_name}</p>
                  <p className="">{item.product_price}</p>
                  <p className=" ">Color: {item.product_color}</p>
                  <p className=" ">Size: {item.product_size}</p>
                </div>
                <div className='flex cursor-pointer'>
                  <RemoveIcon sx={{ color: '#999999' }} fontSize='large' />
                  <AddIcon sx={{ color: '#999999' }} fontSize='large' />
                  <DeleteIcon sx={{ color: '#999999' }} fontSize='large' />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Subtotal</span>
              <span>$54.90 USD</span>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Go to Cart
            </button>
            <button className="mt-2 w-full bg-black text-white py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
