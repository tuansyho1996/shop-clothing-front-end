const UnisexZipHoodieDetail = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'Classic round neck, long sleeve, loop pettern inside.',
        'Fabric Weight: 310 g/m².',
        'Because of the characteristics of the fabric, there will be marl after printing.',
        'The fabric of this product is composed of 100% natural fibers, and the shrinkage is estimated to be 3%-5%.',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                100% pure cotton, natural fiber, environmentally friendly material, perfect for eco-conscious shoppers. Strong heat retention, keep you warm at cold nights. Large side pockets are perfect for carrying your phone, keys or wallet. Zipper design makes this hoodie more convenient to wear.
            </p>
            <ul className="list-disc pl-5">
                {
                    list.map((el, index) => (
                        <li key={index}>
                            {el}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default UnisexZipHoodieDetail;