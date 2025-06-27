const KidHoodieDetail = () => {
    const list = [
        'Fabric: 100% Cotton',
        'Regular fit',
        'Long sleeve',
        'Fabric Weight: 310 g/m².',
        'Because of the characteristics of the fabric, there will be marl after printing.',
        'The fabric of this product is composed of 100% natural fibers, and the shrinkage is estimated to be 3%-5%.',
        'Care Instruction: machine wash cold with similar colors, line drying, do not bleach and dry clean, iron at a maximum sole-plate temperature of 110°C without steam steam ironing may cause irreversible damage.'
    ]
    return (
        <div className="product-detail">
            <p className="mt-5">Cotton clothes are soft and comfortable, and they can also keep warm in autumn and winter; With high-quality printing, you can create many fashionable clothes.</p>
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
export default KidHoodieDetail;