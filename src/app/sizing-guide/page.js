import UnisexHooded from "@/components/page_product/modal_size_guide/size.unisex.hooded";
import UnisexHoodie from "@/components/page_product/modal_size_guide/size.unisex.hoodie";
import UnisexPant from "@/components/page_product/modal_size_guide/size.unisex.pant";
import UnisexSweatshirt from "@/components/page_product/modal_size_guide/size.unisex.sweatshirt";
import UnisexZipUpHoodie from "@/components/page_product/modal_size_guide/size.unisex.zip.up.hoodie";

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





        </div>
    );
}
export default Zising;