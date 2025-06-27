
const KidPant = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'Waist elastic band, tight waist and foot',
        'Because of the characteristics of the fabric, there will be marl after printing.',
        'Fabric Weight: 310 g/m².',
        'The fabric of this product is composed of 100% natural fibers, and the shrinkage is estimated to be 3%-5%.',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                100% pure cotton, natural fiber, environmentally friendly material, perfect for eco-conscious shoppers. Strong heat retention, keep you warm at cold nights. The elastic belt at the waist can be adjusted freely, and tight waist and foot can prevent cold air from pouring in.
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
export default KidPant;