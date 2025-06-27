import KidHoodieDetail from "./kid.hoodie.detail";
import KidPant from "./kid.pant.detail";
import KidSweatshirt from "./kid.sweatshirt.detail";
import KidTshirt from "./kid.t-shirt.detail";
import KidZipHoodieDetail from "./kid.zip.hoodie.detail";
import MenTshirt from "./men.t-shirt.detail";
import UnisexHooded from "./unisex.hooded.vest.detail";
import UnisexDetail from "./unisex.hoodie.detail";
import UnisexPant from "./unisex.pant.detail";
import UnisexShortPant from "./unisex.short.pant.detail";
import UnisexSweatshirt from "./unisex.sweatshirt.detail";
import UnisexZipHoodieDetail from "./unisex.zip.hoodie.detail";
import WomenTshirt from "./women.t-shirt.detail";

const DetailProduct = ({ category, category_2 }) => {
    return (
        <div className="product-detail">
            {
                category_2 === 'Unisex' && category === 'Hoodie' &&
                <UnisexDetail />
            }
            {
                category_2 === 'Unisex' && category === 'Zip Hoodie' &&
                <UnisexZipHoodieDetail />
            }
            {
                category_2 === 'Kid' && category === 'Hoodie' &&
                <KidHoodieDetail />
            }
            {
                category_2 === 'Kid' && category === 'Zip Hoodie' &&
                <KidZipHoodieDetail />
            }
            {
                category_2 === 'Unisex' && category === 'Sweatshirt' &&
                <UnisexSweatshirt />
            }
            {
                category_2 === 'Kid' && category === 'Sweatshirt' &&
                <KidSweatshirt />
            }
            {
                category_2 === 'Unisex' && category === 'Hooded Vest' &&
                <UnisexHooded />
            }
            {
                category_2 === 'Unisex' && category === 'Pant' &&
                <UnisexPant />
            }
            {
                category_2 === 'Unisex' && category === 'Short Pant' &&
                <UnisexShortPant />
            }
            {
                category_2 === 'Kid' && category === 'Pant' &&
                <KidPant />
            }
            {
                category_2 === 'Men' && category === 'T-Shirt' &&
                <MenTshirt />
            }
            {
                category_2 === 'Women' && category === 'T-Shirt' &&
                <WomenTshirt />
            }
            {
                category_2 === 'Kid' && category === 'T-Shirt' &&
                <KidTshirt />
            }
        </div>
    )
}
export default DetailProduct;
