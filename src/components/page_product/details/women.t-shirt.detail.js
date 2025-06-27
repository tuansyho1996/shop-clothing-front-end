
const WomenTshirt = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'O-neck, lightweight and breathable, soft and comfortable.',
        'Fabric Weight: 190 g/m².',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                100% cotton fabric makes the T-shirt skin-friendly and comfortable, round neckline and feminine cut can help to show your sexy collarbone, keeping you cool and relaxed all day.
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
export default WomenTshirt;