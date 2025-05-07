import MenTShirt from "@/components/page_product/modal_size_guide/size.men.t.shirt";
import UnisexHooded from "@/components/page_product/modal_size_guide/size.unisex.hooded";
import UnisexHoodie from "@/components/page_product/modal_size_guide/size.unisex.hoodie";
import UnisexPant from "@/components/page_product/modal_size_guide/size.unisex.pant";
import UnisexSweatshirt from "@/components/page_product/modal_size_guide/size.unisex.sweatshirt";
import UnisexZipUpHoodie from "@/components/page_product/modal_size_guide/size.unisex.zip.up.hoodie";
import WomenTShirt from "@/components/page_product/modal_size_guide/size.women.t.shirt";
import KidHoodie from "@/components/page_product/modal_size_guide/size.kid.hoodie";
import KidTShirt from "@/components/page_product/modal_size_guide/size.kid.t.shirt";
import KidSweatshirt from "@/components/page_product/modal_size_guide/size.kid.sweatshirt";
import KidPant from "@/components/page_product/modal_size_guide/size.kid.pant";
import KidZipHoodie from "@/components/page_product/modal_size_guide/size.kid.zip.up.hoodie";

const Zising = () => {
    return (
        <div className="container w-full mx-auto mt-5">
            <h1 className="text-4xl font-bold mb-4 text-center">Sizing</h1>
            <p className="text-lg mb-4">Unisex Hoodie</p>
            <UnisexHoodie />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Unisex Zip Hoodie</p>
            <UnisexZipUpHoodie />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Unisex Sweatshirt</p>
            <UnisexSweatshirt />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Unisex Hooded Vest</p>
            <UnisexHooded />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Unisex Pant</p>
            <UnisexPant />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Men's T-shirt</p>
            <MenTShirt />
            <hr className="border-t border-gray-300 my-5" /> 
            <p className="text-lg mb-4">Women's T-shirt</p>
            <WomenTShirt />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Kid's Hoodie</p>
            <KidHoodie />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Kid's T-shirt</p>
            <KidTShirt />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Kid's Sweatshirt</p>
            <KidSweatshirt />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Kid's Zip Hoodie</p>
            <KidZipHoodie />
            <hr className="border-t border-gray-300 my-5" />
            <p className="text-lg mb-4">Kid's Pant</p>
            <KidPant />
            <hr className="border-t border-gray-300 my-5" />


        </div>
    );
}
export default Zising;