
const UnisexHooded = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'Kangaroo pocket, with drawstring',
        'Fabric Weight: 310 g/m².',
        'Because of the characteristics of the fabric, there will be marl after printing.',
        'The fabric of this product is composed of 100% natural fibers, and the shrinkage is estimated to be 3%-5%.',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                100% high-quality cotton vest can be used as a coat, shirt, base coat, etc; The front kangaroo pocket can prevent the loss of mobile phone earphones and other carry on items.
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
export default UnisexHooded;