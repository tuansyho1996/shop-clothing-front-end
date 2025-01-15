import Image from "next/image";
import Hooded from "./modal_size_guide/size.hooded";
import WomenTShirt from "./modal_size_guide/size.women.t.shirt";
import MenTShirt from "./modal_size_guide/size.men.t.shirt";
import Hoodie from "./modal_size_guide/size.hoodie.unisex";
const Modal = ({ isOpen, onClose, category, category_2 }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };
    console.log(category, category_2);
    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between items-center px-5">
                    <h2 className="text-xl font-semibold ">Size Guide {`${category_2}'s ${category}`}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4">
                    {category === 'Hooded Vest' &&
                        <Hooded />
                    }
                    {category === 'T-Shirt' && category_2 === 'Women' &&
                        <WomenTShirt />
                    }
                    {category === 'T-Shirt' && category_2 === 'Men' &&
                        <MenTShirt />
                    }
                    {category === 'Hoodie' &&
                        <Hoodie />
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;
