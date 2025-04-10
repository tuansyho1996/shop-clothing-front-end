import Image from "next/image";
import Hooded from "./modal_size_guide/size.hooded";
import WomenTShirt from "./modal_size_guide/size.women.t.shirt";
import MenTShirt from "./modal_size_guide/size.men.t.shirt";
import Hoodie from "./modal_size_guide/size.hoodie.unisex";
import UnisexPant from "./modal_size_guide/size.unisex.pant";
import UnisexSweatshirt from "./modal_size_guide/size.unisex.sweatshirt";
import UnisexShortPant from "./modal_size_guide/size.men.short.pant";
import KidZipUpHoodie from "./modal_size_guide/size.kid.zip.up.hoodie";
import UnisexZipUpHoodie from "./modal_size_guide/size.unisex.zip.up.hoodie";
const Modal = ({ isOpen, onClose, category, category_2 }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };
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
                    {category === 'Hooded Vest' && category_2 === 'Unisex' &&
                        <Hooded />
                    }
                    {category === 'T-Shirt' && category_2 === 'Women' &&
                        <WomenTShirt />
                    }
                    {category === 'T-Shirt' && category_2 === 'Men' &&
                        <MenTShirt />
                    }
                    {category === 'Hoodie' && category_2 === 'Unisex' &&
                        <Hoodie />
                    }
                    {category === 'Pant' && category_2 === 'Unisex' &&
                        <UnisexPant />
                    }
                    {category === 'Sweatshirt' && category_2 === 'Unisex' &&
                        <UnisexSweatshirt />
                    }
                    {category === 'Zip Hoodie' && category_2 === 'Kid' &&
                        <KidZipUpHoodie />
                    }
                    {category === 'Zip Hoodie' && category_2 === 'Unisex' &&
                        <UnisexZipUpHoodie />
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;
