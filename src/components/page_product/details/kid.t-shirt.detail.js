
const KidTshirt = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'classic round neck',
        'Fabric Weight: 180 g/m².',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                The classic round neck design makes the T-shirt simple and elegant, stylish and good-looking; the reinforced stitching technology makes the T-shirt durable and of high quality. Pure cotton material, skin-friendly and soft, cares for your skin and makes you feel comfortable and warm.
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
export default KidTshirt;