
const UnisexPant = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'Elastic waist, closed feet, side pockets',
        'Fabric Weight: 310 g/m².',
        'The fabric of this product is composed of 100% natural fibers, and the shrinkage is estimated to be 3%-5%.',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">
                The pure cotton adds comfort to the pants, which is close to the skin and soft, and can be controlled by sports and leisure style.The waist elastic band can be adjusted freely; Side pockets can be used to store items such as mobile phones, so you don't have to worry about losing them even when running.
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
export default UnisexPant;