import UnisexDetail from "./unisex.hoodie.detail";
import UnisexZipHoodieDetail from "./unisex.zip.hoodie.detail";

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
        </div>
    )
}
export default DetailProduct;
