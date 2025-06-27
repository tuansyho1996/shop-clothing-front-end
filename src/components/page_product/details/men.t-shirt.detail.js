
const MenTshirt = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'Classic round neck',
        'Fabric Weight: 190 g/m².',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                Of high-quality 100% cotton, this T-shirt is perfect for eco-conscious shoppers; Could provide you comfortable and breathable feeling in any season.
            </p>
            <ul className="list-disc ml-5">
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
export default MenTshirt;